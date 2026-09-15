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
    .bio-lineage-note{margin-top:18px;color:#9aa8b8;font-size:.88rem;line-height:1.65;font-style:italic}
    @media(max-width:820px){.bio-lineage-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  const block=document.createElement('div');
  block.className='bio-lineage';
  block.innerHTML=`
    <div class="eyebrow">Teachers & Lineage</div>
    <h3>Practice shaped through living traditions.</h3>
    <p class="bio-lineage-intro">My development has been shaped not only by books and formal study, but through direct contact with teachers and lineages in which knowledge was carried person to person — sometimes openly, sometimes quietly, and sometimes through traditions that preferred not to explain everything at once.</p>
    <div class="bio-lineage-grid">
      <article class="bio-lineage-card">
        <div class="label">Teacher</div>
        <strong>Siberian shamanic tradition</strong>
        <p>One of my formative teachers was a Siberian shaman. That training deepened my relationship with ancestral work, symbolic practice, altered states of awareness and the older idea that the visible world is only one layer of experience.</p>
      </article>
      <article class="bio-lineage-card">
        <div class="label">Teacher</div>
        <strong>Yogic and Qigong training</strong>
        <p>Another teacher was a yogi who lived and studied in a secluded monastery in northern Tibet. His training came through years of disciplined contemplative and energetic practice, carried far from ordinary public life.</p>
      </article>
      <article class="bio-lineage-card">
        <div class="label">Family Lineage</div>
        <strong>Cossack kharakternyk lineage</strong>
        <p>My documented family lineage traces back to the Cossack kharakternyky — figures remembered not simply as warriors, but as keepers of unusual knowledge: people said to understand the hidden forces of nature, the mind, the body, protection, signs, herbs, words of power and what later generations would call spells.</p>
      </article>
    </div>
    <p class="bio-lineage-note">Tradition wrapped the kharakternyky in stories of supernatural power. Beneath the legend, I see something just as compelling: generations of observation, discipline, survival knowledge and a deep reading of the world around them — knowledge so far beyond the ordinary that it could easily become myth.</p>
  `;

  const wrap=about.querySelector('.wrap');
  if(wrap) wrap.appendChild(block);
})();
