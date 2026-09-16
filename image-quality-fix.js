(()=>{
  if(document.getElementById('hidden-laws-image-quality-fix')) return;
  const style=document.createElement('style');
  style.id='hidden-laws-image-quality-fix';
  style.textContent=`
    /* Do not enlarge small source artwork beyond its native detail. */
    .art-media{
      display:flex!important;
      align-items:center!important;
      justify-content:center!important;
      background:radial-gradient(circle at 50% 40%,rgba(242,209,140,.06),transparent 42%),linear-gradient(180deg,#0d1c30,#08111f)!important;
      overflow:hidden!important;
    }
    .art-media img{
      display:block!important;
      width:auto!important;
      height:auto!important;
      max-width:100%!important;
      max-height:100%!important;
      object-fit:contain!important;
      image-rendering:auto!important;
      transform:none!important;
      filter:none!important;
      animation:none!important;
      will-change:auto!important;
    }

    /* Small source files: keep them from being blown up across large cards. */
    .art-path .art-media img,
    .art-threshold .art-media img,
    .art-tree .art-media img,
    .art-lotus .art-media img{
      max-width:min(100%,560px)!important;
      max-height:min(100%,560px)!important;
    }

    /* Better-sized media wells so low-resolution sources are not stretched vertically. */
    .section-art-grid .art-media{aspect-ratio:4/3!important;min-height:0!important}
    .hero-art .art-media{aspect-ratio:4/5!important;min-height:0!important}

    .bio-lineage-image,
    .bio-lineage-card img{
      width:100%!important;
      height:auto!important;
      aspect-ratio:auto!important;
      object-fit:contain!important;
      transform:none!important;
      filter:none!important;
      animation:none!important;
      background:#0b1728!important;
    }

    @media(max-width:760px){
      .section-art-grid .art-media,
      .hero-art .art-media{aspect-ratio:auto!important;min-height:0!important;padding:14px!important}
      .art-media img{width:auto!important;height:auto!important;max-width:100%!important;max-height:72vh!important}
      .art-path .art-media img,
      .art-threshold .art-media img,
      .art-tree .art-media img,
      .art-lotus .art-media img{max-width:min(100%,520px)!important}
    }

    @media(min-width:761px) and (max-width:1100px){
      .art-path .art-media img,
      .art-threshold .art-media img,
      .art-tree .art-media img,
      .art-lotus .art-media img{max-width:560px!important}
    }
  `;
  document.head.appendChild(style);
})();
