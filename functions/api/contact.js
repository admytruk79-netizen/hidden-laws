function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}})}
function clean(v,max=4000){return String(v||'').trim().slice(0,max)}
export async function onRequestPost(context){
  let body;try{body=await context.request.json()}catch{return json({error:'Invalid request.'},400)}
  const name=clean(body.name,120),email=clean(body.email,220),subject=clean(body.subject,220),message=clean(body.message,5000);
  if(!name||!email||!subject||!message)return json({error:'Please complete all fields.'},400);
  if(!/^\S+@\S+\.\S+$/.test(email))return json({error:'Please enter a valid email address.'},400);
  const record={id:crypto.randomUUID(),createdAt:new Date().toISOString(),name,email,subject,message};
  if(context.env.CONTACTS){await context.env.CONTACTS.put(`inquiry:${record.createdAt}:${record.id}`,JSON.stringify(record));return json({ok:true});}
  if(context.env.RESEND_API_KEY&&context.env.CONTACT_TO&&context.env.CONTACT_FROM){
    const r=await fetch('https://api.resend.com/emails',{method:'POST',headers:{authorization:`Bearer ${context.env.RESEND_API_KEY}`,'content-type':'application/json'},body:JSON.stringify({from:context.env.CONTACT_FROM,to:[context.env.CONTACT_TO],reply_to:email,subject:`Hidden Laws inquiry: ${subject}`,text:`Name: ${name}\nEmail: ${email}\n\n${message}`})});
    if(r.ok)return json({ok:true});
    return json({error:'The message service is temporarily unavailable.'},502);
  }
  return json({error:'The inquiry backend is not configured yet. Please email admytruk@proton.me.'},503);
}
