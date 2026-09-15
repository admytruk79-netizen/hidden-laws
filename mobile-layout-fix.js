(()=>{
  if(document.getElementById('hidden-laws-mobile-layout-fix')) return;
  const style=document.createElement('style');
  style.id='hidden-laws-mobile-layout-fix';
  style.textContent=`
    @media (max-width:760px){
      html,body{width:100%;max-width:100vw;overflow-x:hidden!important}
      .wrap{width:calc(100% - 40px)!important;max-width:calc(100% - 40px)!important;margin-left:auto!important;margin-right:auto!important;padding-left:0!important;padding-right:0!important}
      header .wrap{width:calc(100% - 40px)!important;max-width:calc(100% - 40px)!important;margin-left:auto!important;margin-right:auto!important}
      .hero-grid,.split,.ancestral,.section-head,.grid2,.grid3,.ascend-grid,.contact-grid,.booking-top,.bio-lineage,.bio-lineage-grid{min-width:0!important;width:100%!important;max-width:100%!important}
      section,.hero,header,footer,main{width:100%;max-width:100vw;overflow-x:hidden!important}
      h1,h2,h3,p,.lead,.intro,.statement,.principle,.card,.book,.contact-copy,.bio-lineage-card,.bio-lineage-note{max-width:100%!important;min-width:0!important;overflow-wrap:anywhere!important;word-break:normal!important}
      .hero h1{font-size:clamp(3.05rem,15vw,4.8rem);line-height:.92}
      .statement{font-size:clamp(1.75rem,8vw,2.7rem)}
      .card,.booking-shell,.ancestral-map,.bio-lineage-card{width:100%!important;min-width:0!important;max-width:100%!important}
      .bio-lineage-card{overflow:hidden!important}
      .art-frame{width:100%!important;max-width:100%!important;min-width:0!important}
      .art-frame img,.bio-lineage-image{max-width:100%!important;height:auto!important}
      nav{width:100%;min-width:0}
      .brand{min-width:0;overflow:hidden;text-overflow:ellipsis}
      .hero-actions,.hero-actions .btn{width:100%!important;max-width:100%!important}
    }
  `;
  document.head.appendChild(style);
})();
