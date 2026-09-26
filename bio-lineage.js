(()=>{
  const about=document.querySelector('#about');
  if(!about||document.querySelector('.bio-lineage')) return;

  const version='20260918-2-cachefix';
  const siberian=`/art/lineage-siberian.webp?v=${version}`;
  const tibetan=`/art/lineage-tibetan.webp?v=${version}`;
  const cossack=`/art/lineage-cossack.webp?v=${version}`;

  const style=document.createElement('style');
  style.textContent=`
    .bio-lineage{margin-top:34px;padding-top:28px;border-top:1px solid rgba(255,255,255,.10);min-width:0;max-width:100%}
    .bio-lineage h3{margin:0 0 12px;font-family:Georgia,serif;font-size:clamp(1.65rem,3vw,2.35rem);font-weight:400;color:#fff}
    .bio-lineage-intro{max-width:820px;margin:0 0 22px;color:#b7c0cc}
    .bio-lineage-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;min-width:0;max-width:100%}
    .bio-lineage-card{position:relative;padding:0 0 20px;border:1px solid rgba(255,255,255,.10);border-radius:20px;background:linear-gradient(180deg,rgba(255,255,255,.045),rgba(255,255,255,.02));overflow:hidden;isolation:isolate;min-width:0;max-width:100%;opacity:0;transform:translateY(20px);transition:opacity .65s ease,transform .75s cubic-bezier(.16,.84,.28,1),border-color .3s ease,box-shadow .3s ease}
    .bio-lineage-card.is-visible{opacity:1;transform:translateY(0)}
    .bio-lineage-card:hover{border-color:rgba(242,209,140,.4);box-shadow:0 24px 60px rgba(0,0,0,.35)}
    .bio-lineage-media{position:relative;overflow:hidden;isolation:isolate}
    .bio-lineage-image{width:100%;aspect-ratio:4/5;object-fit:cover;display:block;border-bottom:1px solid rgba(255,255,255,.10);transition:transform .6s cubic-bezier(.16,.84,.28,1)}
    .bio-lineage-card:hover .bio-lineage-image{transform:scale(1.045)}
    .bio-lineage-media:before,.bio-lineage-media:after{content:"";position:absolute;pointer-events:none;z-index:2}
    .bio-lineage-media:after{inset:0;background:linear-gradient(180deg,transparent 55%,rgba(5,11,20,.55));border-bottom:1px solid rgba(255,255,255,.10)}
    .bio-siberian .bio-lineage-media:before{inset:-20%;background:radial-gradient(circle at 68% 18%,rgba(122,224,190,.30),transparent 30%),radial-gradient(circle at 30% 10%,rgba(120,170,255,.22),transparent 26%);opacity:.55;mix-blend-mode:screen;animation:lineageAurora 7.5s ease-in-out infinite}
    .bio-tibetan .bio-lineage-media:before{inset:-20%;background:radial-gradient(circle at 62% 22%,rgba(255,201,120,.34),transparent 28%),radial-gradient(circle at 20% 60%,rgba(255,255,255,.10),transparent 30%);opacity:.5;mix-blend-mode:screen;animation:lineageDawn 6.5s ease-in-out infinite}
    .bio-cossack .bio-lineage-media:before{inset:-20%;background:radial-gradient(circle at 74% 28%,rgba(255,150,64,.34),transparent 28%),radial-gradient(circle at 25% 82%,rgba(255,94,52,.20),transparent 30%);opacity:.55;mix-blend-mode:screen;animation:lineageEmber 5.8s ease-in-out infinite}
    @keyframes lineageAurora{0%,100%{opacity:.32;transform:translate3d(-1%,0,0) scale(1)}50%{opacity:.62;transform:translate3d(1.5%,-1%,0) scale(1.05)}}
    @keyframes lineageDawn{0%,100%{opacity:.30;transform:scale(.98)}50%{opacity:.6;transform:scale(1.06)}}
    @keyframes lineageEmber{0%,100%{opacity:.34;transform:scale(1)}50%{opacity:.64;transform:scale(1.07)}}
    .bio-lineage-card-body{position:relative;z-index:3;padding:20px 20px 0;min-width:0}
    .bio-lineage-card .label{font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;font-weight:800;color:#f2d18c;margin-bottom:8px}
    .bio-lineage-card strong{display:block;font-family:Georgia,serif;font-size:1.22rem;font-weight:400;color:#fff;margin-bottom:8px}
    .bio-lineage-card p{margin:0;color:#b7c0cc;font-size:.94rem;line-height:1.6;overflow-wrap:anywhere}
    .bio-lineage-note{margin-top:18px;color:#9aa8b8;font-size:.88rem;line-height:1.65;font-style:italic;max-width:100%;overflow-wrap:anywhere}
    @media(max-width:820px){.bio-lineage-grid{display:flex;grid-template-columns:none;overflow-x:auto;scroll-snap-type:x mandatory;gap:14px;margin:0 -15px;padding:0 15px 6px;-webkit-overflow-scrolling:touch;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 24px,#000 calc(100% - 40px),transparent 100%);mask-image:linear-gradient(to right,transparent 0,#000 24px,#000 calc(100% - 40px),transparent 100%)}.bio-lineage-grid::-webkit-scrollbar{display:none}.bio-lineage-grid>.bio-lineage-card{flex:0 0 82%;scroll-snap-align:start}.bio-lineage-image{aspect-ratio:16/10;object-position:center 42%}}
    @media(prefers-reduced-motion:reduce){
      .bio-lineage-card{opacity:1!important;transform:none!important;transition:none!important}
      .bio-lineage-image{transition:none!important}
      .bio-lineage-card:hover .bio-lineage-image{transform:none!important}
      .bio-lineage-media:before{animation:none!important}
    }
  `;
  document.head.appendChild(style);

  const block=document.createElement('div');
  block.className='bio-lineage';
  block.innerHTML=`
    <div class="eyebrow">Teachers & Lineage</div>
    <h3>Practice shaped through living traditions.</h3>
    <p class="bio-lineage-intro">My development has been shaped not only by books and formal study, but through direct contact with teachers and lineages in which knowledge was carried person to person — sometimes openly, sometimes quietly, and sometimes through traditions that preferred not to explain everything at once.</p>
    <div class="bio-lineage-grid">
      <article class="bio-lineage-card bio-siberian">
        <div class="bio-lineage-media"><img class="bio-lineage-image" src="${siberian}" alt="Siberian shamanic tradition in a winter landscape" loading="lazy" decoding="async"></div>
        <div class="bio-lineage-card-body"><div class="label">Teacher</div><strong>Siberian shamanic tradition</strong><p>One of my formative teachers was a Siberian shaman. That training deepened my relationship with ancestral work, symbolic practice, altered states of awareness and the older idea that the visible world is only one layer of experience.</p></div>
      </article>
      <article class="bio-lineage-card bio-tibetan">
        <div class="bio-lineage-media"><img class="bio-lineage-image" src="${tibetan}" alt="Tibetan yogic practice in a secluded mountain monastery" loading="lazy" decoding="async"></div>
        <div class="bio-lineage-card-body"><div class="label">Teacher</div><strong>Yogic and Qigong training</strong><p>Another teacher was a yogi who lived and studied in a secluded monastery in northern Tibet. His training came through years of disciplined contemplative and energetic practice, carried far from ordinary public life.</p></div>
      </article>
      <article class="bio-lineage-card bio-cossack">
        <div class="bio-lineage-media"><img class="bio-lineage-image" src="${cossack}" alt="Cossack kharakternyk lineage at sunset" loading="lazy" decoding="async"></div>
        <div class="bio-lineage-card-body"><div class="label">Family Lineage</div><strong>Cossack kharakternyk lineage</strong><p>My documented family lineage traces back to the Cossack kharakternyky — figures remembered not simply as warriors, but as keepers of unusual knowledge: people said to understand the hidden forces of nature, the mind, the body, protection, signs, herbs, words of power and what later generations would call spells.</p></div>
      </article>
    </div>
    <p class="bio-lineage-note">Tradition wrapped the kharakternyky in stories of supernatural power. Beneath the legend, I see something just as compelling: generations of observation, discipline, survival knowledge and a deep reading of the world around them — knowledge so far beyond the ordinary that it could easily become myth.</p>
  `;

  const wrap=about.querySelector('.wrap');
  if(wrap) wrap.appendChild(block);

  const cards=[...block.querySelectorAll('.bio-lineage-card')];
  if('IntersectionObserver'in window){
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -4% 0px'});
    cards.forEach(c=>io.observe(c));
  }else cards.forEach(c=>c.classList.add('is-visible'));
})();
