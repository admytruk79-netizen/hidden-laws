function json(data,status=200,headers={}){return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store',...headers}})}
function b64(bytes){return btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/=+$/,'')}
async function sign(secret,value){const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);return b64(await crypto.subtle.sign('HMAC',key,new TextEncoder().encode(value)))}
async function authorized(context){
  const secret=(context.env.SESSION_SECRET||'').trim(); if(!secret)return false;
  const cookie=context.request.headers.get('cookie')||''; const m=cookie.match(/(?:^|;\s*)hl_admin=([^;]+)/); if(!m)return false;
  const [payload,sig]=m[1].split('.'); if(!payload||!sig||Number(payload)<Date.now())return false;
  return sig===await sign(secret,payload);
}

async function readStore(store){
  if(!store)return [];
  const listed=await store.list({prefix:'inquiry:',limit:100});
  const items=[];
  for(const key of listed.keys){
    try{const raw=await store.get(key.name);if(raw)items.push(JSON.parse(raw))}catch{}
  }
  return items;
}

export async function onRequestGet(context){
  if(!await authorized(context))return json({error:'Unauthorized.'},401);
  try{
    const byId=new Map();
    for(const item of await readStore(context.env.CONTENT))if(item?.id)byId.set(item.id,item);
    for(const item of await readStore(context.env.CONTACTS))if(item?.id)byId.set(item.id,item);
    const inquiries=[...byId.values()].sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt))).slice(0,100);
    return json({inquiries});
  }catch{return json({error:'Unable to load inquiries.'},500)}
}
