(()=>{
  const existing=document.getElementById('hidden-laws-mobile-layout-fix');
  if(existing) existing.remove();
  const style=document.createElement('style');
  style.id='hidden-laws-mobile-layout-fix';
  style.textContent=`
    html,body{width:100%;max-width:100%;overflow-x:clip!important}
    *,*:before,*:after{box-sizing:border-box}
    img,svg,video,canvas{display:block;max-width:100%;height:auto}
    .wrap{width:min(1180px,calc(100% - 48px));margin-inline:auto!important}
    .hero-grid,.split,.ancestral,.section-head,.grid2,.grid3,.ascend-grid,.contact-grid,.booking-top,.bio-lineage,.bio-lineage-grid,.section-art-grid{min-width:0}
    .hero-grid>*,.split>*,.ancestral>*,.grid2>*,.grid3>*,.ascend-grid>*,.contact-grid>*,.booking-top>*,.section-art-grid>*{min-width:0;max-width:100%}
    .art-frame,.bio-lineage-card,.card,.booking-shell,.ancestral-map{min-width:0;max-width:100%}
    .art-frame img,.bio-lineage-image{width:100%;height:100%;object-fit:cover}

    /* PHONE */
    @media (max-width:760px){
      body{overflow-x:hidden!important}
      .wrap,header .wrap{width:auto!important;max-width:none!important;margin:0!important;padding-left:20px!important;padding-right:20px!important}
      section,.hero,header,footer,main{width:100%!important;max-width:100%!important;overflow-x:hidden!important}
      .hero-grid,.split,.ancestral,.section-head,.grid2,.grid3,.ascend-grid,.contact-grid,.booking-top,.section-art-grid,.bio-lineage,.bio-lineage-grid{display:grid!important;grid-template-columns:minmax(0,1fr)!important;width:100%!important;max-width:100%!important;gap:20px!important}
      .hero-grid>*,.split>*,.ancestral>*,.grid2>*,.grid3>*,.ascend-grid>*,.contact-grid>*,.booking-top>*,.section-art-grid>*{width:100%!important;min-width:0!important;max-width:100%!important}
      h1,h2,h3,p,.lead,.intro,.statement,.principle,.card,.book,.contact-copy,.bio-lineage-note{max-width:100%!important;min-width:0!important;overflow-wrap:break-word!important;word-break:normal!important}
      .hero{min-height:auto!important;padding:58px 0 56px!important}
      .hero h1{font-size:clamp(3rem,14vw,4.25rem)!important;line-height:.93!important;margin-top:14px!important}
      .lead{font-size:1.05rem!important;line-height:1.65!important}
      .statement{font-size:clamp(1.72rem,7.8vw,2.45rem)!important}
      .hero-actions{display:grid!important;grid-template-columns:1fr!important;width:100%!important;max-width:100%!important;gap:12px!important}
      .hero-actions .btn{display:flex!important;width:100%!important;max-width:100%!important;min-width:0!important;margin:0!important;padding-inline:18px!important}
      .card,.booking-shell,.ancestral-map,.art-frame{width:100%!important;max-width:100%!important;min-width:0!important}
      .art-media,.hero-art .art-media{width:100%!important;aspect-ratio:1/1!important;min-height:0!important;max-height:none!important}
      .art-frame img{width:100%!important;height:100%!important;object-fit:cover!important}
      .hero-art{width:100%!important;max-width:100%!important;min-height:0!important;margin:0!important}
      nav{width:100%!important;min-width:0!important}
      .brand{min-width:0!important;overflow:hidden!important;text-overflow:ellipsis!important}
      .books{grid-template-columns:1fr!important}
      .form{grid-template-columns:1fr!important}
      .form .full{grid-column:auto!important}
      #about .bio-lineage{display:block!important;width:100%!important;max-width:100%!important;margin:24px 0 0!important;padding:24px 0 0!important}
      #about .bio-lineage-grid{display:grid!important;grid-template-columns:1fr!important;width:100%!important;margin:0!important;padding:0!important}
      #about .bio-lineage-card{width:100%!important;max-width:100%!important;margin:0!important;padding:18px!important;overflow:hidden!important}
      #about .bio-lineage-card img,#about .bio-lineage-image{width:100%!important;height:auto!important;aspect-ratio:4/3!important;margin:0 0 14px!important;object-fit:cover!important}
    }

    /* TABLET */
    @media (min-width:761px) and (max-width:1100px){
      .wrap{width:min(920px,calc(100% - 56px))!important}
      .hero-grid{grid-template-columns:minmax(0,1fr)!important;gap:34px!important}
      .hero h1{font-size:clamp(4rem,8.5vw,6rem)!important}
      .hero-art{width:min(100%,760px)!important;margin:0 auto!important}
      .hero-art .art-media{aspect-ratio:16/10!important;min-height:0!important}
      .grid3,.ascend-grid,.grid2,.section-art-grid,.split,.ancestral,.contact-grid,.bio-lineage-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:24px!important}
      .art-media{aspect-ratio:4/3!important}
      .bio-lineage-card img,.bio-lineage-image{aspect-ratio:4/3!important;object-fit:cover!important}
    }

    /* DESKTOP */
    @media (min-width:1101px){
      .wrap{width:min(1180px,calc(100% - 72px))!important}
      .hero-grid{grid-template-columns:minmax(0,1.08fr) minmax(340px,.92fr)!important;gap:64px!important}
      .hero-art .art-media{aspect-ratio:4/5!important;min-height:470px!important}
      .section-art-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
      .grid3{grid-template-columns:repeat(3,minmax(0,1fr))!important}
      .ascend-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important}
      .bio-lineage-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}
      .bio-lineage-card img,.bio-lineage-image,.art-media{aspect-ratio:4/3!important;object-fit:cover!important}
    }
  `;
  document.head.appendChild(style);
})();
