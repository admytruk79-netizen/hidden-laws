(()=>{
  const cards=[...document.querySelectorAll('.bio-lineage-card')];
  const paths=['/assets/generated/siberian-shaman.png','/assets/generated/tibetan-yogi.png','/assets/generated/cossack-kharakternyk.png'];
  cards.slice(0,3).forEach((card,i)=>{
    const img=card.querySelector('img');
    if(!img)return;
    img.removeAttribute('srcset');
    img.removeAttribute('sizes');
    img.src=paths[i];
    img.loading=i===0?'eager':'lazy';
    img.decoding='async';
  });
})();
