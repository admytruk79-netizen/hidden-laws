(()=>{
  const minBytes = 50000;
  const makeOrbit = ()=>{
    const d=document.createElement('div');
    d.className='hero-art';
    d.setAttribute('aria-hidden','true');
    d.innerHTML='<div class="orbit"><div class="orbit-label ol1">Inner</div><div class="orbit-label ol2">Visible</div><div class="orbit-label ol3">Outer</div><div class="orbit-label ol4">Subtle</div><div class="orbit-core"><div><strong>HL</strong><span>Unite · Integrate</span></div></div></div>';
    return d;
  };
  async function check(frame){
    const img=frame.querySelector('img');
    if(!img) return;
    try{
      const u=new URL(img.src,location.href);
      if(u.origin!==location.origin) return;
      const r=await fetch(u.pathname,{method:'HEAD',cache:'no-store'});
      const len=Number(r.headers.get('content-length')||0);
      if(!r.ok || (len && len<minBytes)){
        if(frame.classList.contains('hero-art')){
          frame.replaceWith(makeOrbit());
        }else{
          frame.remove();
        }
      }
    }catch(e){
      if(frame.classList.contains('hero-art')) frame.replaceWith(makeOrbit());
      else frame.remove();
    }
  }
  requestAnimationFrame(()=>document.querySelectorAll('.art-frame').forEach(check));
})();