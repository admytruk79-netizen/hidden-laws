(()=>{
  if(document.getElementById('hl-touch-motion-style')) return;
  const style=document.createElement('style');
  style.id='hl-touch-motion-style';
  style.textContent=`
    .hl-touch-motion{
      touch-action:pan-y;
      will-change:transform;
      transition:transform .42s cubic-bezier(.16,.84,.28,1),box-shadow .35s ease,filter .35s ease;
      transform-style:preserve-3d;
    }
    .hl-touch-motion.hl-dragging{
      transition:none!important;
      filter:saturate(1.04) brightness(1.025);
      box-shadow:0 28px 72px rgba(0,0,0,.28);
    }
    .hl-touch-motion.hl-release{
      transition:transform .62s cubic-bezier(.16,1,.3,1),box-shadow .45s ease,filter .45s ease!important;
    }
    @media(prefers-reduced-motion:reduce){
      .hl-touch-motion,.hl-touch-motion.hl-dragging,.hl-touch-motion.hl-release{
        transform:none!important;transition:none!important;filter:none!important;
      }
    }
  `;
  document.head.appendChild(style);

  const selector='.card,.bio-lineage-card,.ancestral-map,.book,.booking-shell,.principle,.path-step';
  const MAX_X=18, MAX_ROT=1.8;

  function bind(el){
    if(el.dataset.hlTouchMotion==='1') return;
    el.dataset.hlTouchMotion='1';
    el.classList.add('hl-touch-motion');

    let active=false,startX=0,startY=0,lastX=0,locked=false;

    el.addEventListener('pointerdown',e=>{
      if(e.pointerType!=='touch'&&e.pointerType!=='pen') return;
      active=true;locked=false;startX=lastX=e.clientX;startY=e.clientY;
      el.classList.remove('hl-release');
      try{el.setPointerCapture(e.pointerId)}catch{}
    },{passive:true});

    el.addEventListener('pointermove',e=>{
      if(!active) return;
      const dx=e.clientX-startX,dy=e.clientY-startY;
      if(!locked){
        if(Math.abs(dx)<5&&Math.abs(dy)<5) return;
        locked=Math.abs(dx)>Math.abs(dy)*1.08;
        if(!locked){ active=false; return; }
      }
      lastX=e.clientX;
      const x=Math.max(-MAX_X,Math.min(MAX_X,dx*.42));
      const rot=(x/MAX_X)*MAX_ROT;
      const lift=Math.min(5,Math.abs(x)*.14);
      el.classList.add('hl-dragging');
      el.style.transform=`translate3d(${x.toFixed(1)}px,${(-lift).toFixed(1)}px,0) rotateY(${rot.toFixed(2)}deg) scale(1.012)`;
    },{passive:true});

    const release=e=>{
      if(!active&&!el.classList.contains('hl-dragging')) return;
      active=false;locked=false;
      el.classList.remove('hl-dragging');
      el.classList.add('hl-release');
      el.style.transform='';
      setTimeout(()=>el.classList.remove('hl-release'),700);
      try{el.releasePointerCapture(e.pointerId)}catch{}
    };
    el.addEventListener('pointerup',release,{passive:true});
    el.addEventListener('pointercancel',release,{passive:true});
  }

  document.querySelectorAll(selector).forEach(bind);
  const mo=new MutationObserver(()=>document.querySelectorAll(selector).forEach(bind));
  mo.observe(document.body,{childList:true,subtree:true});
})();