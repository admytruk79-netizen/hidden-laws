(()=>{
  if(document.getElementById('hidden-laws-typography-stability')) return;
  const style=document.createElement('style');
  style.id='hidden-laws-typography-stability';
  style.textContent=`
    :root{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
    html,body{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif!important;overflow-x:clip!important;max-width:100vw!important}
    h1,h2,h3,h4,h5,h6,.statement,.orbit-core strong,.art-copy h3,.booking-top h2,.contact-copy h3,.bio-lineage-card h3,.bio-lineage-title{
      font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif!important;
      letter-spacing:-.035em;
    }
    .hero h1{font-weight:650!important;line-height:.94!important;letter-spacing:-.05em!important}
    h2,.statement{font-weight:620!important}
    h3,.art-copy h3{font-weight:650!important}

    /* Lock the viewport so animated art cannot make the page drift sideways. */
    body,main,header,footer,section,.hero,.trust{overflow-x:clip!important;max-width:100vw!important}
    .wrap,.hero-grid,.split,.ancestral,.section-head,.grid2,.grid3,.ascend-grid,.contact-grid,.booking-top,.section-art-grid,.bio-lineage,.bio-lineage-grid{min-width:0!important;max-width:100%!important}
    .art-frame,.art-media,.bio-lineage-card{overflow:hidden!important;contain:paint}

    /* Phones/tablets keep animation, but remove sideways pan/rotation that causes visual screen movement. */
    @media(max-width:1100px){
      .art-threshold .art-media img{animation:hlStableFloatA 8.5s ease-in-out infinite alternate!important}
      .art-integration .art-media img{animation:hlStableFloatB 8s ease-in-out infinite!important}
      .art-path .art-media img{animation:hlStableFloatA 9.5s ease-in-out infinite alternate!important}
      .art-akharata .art-media img{animation:hlStablePulse 9s ease-in-out infinite!important}
      .art-tree .art-media img{animation:hlStableFloatB 8.5s ease-in-out infinite alternate!important}
      .art-lotus .art-media img{animation:hlStableFloatA 7.5s ease-in-out infinite!important}
      .bio-lineage-card img,.bio-lineage-image{animation:hlStableFloatA 10s ease-in-out infinite alternate!important}
    }
    @keyframes hlStableFloatA{0%{transform:scale(1.015) translate3d(0,.2%,0)}100%{transform:scale(1.045) translate3d(0,-.45%,0)}}
    @keyframes hlStableFloatB{0%,100%{transform:scale(1.015) translate3d(0,0,0)}50%{transform:scale(1.04) translate3d(0,-.55%,0)}}
    @keyframes hlStablePulse{0%,100%{transform:scale(1.015)}50%{transform:scale(1.045)}}
  `;
  document.head.appendChild(style);
})();