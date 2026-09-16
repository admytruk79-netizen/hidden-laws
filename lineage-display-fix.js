(()=>{
  if(document.getElementById('hl-lineage-display-fix')) return;
  const fix=()=>{
    const section=document.querySelector('.bio-lineage');
    if(!section) return;
    const cards=[...section.querySelectorAll('.bio-lineage-card')];
    if(cards[2]){
      const img=cards[2].querySelector('img');
      if(img){
        img.src='/art/cossack-lineage.svg?v=20260916-1';
        img.alt='Cossack kharakternyk lineage at sunset';
      }
    }
  };
  const style=document.createElement('style');
  style.id='hl-lineage-display-fix';
  style.textContent=`
    .bio-lineage,.bio-lineage *{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif!important}
    .bio-lineage{width:100%!important;max-width:100%!important;overflow:hidden!important}
    .bio-lineage h3,.bio-lineage-card strong{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif!important;letter-spacing:-.02em!important}
    .bio-lineage-grid{display:grid!important;gap:18px!important;align-items:stretch!important}
    .bio-lineage-card{display:flex!important;flex-direction:column!important;min-width:0!important;max-width:100%!important;height:auto!important;padding:0!important;overflow:hidden!important;border-radius:24px!important}
    .bio-lineage-card>img,.bio-lineage-image{display:block!important;width:100%!important;max-width:100%!important;height:auto!important;aspect-ratio:16/9!important;object-fit:cover!important;margin:0!important;background:#0d1c30!important;animation:none!important;transform:none!important}
    .bio-lineage-card-body{padding:22px!important;min-width:0!important}
    .bio-lineage-card .label{margin-bottom:8px!important;font-size:.72rem!important;letter-spacing:.18em!important;text-transform:uppercase!important}
    .bio-lineage-card strong{display:block!important;font-size:clamp(1.22rem,2.4vw,1.72rem)!important;line-height:1.2!important;margin:0 0 10px!important;color:#fff!important}
    .bio-lineage-card p,.bio-lineage-note{font-size:1rem!important;line-height:1.65!important;max-width:100%!important;overflow-wrap:break-word!important;white-space:normal!important}
    .bio-lineage-note{margin:18px 0 0!important;padding:0!important}
    @media(max-width:760px){
      .bio-lineage{margin-top:24px!important;padding-top:20px!important}
      .bio-lineage-grid{grid-template-columns:1fr!important;gap:16px!important}
      .bio-lineage-card>img,.bio-lineage-image{aspect-ratio:16/10!important}
      .bio-lineage-card-body{padding:18px!important}
      .bio-lineage-card strong{font-size:1.3rem!important}
      .bio-lineage-card p,.bio-lineage-note{font-size:.98rem!important;line-height:1.6!important}
    }
    @media(min-width:761px) and (max-width:1100px){.bio-lineage-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
    @media(min-width:1101px){.bio-lineage-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}}
  `;
  document.head.appendChild(style);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(fix,0),{once:true});
  else setTimeout(fix,0);
  const observer=new MutationObserver(fix);
  observer.observe(document.documentElement,{childList:true,subtree:true});
  setTimeout(()=>observer.disconnect(),5000);
})();
