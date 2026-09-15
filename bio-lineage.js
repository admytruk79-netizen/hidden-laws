(()=>{
  const about=document.querySelector('#about');
  if(!about||document.querySelector('.bio-lineage')) return;

  const style=document.createElement('style');
  style.textContent=`
    .bio-lineage{margin-top:34px;padding-top:28px;border-top:1px solid rgba(255,255,255,.10)}
    .bio-lineage h3{margin:0 0 12px;font-family:Georgia,serif;font-size:clamp(1.65rem,3vw,2.35rem);font-weight:400;color:#fff}
    .bio-lineage-intro{max-width:820px;margin:0 0 22px;color:#b7c0cc}
    .bio-lineage-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
    .bio-lineage-card{padding:20px;border:1px solid rgba(255,255,255,.10);border-radius:20px;background:linear-gradient(180deg,rgba(255,255,255,.045),rgba(255,255,255,.02))}
    .bio-lineage-card .label{font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;font-weight:800;color:#f2d18c;margin-bottom:8px}
    .bio-lineage-card strong{display:block;font-family:Georgia,serif;font-size:1.22rem;font-weight:400;color:#fff;margin-bottom:8px}
    .bio-lineage-card p{margin:0;color:#b7c0cc;font-size:.94rem;line-height:1.6}
    .bio-lineage-note{margin-top:18px;color:#8f9cac;font-size:.82rem;line-height:1.55}
    @media(max-width:820px){.bio-lineage-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  const block=document.createElement('div');
  block.className='bio-lineage';
  block.innerHTML=`
    <div class="eyebrow">Teachers & Lineage</div>
    <h3>Practice shaped through living traditions.</h3>
    <p class="bio-lineage-intro">My development has been shaped not only by books and formal study, but by direct contact with teachers from distinct contemplative and energetic traditions.</p>
    <div class="bio-lineage-grid">
      <article class="bio-lineage-card">
        <div class="label">Teacher</div>
        <strong>Siberian shamanic tradition</strong>
        <p>One of my formative teachers was a Siberian shaman, whose influence deepened my approach to ancestral work, symbolic practice and the relationship between lived experience and tradition.</p>
      </article>
      <article class="bio-lineage-card">
        <div class="label">Teacher</div>
        <strong>Yogic and Qigong training</strong>
        <p>Another teacher was a yogi who lived and studied in a secluded monastery in northern Tibet, where his training included disciplined contemplative and energetic practice.</p>
      </article>
      <article class="bio-lineage-card">
        <div class="label">Family Lineage</div>
        <strong>Cossack kharakternyk lineage</strong>
        <p>My documented family lineage traces back to the Cossack kharakternyk tradition, a current remembered in Ukrainian historical folklore for exceptional discipline, martial knowledge and esoteric reputation.</p>
      </article>
    </div>
    <p class="bio-lineage-note">The kharakternyk is best understood historically as a folkloric and post-folkloric image associated with Zaporizhian Cossacks; later tradition attributes extraordinary and esoteric qualities to these figures. Here, the reference is to family lineage and cultural inheritance rather than a claim that folklore itself is literal historical fact.</p>
  `;

  const wrap=about.querySelector('.wrap');
  if(wrap) wrap.appendChild(block);
})();
