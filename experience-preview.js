(()=>{
  /* Vision presentation styles now live in unified-theme.css for predictable cascade. */
  const work=document.getElementById('work');
  if(work){
    const section=document.createElement('section');section.className='hl-vision';section.id='vision';section.innerHTML=`
      <div class="wrap">
        <div class="hl-eyebrow">THE NEXT CHAPTER · HIDDEN LAWS</div>
        <h2>From individual practice to a place of discovery.</h2>
        <p class="hl-summary">Hidden Laws begins with personal experience — contemplative practice, energy work, ancestral exploration and the study of deeper patterns in everyday life. Today the work is offered through mobile and remote sessions. The next chapter is a dedicated place for practice, study and meaningful connection.</p>
        <div class="hl-now"><strong>AVAILABLE NOW</strong><span>Mobile sessions</span><span>Remote sessions</span><span>One-to-one guidance</span><span>ASCEND Keys app</span></div>
        <div class="hl-vision-grid">
          <div class="hl-vimage"><img src="https://images.unsplash.com/photo-1761971975962-9cc397e2ba2a?auto=format&amp;fit=crop&amp;w=1400&amp;q=85" onerror="this.onerror=null;this.src='/art/integration.webp'" alt="Concept photograph of a modern practice studio with mats, indoor plants and natural light" loading="lazy"><div class="hl-overlay"><h3>A dedicated place for practice.</h3><p>A proposed Hidden Laws environment for guided practice, study and meaningful connection.</p></div></div>
          <div class="hl-vside">
            <div class="hl-vimage"><img src="/art/tree.webp" alt="Ancestral tree artwork" loading="lazy"><div class="hl-overlay"><h3>Roots & lineage</h3><p>Reflection on what we carry forward.</p></div></div>
            <div class="hl-vimage"><img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&amp;fit=crop&amp;w=900&amp;q=85" onerror="this.onerror=null;this.src='/art/akharata.webp'" alt="Warm library bookshelves representing a future environment for study" loading="lazy"><div class="hl-overlay"><h3>Books & knowledge</h3><p>A future setting for study and conversation.</p></div></div>
          </div>
        </div>
        <div class="hl-future"><span><strong>A vision in development.</strong> The physical Hidden Laws space, library and tea environment are future concepts, not currently open facilities.</span><a href="#booking">Explore what's available now</a></div>
      </div>`;
    work.insertAdjacentElement('afterend',section);
  }
  const ascend=document.getElementById('ascend');
  if(ascend){
    const wrap=ascend.querySelector('.wrap');
    const grid=ascend.querySelector('.grid2');
    if(wrap){
      const lead=document.createElement('div');lead.className='hl-app-banner';lead.innerHTML=`
       <div><div class="hl-app-eyebrow">ASCEND Keys · Digital practice</div><h3>The work continues wherever you are.</h3><p>Reflection, Relief and Journey bring structured contemplative practice into everyday life. Explore questions with Reflection, find a grounding point with Relief, and follow an unfolding path through Journey.</p><a class="btn primary" href="/ascend-keys">Explore ASCEND Keys</a> <a class="btn" href="https://play.google.com/store/apps/details?id=com.ascend.keys26" target="_blank" rel="noopener">Google Play</a></div><div class="hl-app-orbit" aria-label="ASCEND Keys symbolic illustration"><span>◇</span></div>`;
      if(grid)grid.replaceWith(lead);else wrap.appendChild(lead);
      const cards=document.createElement('div');cards.className='hl-keys';cards.innerHTML=`<article class="hl-key"><small>01 · EXPLORE</small><h4>Reflection</h4><p>Thoughtful spreads that help bring a situation into focus without prediction.</p></article><article class="hl-key"><small>02 · GROUND</small><h4>Relief</h4><p>A moment of support through state-based contemplative cards.</p></article><article class="hl-key"><small>03 · DEVELOP</small><h4>Journey</h4><p>A structured sequence of daily practice and inner development.</p></article>`;
      lead.insertAdjacentElement('afterend',cards);
    }
  }
})();