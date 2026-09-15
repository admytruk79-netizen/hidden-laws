(()=>{
  if(document.getElementById('hidden-laws-mobile-layout-fix')) return;
  const style=document.createElement('style');
  style.id='hidden-laws-mobile-layout-fix';
  style.textContent=`
    @media (max-width:760px){
      html,body{width:100%;max-width:100vw;overflow-x:clip!important}
      .wrap{width:auto!important;max-width:none!important;margin-left:max(22px,env(safe-area-inset-left))!important;margin-right:max(22px,env(safe-area-inset-right))!important}
      header .wrap{margin-left:max(22px,env(safe-area-inset-left))!important;margin-right:max(22px,env(safe-area-inset-right))!important}
      .hero-grid,.split,.ancestral,.section-head,.grid2,.grid3,.ascend-grid,.contact-grid,.booking-top{min-width:0!important;width:100%!important}
      section,.hero,header,footer{max-width:100vw;overflow-x:clip}
      h1,h2,h3,p,.lead,.intro,.statement,.principle,.card,.book,.contact-copy{max-width:100%;overflow-wrap:break-word}
      .hero h1{font-size:clamp(3.2rem,16vw,5rem);line-height:.92}
      .statement{font-size:clamp(1.75rem,8vw,2.7rem)}
      .card,.booking-shell,.ancestral-map{width:100%;min-width:0}
      .art-frame{max-width:100%;min-width:0}
      nav{width:100%;min-width:0}
      .brand{min-width:0;overflow:hidden;text-overflow:ellipsis}
    }
  `;
  document.head.appendChild(style);
})();
