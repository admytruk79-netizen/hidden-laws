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

      body{perspective:1200px}
      .motion-reveal{opacity:0;transform:translate3d(0,54px,0) scale(.945);filter:blur(13px);transition:opacity 1s cubic-bezier(.16,.84,.28,1),transform 1.15s cubic-bezier(.16,.84,.28,1),filter 1s ease}
      .motion-reveal.is-visible{opacity:1;transform:translate3d(0,0,0) scale(1);filter:blur(0)}
      .motion-reveal[data-delay="1"]{transition-delay:.04s}.motion-reveal[data-delay="2"]{transition-delay:.12s}.motion-reveal[data-delay="3"]{transition-delay:.20s}.motion-reveal[data-delay="4"]{transition-delay:.28s}

      .hero{isolation:isolate}.hero:after{content:"";position:absolute;inset:-20%;z-index:0;pointer-events:none;background:radial-gradient(circle at 72% 32%,rgba(209,178,119,.24),transparent 18%),radial-gradient(circle at 35% 68%,rgba(125,140,120,.16),transparent 25%);animation:heroAura 12s ease-in-out infinite alternate;mix-blend-mode:multiply}
      @keyframes heroAura{from{transform:translate3d(-2%,-1%,0) scale(.97);opacity:.55}to{transform:translate3d(3%,2%,0) scale(1.08);opacity:1}}
      .hero-grid{z-index:1}
      .hero .kicker,.hero h1,.hero .lead,.hero-actions{animation:heroRise 1.15s cubic-bezier(.16,.84,.28,1) both}
      .hero h1{animation-delay:.08s}.hero .lead{animation-delay:.18s}.hero-actions{animation-delay:.30s}
      @keyframes heroRise{0%{opacity:0;transform:translate3d(0,42px,0) scale(.96);filter:blur(12px)}100%{opacity:1;transform:none;filter:none}}
      .hero h1 span{display:block;animation:titleGlow 5.8s ease-in-out 1.1s infinite}
      @keyframes titleGlow{0%,100%{text-shadow:none}50%{text-shadow:0 0 30px rgba(209,178,119,.20)}}

      .orbit{animation:orbitBreathe 5.5s ease-in-out infinite;will-change:transform,box-shadow;box-shadow:0 50px 100px rgba(65,72,64,.10),0 0 0 rgba(209,178,119,0)}
      .orbit:before{animation:ringSpin 20s linear infinite}.orbit:after{animation:ringSpinReverse 13s linear infinite}
      .orbit-core{animation:corePulse 3.4s ease-in-out infinite}
      .orbit-label{animation:labelFloat 4.8s ease-in-out infinite}.ol2{animation-delay:-1.2s}.ol3{animation-delay:-2.4s}.ol4{animation-delay:-3.6s}
      @keyframes orbitBreathe{0%,100%{transform:scale(1) rotate(-.15deg);box-shadow:0 50px 100px rgba(65,72,64,.10),0 0 0 rgba(209,178,119,0)}50%{transform:scale(1.055) rotate(.15deg);box-shadow:0 64px 140px rgba(170,130,72,.20),0 0 70px rgba(209,178,119,.14)}}
      @keyframes ringSpin{to{transform:rotate(360deg)}}
      @keyframes ringSpinReverse{to{transform:rotate(-360deg)}}
      @keyframes corePulse{0%,100%{transform:scale(1);box-shadow:0 18px 60px rgba(31,53,45,.24)}50%{transform:scale(1.045);box-shadow:0 20px 90px rgba(209,178,119,.48),0 0 48px rgba(209,178,119,.26)}}
      @keyframes labelFloat{0%,100%{filter:brightness(1);box-shadow:0 0 0 rgba(170,130,72,0)}50%{filter:brightness(1.12);box-shadow:0 8px 24px rgba(170,130,72,.12)}}

      .trust-row span{transition:transform .3s ease,color .3s ease}.trust-row span:hover{transform:translateY(-3px);color:var(--gold)}
      section{position:relative;transform-style:preserve-3d}
      section:not(.hero):before{content:"";position:absolute;inset:0;pointer-events:none;opacity:0;background:linear-gradient(115deg,transparent 10%,rgba(255,255,255,.20) 46%,transparent 60%);transform:translateX(-35%);transition:opacity .9s ease,transform 1.5s cubic-bezier(.16,.84,.28,1)}
      section.section-awake:before{opacity:.55;transform:translateX(35%)}

      .card,.ancestral-map,.booking-shell,.book{transition:transform .42s cubic-bezier(.16,.84,.28,1),box-shadow .42s ease,border-color .35s ease,filter .4s ease;transform-style:preserve-3d;will-change:transform;backface-visibility:hidden}
      .card:hover,.ancestral-map:hover,.book:hover{transform:translateY(-12px) scale(1.022);box-shadow:0 42px 110px rgba(36,45,39,.22);filter:saturate(1.03)}
      .card:after,.book:after{content:"";position:absolute;inset:-50% -70%;background:linear-gradient(112deg,transparent 35%,rgba(255,255,255,.44) 49%,transparent 62%);transform:translateX(-68%) rotate(9deg);transition:transform 1.05s cubic-bezier(.16,.84,.28,1);pointer-events:none}
      .card:hover:after,.book:hover:after{transform:translateX(76%) rotate(9deg)}
      .book{position:relative;overflow:hidden}
      .card .tag,.card h3,.card p,.card .meta,.card .card-link{position:relative;z-index:2}

      .dark{position:relative;overflow:hidden}.dark:after{content:"";position:absolute;width:58vw;height:58vw;border-radius:50%;right:-22vw;top:-26vw;background:radial-gradient(circle,rgba(209,178,119,.18),transparent 66%);animation:ambientDrift 10s ease-in-out infinite;pointer-events:none}
      .dark:before{content:"";position:absolute;width:42vw;height:42vw;border-radius:50%;left:-17vw;bottom:-22vw;background:radial-gradient(circle,rgba(125,140,120,.14),transparent 68%);animation:ambientDriftTwo 13s ease-in-out infinite;pointer-events:none}
      @keyframes ambientDrift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(-7vw,5vw,0) scale(1.22)}}
      @keyframes ambientDriftTwo{0%,100%{transform:translate3d(0,0,0) scale(.96)}50%{transform:translate3d(6vw,-4vw,0) scale(1.18)}}

      .btn{position:relative;overflow:hidden;transition:transform .28s cubic-bezier(.16,.84,.28,1),box-shadow .28s ease}.btn:before{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 18%,rgba(255,255,255,.34) 50%,transparent 82%);transform:translateX(-125%);transition:transform .62s ease}.btn:hover:before{transform:translateX(125%)}
      .btn:hover{transform:translateY(-5px) scale(1.035);box-shadow:0 16px 38px rgba(36,45,39,.18)}
      .btn:active{transform:translateY(-1px) scale(.985)}

      .path-step{transition:transform .35s ease,background .35s ease,border-radius .35s ease}.path-step:hover{transform:translateX(8px);background:rgba(255,255,255,.28);border-radius:14px}
      .step-no{transition:transform .35s ease,box-shadow .35s ease}.path-step:hover .step-no{transform:scale(1.12) rotate(4deg);box-shadow:0 8px 26px rgba(31,53,45,.20)}

      .art-frame{position:relative;overflow:hidden;isolation:isolate;transform-style:preserve-3d;border-radius:26px}.art-frame img{display:block;width:100%;height:auto;transform:scale(1.05);transition:transform 1.2s cubic-bezier(.16,.84,.28,1),filter 1s ease;will-change:transform}.art-frame:hover img{transform:scale(1.095)}
      .art-frame:before{content:"";position:absolute;inset:-15%;background:radial-gradient(circle at 50% 45%,rgba(209,178,119,.24),transparent 56%);mix-blend-mode:screen;animation:artGlow 4.8s ease-in-out infinite;z-index:2;pointer-events:none}
      .art-frame:after{content:"";position:absolute;inset:0;border:1px solid rgba(209,178,119,.34);border-radius:inherit;box-shadow:inset 0 0 36px rgba(209,178,119,.08);z-index:3;pointer-events:none}
      @keyframes artGlow{0%,100%{opacity:.38;transform:scale(.96)}50%{opacity:1;transform:scale(1.12)}}

      .art-tree img{animation:treeSway 7s ease-in-out infinite;transform-origin:50% 92%}
      @keyframes treeSway{0%,100%{transform:scale(1.055) rotate(-.6deg)}50%{transform:scale(1.085) rotate(.7deg)}}
      .art-threshold img{animation:thresholdDrift 8.5s ease-in-out infinite alternate}
      @keyframes thresholdDrift{from{transform:scale(1.06) translate3d(-.8%,.4%,0)}to{transform:scale(1.11) translate3d(1%,-1%,0)}}
      .art-path img{animation:pathBreathe 7.5s ease-in-out infinite}
      @keyframes pathBreathe{0%,100%{transform:scale(1.045)}50%{transform:scale(1.095)}}
      .art-lotus img{animation:lotusFloat 5.8s ease-in-out infinite}
      @keyframes lotusFloat{0%,100%{transform:scale(1.05) translateY(0)}50%{transform:scale(1.075) translateY(-14px)}}
      .art-akharata:after{content:"";position:absolute;inset:-15%;background:conic-gradient(from 0deg,transparent 0 15%,rgba(209,178,119,.28) 28%,transparent 40% 100%);animation:haloSweep 6.8s linear infinite;z-index:1;pointer-events:none}
      @keyframes haloSweep{to{transform:rotate(360deg)}}
      .art-integration img{animation:integrationPulse 6s ease-in-out infinite}
      @keyframes integrationPulse{0%,100%{transform:scale(1.05);filter:saturate(1) contrast(1)}50%{transform:scale(1.09);filter:saturate(1.14) contrast(1.06) brightness(1.03)}}

      @media(prefers-reduced-motion:reduce){.motion-reveal,.motion-reveal.is-visible{opacity:1!important;transform:none!important;filter:none!important;transition:none!important}.hero:after,.hero .kicker,.hero h1,.hero h1 span,.hero .lead,.hero-actions,.orbit,.orbit:before,.orbit:after,.orbit-core,.orbit-label,.dark:after,.dark:before,.art-frame:before,.art-tree img,.art-threshold img,.art-path img,.art-lotus img,.art-akharata:after,.art-integration img{animation:none!important}.card:hover,.ancestral-map:hover,.book:hover,.btn:hover,.path-step:hover,.path-step:hover .step-no{transform:none!important}}
    `;
    document.head.appendChild(style);
  }

  const revealTargets=[...document.querySelectorAll('section:not(.hero) .eyebrow,section:not(.hero) h2,section:not(.hero) .intro,.statement,.card,.principle,.path-step,.book,.ancestral-map,.booking-shell,.contact-copy,.form')];
  revealTargets.forEach((el,i)=>{el.classList.add('motion-reveal');el.dataset.delay=String((i%4)+1)});
  const sections=[...document.querySelectorAll('main section:not(.hero)')];
  if('IntersectionObserver'in window){
    const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.10,rootMargin:'0px 0px -5% 0px'});
    revealTargets.forEach(el=>observer.observe(el));
    const sectionObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('section-awake')})},{threshold:.18});
    sections.forEach(el=>sectionObserver.observe(el));
  }else{revealTargets.forEach(el=>el.classList.add('is-visible'));sections.forEach(el=>el.classList.add('section-awake'))}

  const finePointer=matchMedia('(pointer:fine)').matches;
  if(finePointer){
    document.querySelectorAll('.card,.ancestral-map,.booking-shell').forEach(el=>{
      el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;const lift=el.classList.contains('booking-shell')?-5:-10;el.style.transform=`translateY(${lift}px) rotateX(${(-y*5.2).toFixed(2)}deg) rotateY(${(x*6.4).toFixed(2)}deg) scale(1.018)`});
      el.addEventListener('pointerleave',()=>{el.style.transform=''});
    });
    document.querySelectorAll('.btn').forEach(btn=>{
      btn.addEventListener('pointermove',e=>{const r=btn.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.08;const y=(e.clientY-r.top-r.height/2)*.10;btn.style.transform=`translate(${x}px,${y-4}px) scale(1.035)`});
      btn.addEventListener('pointerleave',()=>{btn.style.transform=''});
    });
  }

  let ticking=false;
  const heroArt=document.querySelector('.hero-art');
  const orbit=document.querySelector('.orbit');
  function onScroll(){if(ticking)return;ticking=true;requestAnimationFrame(()=>{const y=window.scrollY;if(heroArt&&y<innerHeight*1.4){heroArt.style.transform=`translate3d(0,${Math.min(y*.13,64)}px,0)`;if(orbit)orbit.style.filter=`brightness(${1+Math.min(y/innerHeight*.06,.06)})`}sections.forEach((sec,i)=>{const r=sec.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight){const p=(innerHeight/2-(r.top+r.height/2))/innerHeight;sec.style.setProperty('--section-shift',`${(p*8).toFixed(2)}px`)}});ticking=false})}
  addEventListener('scroll',onScroll,{passive:true});onScroll();
})();
