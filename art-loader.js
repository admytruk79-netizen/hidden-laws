(()=>{
  const version='20260917-2';
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
    .art-frame{position:relative;overflow:hidden;isolation:isolate;border-radius:28px;border:1px solid rgba(242,209,140,.28);background:#0b1728;box-shadow:0 28px 90px rgba(0,0,0,.34);opacity:0;transform:translateY(24px);filter:none!important;transition:opacity .65s ease,transform .75s cubic-bezier(.16,.84,.28,1),box-shadow .3s ease;text-decoration:none;color:inherit}
    .art-frame.is-visible{opacity:1;transform:translateY(0)}
    .art-media{position:relative;display:grid;place-items:center;overflow:hidden;background:linear-gradient(180deg,#0d1c30,#08111f);aspect-ratio:4/3}
    .art-frame img{display:block;width:100%;height:100%;max-width:100%;object-fit:contain;image-rendering:auto;transform:none!important;filter:none!important;animation:none!important;will-change:auto!important;position:relative;z-index:1}
    .art-frame:before{content:"";position:absolute;inset:-10%;z-index:2;pointer-events:none;background:radial-gradient(circle at 50% 40%,rgba(242,209,140,.14),transparent 58%);mix-blend-mode:screen;animation:artGlow 5.5s ease-in-out infinite}
    .art-frame:after{content:"";position:absolute;inset:0;z-index:5;pointer-events:none;border:1px solid rgba(242,209,140,.24);border-radius:inherit;box-shadow:inset 0 0 36px rgba(212,174,103,.05)}
    .art-media:before,.art-media:after{content:"";position:absolute;pointer-events:none;z-index:3;opacity:0}
    .art-copy{position:relative;z-index:6;padding:18px 20px 20px;border-top:1px solid rgba(255,255,255,.08);background:linear-gradient(180deg,rgba(10,23,40,.98),rgba(7,16,29,.98))}
    .art-copy h3{margin:0 0 7px;font-family:Georgia,serif;font-size:1.22rem;font-weight:400;color:#fff;letter-spacing:-.01em}
    .art-copy p{margin:0;color:#aeb9c6;font-size:.92rem;line-height:1.55}
    .art-action{display:inline-flex;margin-top:13px;color:#f2d18c;font-size:.82rem;font-weight:800;letter-spacing:.04em}
    a.art-frame{cursor:pointer}
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

    /* Motion is layered over the art so the source image stays sharp. */
    .art-threshold .art-media:before{inset:0;background:radial-gradient(circle at 25% 32%,rgba(255,154,68,.26),transparent 18%),radial-gradient(circle at 72% 18%,rgba(133,184,255,.24),transparent 16%);opacity:.55;animation:thresholdLight 6.8s ease-in-out infinite alternate}
    .art-threshold .art-media:after{left:-18%;right:-18%;bottom:-4%;height:34%;background:linear-gradient(180deg,transparent,rgba(129,176,255,.16),rgba(242,209,140,.10));filter:blur(10px);opacity:.45;animation:waterShimmer 5.4s ease-in-out infinite}

    .art-integration .art-media:before{inset:-15%;background:conic-gradient(from 0deg,transparent 0 22%,rgba(242,209,140,.20) 31%,transparent 40% 64%,rgba(101,153,255,.18) 73%,transparent 82%);opacity:.42;animation:slowTurn 12s linear infinite}
    .art-integration .art-media:after{left:47%;top:8%;bottom:8%;width:6%;background:linear-gradient(180deg,transparent,rgba(255,232,170,.34),rgba(255,255,255,.12),transparent);filter:blur(8px);opacity:.5;animation:columnPulse 4.8s ease-in-out infinite}

    .art-path .art-media:before{inset:0;background:radial-gradient(circle at 56% 24%,rgba(155,177,255,.28),transparent 20%),linear-gradient(180deg,rgba(205,187,255,.10),transparent 45%);opacity:.52;animation:moonAura 6.4s ease-in-out infinite}
    .art-path .art-media:after{left:-20%;right:-20%;bottom:6%;height:26%;background:linear-gradient(180deg,transparent,rgba(198,216,255,.13));filter:blur(13px);opacity:.38;animation:hazeDrift 7.5s ease-in-out infinite alternate}

    .art-akharata .art-media:before{inset:-18%;background:conic-gradient(from 0deg,transparent 0 16%,rgba(242,209,140,.30) 28%,transparent 42% 64%,rgba(157,115,255,.24) 76%,transparent 90%);opacity:.55;animation:slowTurn 8s linear infinite}
    .art-akharata .art-media:after{inset:18%;border-radius:50%;border:1px solid rgba(242,209,140,.34);box-shadow:0 0 34px rgba(242,209,140,.20),inset 0 0 30px rgba(125,92,255,.14);opacity:.62;animation:haloBreathe 4.6s ease-in-out infinite}

    .art-tree .art-media:before{inset:-10%;background:radial-gradient(circle at 42% 50%,rgba(153,88,255,.18),transparent 30%),radial-gradient(circle at 61% 48%,rgba(255,143,66,.18),transparent 26%);opacity:.48;animation:treeAura 6.2s ease-in-out infinite alternate}
    .art-tree .art-media:after{left:12%;right:12%;top:10%;bottom:10%;background:radial-gradient(circle,rgba(255,222,151,.55) 0 1px,transparent 2px) 0 0/38px 38px;opacity:.18;animation:leafSparkle 7s linear infinite}

    .art-lotus .art-media:before{left:-18%;right:-18%;bottom:-8%;height:45%;background:repeating-radial-gradient(ellipse at 50% 100%,rgba(166,202,255,.18) 0 2px,transparent 3px 18px);opacity:.38;animation:ripple 5.5s ease-in-out infinite}
    .art-lotus .art-media:after{width:34%;aspect-ratio:1;border-radius:50%;right:8%;top:16%;background:radial-gradient(circle,rgba(255,219,147,.30),rgba(255,193,92,.12) 45%,transparent 70%);opacity:.55;animation:sunPulse 5s ease-in-out infinite}

    @keyframes artGlow{0%,100%{opacity:.28;transform:scale(.98)}50%{opacity:.58;transform:scale(1.03)}}
    @keyframes thresholdLight{0%{transform:translate3d(-1%,1%,0) scale(.98);opacity:.42}100%{transform:translate3d(1.5%,-1%,0) scale(1.04);opacity:.68}}
    @keyframes waterShimmer{0%,100%{transform:translateX(-2%);opacity:.28}50%{transform:translateX(2%);opacity:.55}}
    @keyframes slowTurn{to{transform:rotate(360deg)}}
    @keyframes columnPulse{0%,100%{opacity:.26;transform:scaleY(.94)}50%{opacity:.68;transform:scaleY(1.05)}}
    @keyframes moonAura{0%,100%{opacity:.34;transform:scale(.98)}50%{opacity:.65;transform:scale(1.05)}}
    @keyframes hazeDrift{0%{transform:translateX(-3%)}100%{transform:translateX(3%)}}
    @keyframes haloBreathe{0%,100%{transform:scale(.96);opacity:.38}50%{transform:scale(1.05);opacity:.72}}
    @keyframes treeAura{0%{transform:translateX(-1.5%) scale(.98)}100%{transform:translateX(1.5%) scale(1.04)}}
    @keyframes leafSparkle{to{background-position:38px -38px}}
    @keyframes ripple{0%,100%{transform:scaleX(.96);opacity:.26}50%{transform:scaleX(1.04);opacity:.5}}
    @keyframes sunPulse{0%,100%{transform:scale(.94);opacity:.4}50%{transform:scale(1.08);opacity:.68}}

    @media(max-width:760px){
      .section-art-grid{grid-template-columns:1fr;gap:18px}
      .art-media{aspect-ratio:1/1}
      .hero-art .art-media{aspect-ratio:4/5;min-height:0}
      .art-copy{padding:17px 18px 19px}
      .art-copy h3{font-size:1.14rem}
      .art-copy p{font-size:.9rem}
    }
    @media(prefers-reduced-motion:reduce){
      .art-frame{opacity:1!important;transform:none!important;transition:none!important}
      .art-frame:before,.art-media:before,.art-media:after{animation:none!important}
    }
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

  // Remove a title that is not part of the actual body of work.
  document.querySelectorAll('.book').forEach(book=>{
    const title=book.querySelector('strong')?.textContent.trim();
    if(title==="The Architect’s Ascension"||title==="The Architect's Ascension")book.remove();
  });

  if('IntersectionObserver'in window){
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.10,rootMargin:'0px 0px -3% 0px'});
    frames.forEach(f=>io.observe(f));
  }else frames.forEach(f=>f.classList.add('is-visible'));
})();