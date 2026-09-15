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
  let stored=false,emailed=false,emailError='';

  const store=context.env.CONTACTS||context.env.CONTENT;
  if(store){try{await store.put(key,JSON.stringify(record));stored=true}catch{}}

  const to=(context.env.CONTACT_TO||'admytruk@proton.me').trim();
  const from=(context.env.CONTACT_FROM||'Hidden Laws <contact@hidden-laws.com>').trim();
  if(context.env.RESEND_API_KEY&&to){
    try{
      const r=await fetch('https://api.resend.com/emails',{method:'POST',headers:{authorization:`Bearer ${context.env.RESEND_API_KEY}`,'content-type':'application/json'},body:JSON.stringify({from,to:[to],reply_to:email,subject:`Hidden Laws inquiry: ${subject}`,text:`Name: ${name}\nEmail: ${email}\n\n${message}`})});
      emailed=r.ok;
      if(!r.ok){
        const detail=await r.json().catch(()=>null);
        emailError=detail?.message||`Email provider returned ${r.status}.`;
      }
    }catch(err){emailError=err?.message||'Email delivery failed.'}
  }else{
    emailError='Email delivery is not configured.';
  }

  if(emailed)return json({ok:true,stored,emailed:true,message:'Your inquiry was sent.'});
  if(stored)return json({ok:true,stored:true,emailed:false,message:'Your inquiry was saved, but email delivery is not active yet.',emailError});
  return json({error:'Unable to save or email the inquiry right now. Please email admytruk@proton.me.',emailError},503);
}
