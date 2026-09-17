(()=>{
  const sources=[
    '/assets/generated/siberian-shaman.webp?v=20260917-4',
    '/assets/generated/tibetan-yogi.webp?v=20260917-4',
    '/assets/generated/cossack-kharakternyk.webp?v=20260917-4'
  ];
  function place(){
    const cards=[...document.querySelectorAll('.bio-lineage-card')];
    if(cards.length<3)return false;
    cards.slice(0,3).forEach((card,i)=>{
      let img=card.querySelector('img');
      if(!img){img=document.createElement('img');img.className='bio-lineage-image';card.prepend(img);}
      img.removeAttribute('srcset'); img.removeAttribute('sizes');
      img.loading=i===0?'eager':'lazy'; img.decoding='async';
      img.src=sources[i];
      Object.assign(img.style,{display:'block',width:'100%',height:'auto',aspectRatio:'4 / 3',objectFit:'cover',objectPosition:'center'});
    });
    return true;
  }
  function boot(){
    if(place())return;
    let tries=0;
    const t=setInterval(()=>{tries++; if(place()||tries>40)clearInterval(t);},150);
    const mo=new MutationObserver(()=>{if(place())mo.disconnect();});
    mo.observe(document.documentElement,{childList:true,subtree:true});
    setTimeout(()=>mo.disconnect(),8000);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true}); else boot();
})();
