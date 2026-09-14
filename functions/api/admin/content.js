function json(data,status=200,headers={}){return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store',...headers}})}
function b64(bytes){return btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/=+$/,'')}
async function sign(secret,value){const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);return b64(await crypto.subtle.sign('HMAC',key,new TextEncoder().encode(value)))}
async function authorized(context){
  const secret=(context.env.SESSION_SECRET||'').trim(); if(!secret)return false;
  const cookie=context.request.headers.get('cookie')||''; const m=cookie.match(/(?:^|;\s*)hl_admin=([^;]+)/); if(!m)return false;
  const [payload,sig]=m[1].split('.'); if(!payload||!sig||Number(payload)<Date.now())return false;
  return sig===await sign(secret,payload);
}
const ALLOWED=['heroKicker','heroTitle','heroLead','mission','missionBody','aboutTitle','aboutBody','bookingIntro'];
export async function onRequestGet(context){
  if(!await authorized(context))return json({error:'Unauthorized.'},401);
  let saved={}; if(context.env.CONTENT){try{saved=JSON.parse((await context.env.CONTENT.get('site:content'))||'{}')}catch{}}
  return json(saved);
}
export async function onRequestPost(context){
  if(!await authorized(context))return json({error:'Unauthorized.'},401);
  if(!context.env.CONTENT)return json({error:'CONTENT KV binding is not configured.'},503);
  let body;try{body=await context.request.json()}catch{return json({error:'Invalid request.'},400)}
  const clean={}; for(const key of ALLOWED){if(body[key]!==undefined)clean[key]=String(body[key]).trim().slice(0,6000)}
  await context.env.CONTENT.put('site:content',JSON.stringify(clean)); return json({ok:true,content:clean});
}
