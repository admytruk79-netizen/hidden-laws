(async()=>{
  try{
    const r=await fetch('/api/content',{cache:'no-store'}); if(!r.ok)return; const c=await r.json();
    const text=(sel,key)=>{const el=document.querySelector(sel);if(el&&c[key])el.textContent=c[key]};
    text('.hero .kicker','heroKicker');
    if(c.heroTitle){const h=document.querySelector('.hero h1');if(h){const words=c.heroTitle.trim().split(/\s+/);if(words.length>1){h.innerHTML=`${words.slice(0,-2).join(' ')} <span>${words.slice(-2).join(' ')}</span>`}else h.textContent=c.heroTitle}}
    text('.hero .lead','heroLead');
    text('.mission .quote','mission');
    text('.mission .intro','missionBody');
    text('#about h2','aboutTitle');
    text('#about .intro','aboutBody');
    text('#booking .booking p','bookingIntro');
  }catch(e){}
})();
