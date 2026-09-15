(()=>{
  if(document.getElementById('hidden-laws-mobile-layout-fix')) return;
  const style=document.createElement('style');
  style.id='hidden-laws-mobile-layout-fix';
  style.textContent=`
    @media (max-width:760px){
      html,body{width:100%;max-width:100%;overflow-x:hidden!important}
      *,*:before,*:after{box-sizing:border-box;max-width:100%}
      .wrap{width:calc(100% - 32px)!important;max-width:calc(100% - 32px)!important;margin-left:16px!important;margin-right:16px!important;padding-left:0!important;padding-right:0!important}
      header .wrap{width:calc(100% - 32px)!important;max-width:calc(100% - 32px)!important;margin-left:16px!important;margin-right:16px!important}
      .hero-grid,.split,.ancestral,.section-head,.grid2,.grid3,.ascend-grid,.contact-grid,.booking-top{min-width:0!important;width:100%!important;max-width:100%!important}
      section,.hero,header,footer,main{width:100%!important;max-width:100%!important;overflow-x:hidden!important}
      h1,h2,h3,p,.lead,.intro,.statement,.principle,.card,.book,.contact-copy{max-width:100%!important;min-width:0!important;overflow-wrap:anywhere!important;word-break:normal!important}
      .hero h1{font-size:clamp(3.05rem,15vw,4.8rem);line-height:.92}
      .statement{font-size:clamp(1.75rem,8vw,2.7rem)}
      .card,.booking-shell,.ancestral-map{width:100%!important;min-width:0!important;max-width:100%!important}
      .art-frame{width:100%!important;max-width:100%!important;min-width:0!important}
      .art-frame img{display:block;width:100%!important;max-width:100%!important;height:auto!important}
      nav{width:100%;min-width:0}
      .brand{min-width:0;overflow:hidden;text-overflow:ellipsis}
      .hero-actions,.hero-actions .btn{width:100%!important;max-width:100%!important}

      /* Lineage section: force true single-column mobile sizing instead of relying on inherited grid sizing. */
      #about .bio-lineage{display:block!important;width:100%!important;max-width:100%!important;min-width:0!important;margin-left:0!important;margin-right:0!important;padding-left:0!important;padding-right:0!important;overflow:visible!important}
      #about .bio-lineage-grid{display:block!important;width:100%!important;max-width:100%!important;min-width:0!important;margin:0!important;padding:0!important}
      #about .bio-lineage-card{display:block!important;width:100%!important;max-width:100%!important;min-width:0!important;margin:0 0 18px!important;padding:20px!important;overflow:hidden!important}
      #about .bio-lineage-card img,#about .bio-lineage-image{display:block!important;width:100%!important;max-width:100%!important;height:auto!important;margin:0 0 16px!important;object-fit:cover!important}
      #about .bio-lineage-card strong,#about .bio-lineage-card p,#about .bio-lineage-card .label,#about .bio-lineage-note{display:block;max-width:100%!important;width:auto!important;min-width:0!important;white-space:normal!important;overflow-wrap:anywhere!important}
      #about .bio-lineage-note{margin-left:0!important;margin-right:0!important;padding-left:0!important;padding-right:0!important}
    }
  `;
  document.head.appendChild(style);
})();
