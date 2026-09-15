(()=>{
  const version='20260915-4';
  const assets={
    threshold:`/art/threshold.webp?v=${version}`,
    integration:`/art/integration.webp?v=${version}`,
    path:`/art/path.webp?v=${version}`,
    akharata:`/art/akharata.webp?v=${version}`,
    tree:`/art/tree.webp?v=${version}`,
    lotus:`/art/lotus.webp?v=${version}`
  };

  const style=document.createElement('style');
  style.id='hidden-laws-art-style';
  style.textContent=`
    .art-frame{position:relative;overflow:hidden;isolation:isolate;border-radius:28px;border:1px solid rgba(242,209,140,.28);background:#0b1728;box-shadow:0 28px 90px rgba(0,0,0,.34);opacity:0;transform:translateY(24px);filter:none!important;transition:opacity .65s ease,transform .75s cubic-bezier(.16,.84,.28,1);text-decoration:none;color:inherit}
    .art-frame.is-visible{opacity:1;transform:translateY(0)}
    .art-media{position:relative;display:grid;place-items:center;overflow:hidden;background:linear-gradient(180deg,#0d1c30,#08111f);aspect-ratio:4/3}
    .art-frame img{display:block;width:100%;height:100%;max-width:100%;object-fit:contain;image-rendering:auto;transform:none!important;filter:none!important;animation:none!important;will-change:auto!important}
    .art-frame:before{content:"";position:absolute;inset:-10%;z-index:2;pointer-events:none;background:radial-gradient(circle at 50% 40%,rgba(242,209,140,.14),transparent 58%);mix-blend-mode:screen;animation:artGlow 5.5s ease-in-out infinite}
    .art-frame:after{content:"";position:absolute;inset:0;z-index:5;pointer-events:none;border:1px solid rgba(242,209,140,.24);border-radius:inherit;box-shadow:inset 0 0 36px rgba(212,174,103,.05)}
    .art-copy{position:relative;z-index:4;padding:18px 20px 20px;border-top:1px solid rgba(255,255,255,.08);background:linear-gradient(180deg,rgba(10,23,40,.98),rgba(7,16,29,.98))}
    .art-copy h3{margin:0 0 7px;font-family:Georgia,serif;font-size:1.22rem;font-weight:400;color:#fff;letter-spacing:-.01em}
    .art-copy p{margin:0;color:#aeb9c6;font-size:.92rem;line-height:1.55}
    .art-action{display:inline-flex;margin-top:13px;color:#f2d18c;font-size:.82rem;font-weight:800;letter-spacing:.04em}
    a.art-frame{cursor:pointer;transition:opacity .65s ease,transform .75s cubic-bezier(.16,.84,.28,1),border-color .25s ease,box-shadow .25s ease}
    a.art-frame:hover{border-color:rgba(242,209,140,.52);box-shadow:0 34px 100px rgba(0,0,0,.42)}
    .hero-art.art-frame{width:100%;display:block}
    .hero-art .art-media{aspect-ratio:4/5;min-height:470px}
    .hero-art .art-copy{display:none}
    .section-art-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:34px}
    .section-art-grid .art-frame{margin:0}
    .art-error{display:none;padding:26px;color:#f2d18c;text-align:center;font-size:.88rem}
    .art-frame.load-failed .art-error{display:block}
    .art-frame.load-failed img{display:none}
    .keys-google-play{display:inline-flex!important;align-items:center;justify-content:center;min-height:44px;padding:10px 15px!important;border:1px solid rgba(242,209,140,.38);border-radius:999px;color:#f2d18c!important;text-decoration:none!important;font-weight:800!important}
    @keyframes artGlow{0%,100%{opacity:.34;transform:scale(.98)}50%{opacity:.72;transform:scale(1.04)}}
    @media(max-width:760px){
      .section-art-grid{grid-template-columns:1fr;gap:18px}
      .art-media{aspect-ratio:1/1}
      .hero-art .art-media{aspect-ratio:4/5;min-height:0}
      .art-copy{padding:17px 18px 19px}
      .art-copy h3{font-size:1.14rem}
      .art-copy p{font-size:.9rem}
    }
    @media(prefers-reduced-motion:reduce){.art-frame{opacity:1!important;transform:none!important;transition:none!important}.art-frame:before{animation:none!important}}
  `;
  document.head.appendChild(style);

  const makeArt=(key,cls,alt,title='',description='',href='',action='')=>{
    const frame=document.createElement(href?'a':'div');
    frame.className=`art-frame ${cls}`;
    if(href){
      frame.href=href;
      frame.target='_blank';
      frame.rel='noopener noreferrer';
      frame.setAttribute('aria-label',`${title || alt} — open`);
    }

    const media=document.createElement('div');
    media.className='art-media';
    const img=document.createElement('img');
    img.alt=alt;
    img.loading=key==='threshold'?'eager':'lazy';
    img.decoding='async';
    img.src=assets[key];
    let retried=false;
    img.addEventListener('error',()=>{
      if(!retried){
        retried=true;
        img.src=`/art/${key}.webp?v=${version}-retry-${Date.now()}`;
        return;
      }
      frame.classList.add('load-failed');
    });
    media.appendChild(img);
    const error=document.createElement('div');
    error.className='art-error';
    error.textContent='Artwork is temporarily unavailable.';
    media.appendChild(error);
    frame.appendChild(media);

    if(title || description || action){
      const copy=document.createElement('div');
      copy.className='art-copy';
      if(title){const h=document.createElement('h3');h.textContent=title;copy.appendChild(h)}
      if(description){const p=document.createElement('p');p.textContent=description;copy.appendChild(p)}
      if(action){const a=document.createElement('span');a.className='art-action';a.textContent=action;copy.appendChild(a)}
      frame.appendChild(copy);
    }
    return frame;
  };

  const put=(section,key,cls,alt,title,description='',href='',action='',mode='replace')=>{
    if(!section)return null;
    const art=makeArt(key,cls,alt,title,description,href,action);
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
  const missionArt=put(
    mission,
    'integration',
    'art-integration',
    'Sun and moon joined by a single column of light, symbolizing integration',
    'Mission · Uniting the Worlds',
    'Inner and outer, visible and subtle, knowledge and lived experience brought back into one practice.'
  );
  if(missionArt)frames.push(missionArt);

  const ascend=document.querySelector('#ascend');
  if(ascend){
    const oldGallery=ascend.querySelector('.ascend-art-gallery');
    if(oldGallery)oldGallery.remove();
    const grid=document.createElement('div');
    grid.className='section-art-grid ascend-art-gallery';
    const path=makeArt(
      'path',
      'art-path',
      'A luminous mountain path under a quiet moon',
      'ASCEND Path',
      'The structured 24-month developmental training pathway with daily practice, progression and integration.',
      'https://admytruk79-netizen.github.io/ascend-nerve/',
      'Open ASCEND Path →'
    );
    const akharata=makeArt(
      'akharata',
      'art-akharata',
      'A radiant geometric tree of light within a crystalline cube, representing the subtle body',
      'Akharata · Subtle-Body Work',
      'An advanced supporting layer within ASCEND for subtle-body development and deeper energetic practice.'
    );
    grid.append(path,akharata);
    (ascend.querySelector('.wrap')||ascend).appendChild(grid);
    frames.push(path,akharata);

    const cards=[...ascend.querySelectorAll('.card')];
    const keysCard=cards.find(card=>card.querySelector('.tag')?.textContent.trim()==='ASCEND Keys');
    if(keysCard){
      let link=keysCard.querySelector('.card-link');
      if(!link){
        link=document.createElement('a');
        link.className='card-link';
        keysCard.appendChild(link);
      }
      link.href='https://play.google.com/store/apps/details?id=com.ascend.keys26';
      link.target='_blank';
      link.rel='noopener noreferrer';
      link.textContent='Install on Google Play →';
      link.classList.add('keys-google-play');
    }
  }

  const ancestral=document.querySelector('#ancestral');
  const tree=put(
    ancestral,
    'tree',
    'art-tree',
    'A branching purple and orange tree representing lineage',
    'Ancestral Roots',
    'Guided lineage work focused on reconnection, reflection and integration across maternal and paternal lines.'
  );
  if(tree)frames.push(tree);

  const work=document.querySelector('#work')||document.querySelector('#booking');
  const lotus=put(
    work,
    'lotus',
    'art-lotus',
    'A lotus floating on water at sunrise',
    'Reiki · Energetic Practice',
    'Grounded energetic work with attention to integration, clarity and practical application.'
  );
  if(lotus)frames.push(lotus);

  if('IntersectionObserver'in window){
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.10,rootMargin:'0px 0px -3% 0px'});
    frames.forEach(f=>io.observe(f));
  }else frames.forEach(f=>f.classList.add('is-visible'));
})();