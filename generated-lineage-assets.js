(()=>{
  const sources=[
    '/assets/generated/siberian-shaman.b64',
    '/assets/generated/tibetan-yogi.b64',
    '/assets/generated/cossack-kharakternyk.b64'
  ];
  const cards=[...document.querySelectorAll('.bio-lineage-card')];
  cards.slice(0,3).forEach(async (card,i)=>{
    const img=card.querySelector('img');
    if(!img)return;
    try{
      const res=await fetch(sources[i],{cache:'no-store'});
      if(!res.ok)throw new Error(`asset ${i} ${res.status}`);
      const b64=(await res.text()).trim();
      img.removeAttribute('srcset');
      img.removeAttribute('sizes');
      img.loading=i===0?'eager':'lazy';
      img.decoding='async';
      img.src='data:image/webp;base64,'+b64;
    }catch(err){
      console.error('Generated lineage asset failed',err);
    }
  });
})();
