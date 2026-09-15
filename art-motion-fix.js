(()=>{
  if(document.getElementById('hidden-laws-art-motion-fix')) return;
  const style=document.createElement('style');
  style.id='hidden-laws-art-motion-fix';
  style.textContent=`
    /* Keep the artwork crisp, but make the motion visibly intentional. */
    .art-frame .art-media{overflow:hidden!important;isolation:isolate}
    .art-frame .art-media img{
      display:block!important;
      width:100%!important;
      height:100%!important;
      max-width:100%!important;
      object-fit:contain!important;
      image-rendering:auto!important;
      filter:contrast(1.055) saturate(1.07)!important;
      backface-visibility:hidden!important;
      transform-origin:50% 50%!important;
      will-change:transform!important;
    }

    .art-threshold .art-media img{animation:hlThresholdMove 9s ease-in-out infinite alternate!important}
    .art-integration .art-media img{animation:hlIntegrationMove 8s ease-in-out infinite!important}
    .art-path .art-media img{animation:hlPathMove 9.5s ease-in-out infinite alternate!important}
    .art-akharata .art-media img{animation:hlAkharataMove 10s ease-in-out infinite!important}
    .art-tree .art-media img{animation:hlTreeMove 8.5s ease-in-out infinite alternate!important;transform-origin:50% 82%!important}
    .art-lotus .art-media img{animation:hlLotusMove 7.5s ease-in-out infinite!important}

    .art-frame:before{animation:hlOuterGlow 4.8s ease-in-out infinite!important;opacity:.55!important}
    .art-frame .art-media:before,.art-frame .art-media:after{opacity:.58!important}

    .art-frame.is-visible{box-shadow:0 30px 95px rgba(0,0,0,.38),0 0 34px rgba(212,174,103,.07)!important}
    .art-frame:hover{box-shadow:0 38px 115px rgba(0,0,0,.46),0 0 44px rgba(212,174,103,.13)!important}

    @keyframes hlThresholdMove{
      0%{transform:scale(1.015) translate3d(-.6%,.4%,0)}
      100%{transform:scale(1.045) translate3d(.8%,-.7%,0)}
    }
    @keyframes hlIntegrationMove{
      0%,100%{transform:scale(1.015) translate3d(0,0,0)}
      50%{transform:scale(1.04) translate3d(0,-.6%,0)}
    }
    @keyframes hlPathMove{
      0%{transform:scale(1.01) translate3d(-.5%,.3%,0)}
      100%{transform:scale(1.05) translate3d(.7%,-.5%,0)}
    }
    @keyframes hlAkharataMove{
      0%,100%{transform:scale(1.015) rotate(-.3deg)}
      50%{transform:scale(1.045) rotate(.35deg)}
    }
    @keyframes hlTreeMove{
      0%{transform:scale(1.015) rotate(-.35deg) translateY(.3%)}
      100%{transform:scale(1.04) rotate(.35deg) translateY(-.4%)}
    }
    @keyframes hlLotusMove{
      0%,100%{transform:scale(1.015) translateY(.4%)}
      50%{transform:scale(1.04) translateY(-1.1%)}
    }
    @keyframes hlOuterGlow{
      0%,100%{transform:scale(.99);opacity:.35}
      50%{transform:scale(1.035);opacity:.72}
    }

    /* Lineage images get motion too, rather than sitting as static thumbnails. */
    .bio-lineage-card{overflow:hidden!important;position:relative!important}
    .bio-lineage-card img,.bio-lineage-image{
      display:block!important;
      width:100%!important;
      max-width:100%!important;
      height:auto!important;
      object-fit:cover!important;
      filter:contrast(1.06) saturate(1.06)!important;
      transform:scale(1.015)!important;
      animation:hlLineageMove 10s ease-in-out infinite alternate!important;
      transform-origin:50% 45%!important;
      will-change:transform!important;
      backface-visibility:hidden!important;
    }
    .bio-lineage-card:nth-child(2) img{animation-delay:-3s!important}
    .bio-lineage-card:nth-child(3) img{animation-delay:-6s!important}
    @keyframes hlLineageMove{
      0%{transform:scale(1.015) translate3d(-.4%,.25%,0)!important}
      100%{transform:scale(1.055) translate3d(.55%,-.45%,0)!important}
    }

    @media(max-width:760px){
      .art-frame .art-media img{filter:contrast(1.06) saturate(1.08)!important}
      .bio-lineage-card img,.bio-lineage-image{transform:scale(1.01)!important}
    }
    @media(prefers-reduced-motion:reduce){
      .art-frame .art-media img,.bio-lineage-card img,.bio-lineage-image{animation:none!important;transform:none!important}
    }
  `;
  document.head.appendChild(style);
})();
