(()=>{
  const sources=[
    '/assets/generated/siberian-shaman-full.webp.b64.txt',
    '/assets/generated/tibetan-yogi-full.webp.b64.txt',
    '/assets/generated/cossack-kharakternyk-full.webp.b64.txt'
  ];
  const cards=[...document.querySelectorAll('.bio-lineage-card')];

  cards.slice(0,3).forEach(async (card,i)=>{
    const img=card.querySelector('img');
    if(!img)return;
    try{
      const res=await fetch(sources[i]+'?v=20260917-2',{cache:'no-store'});
      if(!res.ok)throw new Error(`lineage asset ${i} ${res.status}`);
      const b64=(await res.text()).trim();
      img.removeAttribute('srcset');
      img.removeAttribute('sizes');
      img.loading=i===0?'eager':'lazy';
      img.decoding='async';
      img.src='data:image/webp;base64,'+b64;
      img.style.width='100%';
      img.style.height='auto';
      img.style.aspectRatio='4 / 3';
      img.style.objectFit='cover';
      img.style.objectPosition='center';
    }catch(err){
      console.error('Generated lineage image failed',err);
    }
  });
})();
