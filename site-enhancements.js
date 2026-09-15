(()=>{
  const section=document.querySelector('#ascend');
  if(section){
    const heading=section.querySelector('.section-head h2');
    const intro=section.querySelector('.section-head .intro');
    if(heading)heading.textContent='A growing body of structured work.';
    if(intro)intro.textContent='ASCEND separates reflection, long-form training, advanced developmental work and symbolic story so each remains clear in purpose and stage of development.';

    const grid=section.querySelector('.grid3');
    if(grid){
      grid.classList.add('ascend-grid');
      const cards=[...grid.querySelectorAll('.card')];
      const journey=cards.find(card=>card.querySelector('.tag')?.textContent.trim()==='ASCEND Journey');
      if(journey){
        const title=journey.querySelector('h3');
        const body=journey.querySelector('p');
        const meta=journey.querySelector('.meta');
        if(title)title.textContent='A forthcoming symbolic journey.';
        if(body)body.textContent='In development: a self-paced story experience through 108 Keys, 24 Chambers and Seven Gates. It is not yet released as a public app or product.';
        if(meta)meta.innerHTML='<span class="pill status-pill">In development</span><span class="pill">108 Keys</span><span class="pill">24 Chambers</span><span class="pill">Seven Gates</span>';
      }
      if(!cards.some(card=>card.querySelector('.tag')?.textContent.trim()==='Akharata')){
        const card=document.createElement('article');
        card.className='card';
        card.innerHTML='<div class="tag">Akharata</div><h3>Advanced developmental work.</h3><p>An advanced supporting layer within the broader ASCEND training architecture. It deepens developmental practice without replacing or bypassing Core Formation progression.</p><div class="meta"><span class="pill">Advanced</span><span class="pill">Supporting layer</span><span class="pill">ASCEND training</span></div>';
        grid.appendChild(card);
      }
    }
  }

  if(!document.getElementById('site-motion-style')){
    const style=document.createElement('style');
    style.id='site-motion-style';
    style.textContent=`
      .status-pill{background:#1f352d!important;color:#fff!important;border-color:#1f352d!important}
      .ascend-grid{grid-template-columns:repeat(4,minmax(0,1fr))}
      @media(max-width:1100px){.ascend-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:760px){.ascend-grid{grid-template-columns:1fr}}

      .motion-reveal{opacity:0;transform:translate3d(0,36px,0) scale(.972);filter:blur(8px);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform 1s cubic-bezier(.2,.7,.2,1),filter .9s ease}
      .motion-reveal.is-visible{opacity:1;transform:translate3d(0,0,0) scale(1);filter:blur(0)}
      .motion-reveal[data-delay="1"]{transition-delay:.08s}.motion-reveal[data-delay="2"]{transition-delay:.16s}.motion-reveal[data-delay="3"]{transition-delay:.24s}.motion-reveal[data-delay="4"]{transition-delay:.32s}

      .hero .kicker,.hero h1,.hero .lead,.hero-actions{animation:heroRise 1s cubic-bezier(.2,.7,.2,1) both}
      .hero h1{animation-delay:.08s}.hero .lead{animation-delay:.16s}.hero-actions{animation-delay:.24s}
      @keyframes heroRise{from{opacity:0;transform:translateY(28px);filter:blur(7px)}to{opacity:1;transform:none;filter:none}}

      .orbit{animation:orbitBreathe 7s ease-in-out infinite;will-change:transform,box-shadow}
      .orbit:before{animation:ringSpin 28s linear infinite}.orbit:after{animation:ringSpinReverse 18s linear infinite}
      .orbit-core{animation:corePulse 4.6s ease-in-out infinite}
      @keyframes orbitBreathe{0%,100%{transform:scale(1);box-shadow:0 50px 100px rgba(65,72,64,.10)}50%{transform:scale(1.035);box-shadow:0 58px 120px rgba(170,130,72,.20)}}
      @keyframes ringSpin{to{transform:rotate(360deg)}}
      @keyframes ringSpinReverse{to{transform:rotate(-360deg)}}
      @keyframes corePulse{0%,100%{box-shadow:0 18px 60px rgba(31,53,45,.24)}50%{box-shadow:0 20px 74px rgba(209,178,119,.38),0 0 34px rgba(209,178,119,.18)}}

      .card,.ancestral-map,.booking-shell,.book{transition:transform .45s cubic-bezier(.2,.7,.2,1),box-shadow .45s ease,border-color .35s ease;transform-style:preserve-3d;will-change:transform}
      .card:hover,.ancestral-map:hover,.book:hover{transform:translateY(-8px) scale(1.012);box-shadow:0 34px 90px rgba(36,45,39,.17)}
      .card:after,.book:after{content:"";position:absolute;inset:-40% -55%;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.34) 49%,transparent 63%);transform:translateX(-65%) rotate(8deg);transition:transform .9s ease;pointer-events:none}
      .card:hover:after,.book:hover:after{transform:translateX(70%) rotate(8deg)}
      .book{position:relative;overflow:hidden}

      .dark{position:relative;overflow:hidden}.dark:after{content:"";position:absolute;width:48vw;height:48vw;border-radius:50%;right:-18vw;top:-22vw;background:radial-gradient(circle,rgba(209,178,119,.12),transparent 68%);animation:ambientDrift 14s ease-in-out infinite;pointer-events:none}
      @keyframes ambientDrift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-5vw,4vw,0) scale(1.16)}}

      .btn{position:relative;overflow:hidden}.btn:before{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 20%,rgba(255,255,255,.28) 50%,transparent 80%);transform:translateX(-120%);transition:transform .65s ease}.btn:hover:before{transform:translateX(120%)}
      .btn:hover{transform:translateY(-4px) scale(1.02)}

      .art-frame{position:relative;overflow:hidden;isolation:isolate;transform-style:preserve-3d}
      .art-frame img{display:block;width:100%;height:auto;transform:scale(1.035);transition:transform 1.2s cubic-bezier(.2,.7,.2,1),filter 1s ease;will-change:transform}
      .art-frame:hover img{transform:scale(1.075)}
      .art-frame:before{content:"";position:absolute;inset:-12%;background:radial-gradient(circle at 50% 45%,rgba(209,178,119,.18),transparent 58%);mix-blend-mode:screen;animation:artGlow 6s ease-in-out infinite;z-index:2;pointer-events:none}
      @keyframes artGlow{0%,100%{opacity:.45;transform:scale(.98)}50%{opacity:.9;transform:scale(1.08)}}

      .art-tree img{animation:treeSway 9s ease-in-out infinite;transform-origin:50% 92%}
      @keyframes treeSway{0%,100%{transform:scale(1.04) rotate(-.35deg)}50%{transform:scale(1.06) rotate(.45deg)}}
      .art-threshold img{animation:thresholdDrift 11s ease-in-out infinite alternate}
      @keyframes thresholdDrift{from{transform:scale(1.05) translate3d(-.4%,0,0)}to{transform:scale(1.085) translate3d(.7%,-.5%,0)}}
      .art-path img{animation:pathBreathe 10s ease-in-out infinite}
      @keyframes pathBreathe{0%,100%{transform:scale(1.035)}50%{transform:scale(1.075)}}
      .art-lotus img{animation:lotusFloat 7s ease-in-out infinite}
      @keyframes lotusFloat{0%,100%{transform:scale(1.04) translateY(0)}50%{transform:scale(1.055) translateY(-9px)}}
      .art-akharata:after{content:"";position:absolute;inset:0;background:conic-gradient(from 0deg,transparent,rgba(209,178,119,.16),transparent 30%);animation:haloSweep 9s linear infinite;z-index:1;pointer-events:none}
      @keyframes haloSweep{to{transform:rotate(360deg)}}
      .art-integration img{animation:integrationPulse 8s ease-in-out infinite}
      @keyframes integrationPulse{0%,100%{transform:scale(1.04);filter:saturate(1) contrast(1)}50%{transform:scale(1.065);filter:saturate(1.08) contrast(1.04)}}

      @media(prefers-reduced-motion:reduce){.motion-reveal,.motion-reveal.is-visible{opacity:1!important;transform:none!important;filter:none!important;transition:none!important}.hero .kicker,.hero h1,.hero .lead,.hero-actions,.orbit,.orbit:before,.orbit:after,.orbit-core,.dark:after,.art-frame:before,.art-tree img,.art-threshold img,.art-path img,.art-lotus img,.art-akharata:after,.art-integration img{animation:none!important}.card:hover,.ancestral-map:hover,.book:hover,.btn:hover{transform:none!important}}
    `;
    document.head.appendChild(style);
  }

  const revealTargets=[...document.querySelectorAll('section:not(.hero) .eyebrow,section:not(.hero) h2,section:not(.hero) .intro,.statement,.card,.principle,.path-step,.book,.ancestral-map,.booking-shell')];
  revealTargets.forEach((el,i)=>{el.classList.add('motion-reveal');el.dataset.delay=String((i%4)+1)});
  if('IntersectionObserver'in window){
    const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    revealTargets.forEach(el=>observer.observe(el));
  }else revealTargets.forEach(el=>el.classList.add('is-visible'));

  const finePointer=matchMedia('(pointer:fine)').matches;
  if(finePointer){
    document.querySelectorAll('.card,.ancestral-map').forEach(el=>{
      el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;el.style.transform=`translateY(-8px) rotateX(${(-y*3.5).toFixed(2)}deg) rotateY(${(x*4.5).toFixed(2)}deg) scale(1.012)`});
      el.addEventListener('pointerleave',()=>{el.style.transform=''});
    });
  }

  let ticking=false;
  const heroArt=document.querySelector('.hero-art');
  function onScroll(){if(ticking)return;ticking=true;requestAnimationFrame(()=>{const y=window.scrollY;if(heroArt&&y<innerHeight*1.2)heroArt.style.transform=`translate3d(0,${Math.min(y*.09,42)}px,0)`;ticking=false})}
  addEventListener('scroll',onScroll,{passive:true});
})();
