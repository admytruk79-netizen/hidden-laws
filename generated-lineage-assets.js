(()=>{
  const sources=[
    '/assets/generated/siberian-shaman.webp',
    '/assets/generated/tibetan-yogi.webp',
    '/assets/generated/cossack-kharakternyk.webp'
  ];
  const cards=[...document.querySelectorAll('.bio-lineage-card')];
  cards.slice(0,3).forEach((card,i)=>{
    const img=card.querySelector('img');
    if(!img)return;
    img.removeAttribute('srcset');
    img.removeAttribute('sizes');
    img.loading=i===0?'eager':'lazy';
    img.decoding='async';
    img.src=sources[i];
    img.style.width='100%';
    img.style.height='auto';
    img.style.aspectRatio='4 / 3';
    img.style.objectFit='cover';
    img.style.objectPosition='center';
  });
})();
