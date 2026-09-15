(()=>{
  if(document.getElementById('hidden-laws-mobile-layout-fix')) return;
  const style=document.createElement('style');
  style.id='hidden-laws-mobile-layout-fix';
  style.textContent=`
    html,body{width:100%;max-width:100%;overflow-x:hidden!important}
    *,*:before,*:after{box-sizing:border-box}
    img,svg,video,canvas{max-width:100%;height:auto}
    .wrap{width:min(1180px,calc(100% - 48px));margin-left:auto!important;margin-right:auto!important}
    .hero-grid,.split,.ancestral,.section-head,.grid2,.grid3,.ascend-grid,.contact-grid,.booking-top,.bio-lineage,.bio-lineage-grid{min-width:0}
    .art-frame,.bio-lineage-card,.card,.booking-shell,.ancestral-map{min-width:0;max-width:100%}
    .art-frame img,.bio-lineage-image{display:block;width:100%;height:100%;object-fit:cover}

    /* phones */
    @media (max-width:760px){
      .wrap{width:calc(100% - 32px)!important;max-width:calc(100% - 32px)!important;margin-left:16px!important;margin-right:16px!important;padding-left:0!important;padding-right:0!important}
      header .wrap{width:calc(100% - 32px)!important;max-width:calc(100% - 32px)!important;margin-left:16px!important;margin-right:16px!important}
      .hero-grid,.split,.ancestral,.section-head,.grid2,.grid3,.ascend-grid,.contact-grid,.booking-top{width:100%!important;max-width:100%!important}
      section,.hero,header,footer,main{width:100%!important;max-width:100%!important;overflow-x:hidden!important}
      h1,h2,h3,p,.lead,.intro,.statement,.principle,.card,.book,.contact-copy{max-width:100%!important;min-width:0!important;overflow-wrap:anywhere!important;word-break:normal!important}
      .hero h1{font-size:clamp(3.05rem,15vw,4.8rem);line-height:.92}
      .statement{font-size:clamp(1.75rem,8vw,2.7rem)}
      .card,.booking-shell,.ancestral-map{width:100%!important;max-width:100%!important}
      .art-frame{width:100%!important;max-width:100%!important}
      .art-media{aspect-ratio:4/5!important;min-height:0!important}
      .art-frame img{width:100%!important;height:100%!important;object-fit:cover!important}
      nav{width:100%;min-width:0}
      .brand{min-width:0;overflow:hidden;text-overflow:ellipsis}
      .hero-actions,.hero-actions .btn{width:100%!important;max-width:100%!important}
      #about .bio-lineage{display:block!important;width:100%!important;max-width:100%!important;margin:0!important;padding-left:0!important;padding-right:0!important;overflow:visible!important}
      #about .bio-lineage-grid{display:block!important;width:100%!important;max-width:100%!important;margin:0!important;padding:0!important}
      #about .bio-lineage-card{display:block!important;width:100%!important;max-width:100%!important;margin:0 0 18px!important;padding:20px!important;overflow:hidden!important}
      #about .bio-lineage-card img,#about .bio-lineage-image{display:block!important;width:100%!important;height:auto!important;aspect-ratio:4/5!important;margin:0 0 16px!important;object-fit:cover!important}
      #about .bio-lineage-card strong,#about .bio-lineage-card p,#about .bio-lineage-card .label,#about .bio-lineage-note{display:block;max-width:100%!important;width:auto!important;white-space:normal!important;overflow-wrap:anywhere!important}
      #about .bio-lineage-note{margin-left:0!important;margin-right:0!important;padding-left:0!important;padding-right:0!important}
    }

    /* tablets */
    @media (min-width:761px) and (max-width:1100px){
      .wrap{width:min(920px,calc(100% - 56px))!important}
      .hero-grid{grid-template-columns:minmax(0,1fr)!important;gap:36px!important}
      .hero h1{font-size:clamp(4rem,9vw,6.4rem)!important}
      .hero-art{max-width:720px;margin:0 auto;width:100%}
      .hero-art .art-media{aspect-ratio:16/10!important;min-height:0!important}
      .grid3,.ascend-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
      .grid2,.section-art-grid,.split,.ancestral,.contact-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:28px!important}
      .bio-lineage-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
      .bio-lineage-card img,.bio-lineage-image{aspect-ratio:4/3!important;object-fit:cover!important}
      .art-media{aspect-ratio:4/3!important}
    }

    /* desktop */
    @media (min-width:1101px){
      .wrap{width:min(1180px,calc(100% - 72px))!important}
      .hero-grid{grid-template-columns:minmax(0,1.12fr) minmax(360px,.88fr)!important;gap:68px!important}
      .hero-art .art-media{aspect-ratio:4/5!important;min-height:470px!important}
      .section-art-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
      .grid3{grid-template-columns:repeat(3,minmax(0,1fr))!important}
      .ascend-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important}
      .bio-lineage-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}
      .bio-lineage-card img,.bio-lineage-image{aspect-ratio:4/3!important;object-fit:cover!important}
      .art-media{aspect-ratio:4/3!important}
    }
  `;
  document.head.appendChild(style);
})();
