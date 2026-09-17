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
    @media(max-width:760px){
      .bio-lineage-card .bio-lineage-image,
      .bio-lineage-card img{aspect-ratio:4/3!important}
    }
  `;
  document.head.appendChild(style);

  /* Do not replace the lineage artwork with unrelated remote photos.
     bio-lineage.js remains the source of the artwork until the new
     generated high-resolution assets are committed to the repository. */
})();
