(()=>{
  const style=document.createElement('style');
  style.id='lineage-image-quality';
  style.textContent=`
    .bio-lineage-card{overflow:hidden!important}
    .bio-lineage-card .bio-lineage-image,
    .bio-lineage-card img{
      width:100%!important;
      height:auto!important;
      aspect-ratio:4/3!important;
      object-fit:cover!important;
      object-position:center!important;
      display:block!important;
      transform:none!important;
      animation:none!important;
      filter:none!important;
      image-rendering:auto!important;
      background:#0b1728!important;
    }
    .bio-lineage-card:nth-child(1) img{object-position:center 28%!important}
    .bio-lineage-card:nth-child(2) img{object-position:center 50%!important}
    .bio-lineage-card:nth-child(3) img{object-position:center 34%!important}
    @media(max-width:760px){
      .bio-lineage-card .bio-lineage-image,
      .bio-lineage-card img{aspect-ratio:16/10!important}
    }
  `;
  document.head.appendChild(style);

  const sources=[
    'https://commons.wikimedia.org/wiki/Special:FilePath/Evenki%20shaman.jpg?width=1400',
    'https://commons.wikimedia.org/wiki/Special:FilePath/Key%20Monastery,%20Spiti%2009.jpg?width=1600',
    'https://commons.wikimedia.org/wiki/Special:FilePath/Repin%20Cossacks-e.jpg?width=1600'
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
  });
})();
