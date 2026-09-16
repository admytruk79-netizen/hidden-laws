(()=>{
  if(document.getElementById('hidden-laws-visual-layout-fix')) return;
  const style=document.createElement('style');
  style.id='hidden-laws-visual-layout-fix';
  style.textContent=`
    /* Never crop artwork when motion starts. */
    .art-frame .art-media{
      overflow:hidden!important;
      min-height:0!important;
      height:auto!important;
    }
    .art-frame .art-media img{
      display:block!important;
      width:100%!important;
      height:auto!important;
      max-width:100%!important;
      max-height:none!important;
      object-fit:contain!important;
      object-position:center!important;
      transform:none!important;
      animation:hlSafeBreath 8s ease-in-out infinite!important;
      will-change:filter,opacity!important;
    }
    @keyframes hlSafeBreath{
      0%,100%{filter:contrast(1.04) saturate(1.05) brightness(1);opacity:1}
      50%{filter:contrast(1.06) saturate(1.08) brightness(1.035);opacity:.985}
    }

    /* Remove the oversized empty image wells. */
    .art-frame .art-media,
    .hero-art .art-media,
    .art-path .art-media,
    .art-akharata .art-media,
    .art-tree .art-media,
    .art-lotus .art-media,
    .art-threshold .art-media,
    .art-integration .art-media{
      aspect-ratio:auto!important;
    }

    /* Lineage cards: one consistent image area, full image visible, no giant blank zone. */
    .bio-lineage-card{
      display:flex!important;
      flex-direction:column!important;
      padding:0!important;
      overflow:hidden!important;
    }
    .bio-lineage-image,
    .bio-lineage-card img{
      display:block!important;
      width:100%!important;
      height:auto!important;
      aspect-ratio:16/10!important;
      object-fit:contain!important;
      object-position:center!important;
      margin:0!important;
      transform:none!important;
      animation:hlSafeBreath 9s ease-in-out infinite!important;
      background:#0c1726!important;
      border-bottom:1px solid rgba(255,255,255,.10)!important;
    }
    .bio-lineage-card-body{
      padding:20px!important;
    }
    .bio-lineage h3,
    .bio-lineage-card strong{
      font-family:Arial,Helvetica,sans-serif!important;
    }

    @media(max-width:760px){
      .bio-lineage-image,.bio-lineage-card img{aspect-ratio:4/3!important}
      .bio-lineage-card-body{padding:18px!important}
    }

    @media(prefers-reduced-motion:reduce){
      .art-frame .art-media img,.bio-lineage-image,.bio-lineage-card img{animation:none!important}
    }
  `;
  document.head.appendChild(style);
})();