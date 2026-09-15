function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}})}
function clean(v,max=4000){return String(v??'').trim().slice(0,max)}
function validEmail(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)}

export async function onRequestPost(context){
  let body;try{body=await context.request.json()}catch{return json({error:'Invalid request.'},400)}
  if(body.website)return json({ok:true});

  const name=clean(body.name,120),email=clean(body.email,220),subject=clean(body.subject,220),message=clean(body.message,5000);
  if(!name||!email||!subject||!message)return json({error:'Please complete all fields.'},400);
  if(!validEmail(email))return json({error:'Please enter a valid email address.'},400);

  const record={id:crypto.randomUUID(),createdAt:new Date().toISOString(),name,email,subject,message};
  const key=`inquiry:${record.createdAt}:${record.id}`;
  let stored=false,emailed=false;

  // Prefer the dedicated CONTACTS KV binding when present. If it is not configured,
  // persist inquiries in the already-used CONTENT KV so the form never becomes a dead end.
  const store=context.env.CONTACTS||context.env.CONTENT;
  if(store){try{await store.put(key,JSON.stringify(record));stored=true}catch{}}

  // Email delivery is optional; storage above is authoritative.
  const to=(context.env.CONTACT_TO||'admytruk@proton.me').trim();
  if(context.env.RESEND_API_KEY&&context.env.CONTACT_FROM&&to){
    try{
      const r=await fetch('https://api.resend.com/emails',{method:'POST',headers:{authorization:`Bearer ${context.env.RESEND_API_KEY}`,'content-type':'application/json'},body:JSON.stringify({from:context.env.CONTACT_FROM,to:[to],reply_to:email,subject:`Hidden Laws inquiry: ${subject}`,text:`Name: ${name}\nEmail: ${email}\n\n${message}`})});
      emailed=r.ok;
    }catch{}
  }

  if(stored||emailed)return json({ok:true,stored,emailed});
  return json({error:'Unable to save the inquiry right now. Please email admytruk@proton.me.'},503);
}
