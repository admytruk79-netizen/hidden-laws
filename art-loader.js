(()=>{
  const assets={
    threshold:'/art/threshold.webp',
    integration:'/art/integration.webp',
    path:'/art/path.webp',
    akharata:'/art/akharata.webp',
    tree:'/art/tree.webp',
    lotus:'/art/lotus.webp'
  };

  const style=document.createElement('style');
  style.id='hidden-laws-art-style';
  style.textContent=`
    .art-frame{position:relative;overflow:hidden;isolation:isolate;border-radius:28px;border:1px solid rgba(242,209,140,.28);background:#0b1728;box-shadow:0 28px 90px rgba(0,0,0,.34);min-height:360px;opacity:0;transform:translateY(34px) scale(.97);filter:blur(8px);transition:opacity .9s ease,transform 1s cubic-bezier(.16,.84,.28,1),filter .9s ease}
    .art-frame.is-visible{opacity:1;transform:translateY(0) scale(1);filter:blur(0)}
    .art-frame img{display:block;width:100%;height:100%;min-height:360px;object-fit:cover;will-change:transform,filter}
    .art-frame:before{content:"";position:absolute;inset:-15%;z-index:2;pointer-events:none;background:radial-gradient(circle at 50% 42%,rgba(242,209,140,.24),transparent 56%);mix-blend-mode:screen;animation:artGlow 4.8s ease-in-out infinite}
    .art-frame:after{content:"";position:absolute;inset:0;z-index:3;pointer-events:none;border:1px solid rgba(242,209,140,.26);border-radius:inherit;box-shadow:inset 0 0 42px rgba(212,174,103,.08)}
    .hero-art.art-frame{min-height:470px;width:100%;display:block}
    .hero-art.art-frame img{min-height:470px}
    .section-art-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:34px}
    .section-art-grid .art-frame{margin:0}
    .art-caption{position:absolute;left:20px;right:20px;bottom:17px;z-index:4;padding:10px 12px;border-radius:12px;background:linear-gradient(180deg,transparent,rgba(5,11,20,.78));font-size:.72rem;text-transform:uppercase;letter-spacing:.15em;color:#f2d18c}
    @keyframes artGlow{0%,100%{opacity:.36;transform:scale(.96)}50%{opacity:1;transform:scale(1.12)}}
    @keyframes thresholdDrift{from{transform:scale(1.065) translate3d(-.8%,.5%,0)}to{transform:scale(1.12) translate3d(1.1%,-1%,0)}}
    @keyframes integrationPulse{0%,100%{transform:scale(1.05);filter:saturate(1) contrast(1)}50%{transform:scale(1.10);filter:saturate(1.18) contrast(1.07) brightness(1.04)}}
    @keyframes pathBreathe{0%,100%{transform:scale(1.045)}50%{transform:scale(1.10)}}
    @keyframes treeSway{0%,100%{transform:scale(1.055) rotate(-.55deg)}50%{transform:scale(1.09) rotate(.65deg)}}
    @keyframes lotusFloat{0%,100%{transform:scale(1.05) translateY(0)}50%{transform:scale(1.08) translateY(-13px)}}
    @keyframes haloPulse{0%,100%{filter:saturate(1) brightness(1);transform:scale(1.04)}50%{filter:saturate(1.18) brightness(1.08);transform:scale(1.085)}}
    .art-threshold img{animation:thresholdDrift 8.5s ease-in-out infinite alternate}
    .art-integration img{animation:integrationPulse 6s ease-in-out infinite}
    .art-path img{animation:pathBreathe 7.5s ease-in-out infinite}
    .art-tree img{animation:treeSway 7s ease-in-out infinite;transform-origin:50% 92%}
    .art-lotus img{animation:lotusFloat 5.8s ease-in-out infinite}
    .art-akharata img{animation:haloPulse 5.8s ease-in-out infinite}
    .art-akharata .halo{position:absolute;inset:-18%;z-index:1;pointer-events:none;background:conic-gradient(from 0deg,transparent 0 16%,rgba(242,209,140,.32) 28%,transparent 42% 100%);animation:haloSweep 7s linear infinite}
    @keyframes haloSweep{to{transform:rotate(360deg)}}
    @media(max-width:760px){.section-art-grid{grid-template-columns:1fr}.art-frame,.art-frame img{min-height:260px}.hero-art.art-frame,.hero-art.art-frame img{min-height:340px}}
    @media(prefers-reduced-motion:reduce){.art-frame{opacity:1!important;transform:none!important;filter:none!important;transition:none!important}.art-frame:before,.art-frame img,.art-akharata .halo{animation:none!important}}
  `;
  document.head.appendChild(style);

  const makeArt=(key,cls,alt,caption)=>{
    const frame=document.createElement('div');
    frame.className=`art-frame ${cls}`;
    const img=document.createElement('img');
    img.alt=alt;
    img.loading=key==='threshold'?'eager':'lazy';
    img.decoding='async';
    img.src=assets[key];
    img.addEventListener('error',()=>{frame.remove();},{once:true});
    frame.appendChild(img);
    if(key==='akharata'){
      const halo=document.createElement('div');
      halo.className='halo';
      frame.appendChild(halo);
    }
    if(caption){const c=document.createElement('div');c.className='art-caption';c.textContent=caption;frame.appendChild(c)}
    return frame;
  };

  const put=(section,key,cls,alt,caption,mode='replace')=>{
    if(!section)return null;
    const art=makeArt(key,cls,alt,caption);
    const slot=section.querySelector('.art-slot');
    if(slot&&mode==='replace'){slot.replaceWith(art);return art}
    const split=section.querySelector('.split,.ancestral');
    if(split){split.appendChild(art);return art}
    (section.querySelector('.wrap')||section).appendChild(art);
    return art;
  };

  const frames=[];
  const hero=document.querySelector('.hero');
  if(hero){
    const art=makeArt('threshold','art-threshold hero-art','A solitary figure facing a mountain threshold between sun and moon','Hidden Laws · The Threshold');
    const target=hero.querySelector('.hero-art');
    if(target)target.replaceWith(art); else (hero.querySelector('.hero-grid')||hero).appendChild(art);
    frames.push(art);
  }

  const mission=document.querySelector('#mission')||document.querySelector('#about');
  const missionArt=put(mission,'integration','art-integration','Sun and moon joined by a single column of light, symbolizing integration','Mission · Uniting the Worlds');
  if(missionArt)frames.push(missionArt);

  const ascend=document.querySelector('#ascend');
  if(ascend){
    const grid=document.createElement('div');
    grid.className='section-art-grid ascend-art-gallery';
    const path=makeArt('path','art-path','A luminous mountain path under a quiet moon','ASCEND Path');
    const akharata=makeArt('akharata','art-akharata','A radiant geometric tree of light within a crystalline cube, representing the subtle body','Akharata · Subtle-Body Work');
    grid.append(path,akharata);
    (ascend.querySelector('.wrap')||ascend).appendChild(grid);
    frames.push(path,akharata);
  }

  const ancestral=document.querySelector('#ancestral');
  const tree=put(ancestral,'tree','art-tree','A branching purple and orange tree representing lineage','Ancestral Roots');
  if(tree)frames.push(tree);

  const work=document.querySelector('#work')||document.querySelector('#booking');
  const lotus=put(work,'lotus','art-lotus','A lotus floating on water at sunrise','Reiki · Energetic Practice');
  if(lotus)frames.push(lotus);

  if('IntersectionObserver'in window){
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -4% 0px'});
    frames.forEach(f=>io.observe(f));
  }else frames.forEach(f=>f.classList.add('is-visible'));
})();