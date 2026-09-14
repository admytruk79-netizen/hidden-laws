function json(data,status=200,headers={}){return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store',...headers}})}
function b64(bytes){return btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/=+$/,'')}
async function sign(secret,value){const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);return b64(await crypto.subtle.sign('HMAC',key,new TextEncoder().encode(value)))}
export async function onRequestPost(context){
  const expected=(context.env.ADMIN_PASSWORD||'').trim(), secret=(context.env.SESSION_SECRET||'').trim();
  if(!expected||!secret)return json({error:'Admin access is not configured.'},503);
  let body;try{body=await context.request.json()}catch{return json({error:'Invalid request.'},400)}
  if(String(body.password||'')!==expected)return json({error:'Incorrect password.'},401);
  const exp=Date.now()+12*60*60*1000, payload=String(exp), sig=await sign(secret,payload);
  return json({ok:true},200,{'set-cookie':`hl_admin=${payload}.${sig}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=43200`});
}
