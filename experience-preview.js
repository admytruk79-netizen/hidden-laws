(()=>{
  const css=`
  /* Hidden Laws — experience and digital practice editorial preview */
  .hl-vision{position:relative;padding:94px 0;background:linear-gradient(145deg,#062019 0%,#0b281e 42%,#071611 100%);border-block:1px solid rgba(210,179,111,.26);overflow:hidden}
  .hl-vision:before{content:"";position:absolute;right:-10%;top:-38%;width:60%;aspect-ratio:1;background:radial-gradient(circle,rgba(190,150,75,.12),transparent 65%);pointer-events:none}
  .hl-vision .wrap{position:relative;z-index:1}.hl-vision .hl-eyebrow,.hl-app-eyebrow{font-size:.71rem;letter-spacing:.23em;text-transform:uppercase;color:#e6c28a;font-weight:750}
  .hl-vision h2{font:normal clamp(2.65rem,5.2vw,5.2rem)/1.05 Georgia,serif;letter-spacing:-.04em;max-width:790px;margin:14px 0 24px;color:#f6e9cc}
  .hl-vision .hl-summary{font-size:clamp(1.03rem,1.55vw,1.19rem);line-height:1.8;color:#d4d8cb;max-width:730px;margin-bottom:34px}
  .hl-now{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin:0 0 48px}.hl-now strong{color:#f3ddae;font-size:.88rem;margin-right:8px}.hl-now span{border:1px solid rgba(231,195,138,.32);border-radius:999px;padding:8px 15px;font-size:.84rem;color:#f1e3c9;background:rgba(255,255,255,.035)}
  .hl-vision-grid{display:grid;grid-template-columns:1.3fr .7fr;gap:22px}.hl-vimage{position:relative;min-height:430px;border-radius:22px;overflow:hidden;border:1px solid rgba(225,189,123,.28);background:#13271e}
  .hl-vimage img{width:100%;height:100%;object-fit:cover;display:block;position:absolute;inset:0;filter:brightness(.92) saturate(.96)}
  .hl-vimage:after{content:"";position:absolute;inset:42% 0 0;background:linear-gradient(transparent,rgba(1,16,11,.85))}
  .hl-vimage .hl-overlay{position:absolute;bottom:27px;left:30px;right:30px;z-index:2}.hl-vimage h3{font:normal 2.15rem/1.08 Georgia,serif;color:#fff0ce;margin:0 0 10px}.hl-vimage p{max-width:470px;margin:0;color:#ede5d4;line-height:1.6}
  .hl-vside{display:grid;grid-template-rows:1fr 1fr;gap:22px}.hl-vside .hl-vimage{min-height:202px}.hl-vside .hl-vimage h3{font-size:1.52rem}.hl-vside .hl-overlay{bottom:19px;left:23px;right:23px}
  .hl-vision .hl-future{display:flex;justify-content:space-between;align-items:center;gap:28px;padding-top:26px;color:#d5c7a7;font-size:.9rem}.hl-future strong{color:#f4e0b7}.hl-future a{display:inline-flex;padding:12px 20px;border:1px solid #b99858;border-radius:999px;color:#f5d89d;white-space:nowrap}
  #ascend .hl-app-banner{display:grid;grid-template-columns:1.1fr .9fr;gap:24px;align-items:center;margin:26px 0 28px;padding:30px;background:linear-gradient(135deg,#143b2b,#09231a);border:1px solid rgba(230,194,135,.27);border-radius:24px}
  #ascend .hl-app-banner h3{font:normal clamp(1.9rem,3vw,3rem)/1.14 Georgia,serif;margin:9px 0 12px;color:#f6ebd2}#ascend .hl-app-banner p{color:#cbd5dc;line-height:1.7;margin:0 0 20px}
  #ascend .hl-app-banner .hl-app-orbit{aspect-ratio:1;border:1px solid rgba(225,195,142,.4);border-radius:50%;display:grid;place-items:center;max-width:270px;width:100%;margin:auto;background:radial-gradient(circle,rgba(213,177,104,.2),transparent 56%),radial-gradient(circle at 50% 50%,#173a2a,#081e17 70%);box-shadow:0 0 0 16px rgba(225,195,142,.035),0 0 0 35px rgba(225,195,142,.025)}
  #ascend .hl-app-orbit span{font:normal 2.8rem Georgia,serif;color:#efd9a3;letter-spacing:.12em}
  #ascend .hl-keys{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin:26px 0 0}
  #ascend .hl-key{padding:23px 21px;border-radius:20px;background:rgba(255,255,255,.035);border:1px solid rgba(235,204,148,.22)}#ascend .hl-key small{font-size:.69rem;letter-spacing:.17em;color:#e8c58a}#ascend .hl-key h4{font:normal 1.65rem Georgia,serif;margin:9px 0;color:#f5e7c7}#ascend .hl-key p{color:#bdc8d4;font-size:.94rem;margin:0;line-height:1.6}
  @media(max-width:760px){.hl-vision{padding:66px 0}.hl-vision-grid{grid-template-columns:1fr}.hl-vimage{min-height:330px}.hl-vside{grid-template-columns:1fr 1fr;grid-template-rows:auto;gap:12px}.hl-vside .hl-vimage{min-height:210px}.hl-vside .hl-vimage h3{font-size:1.22rem}.hl-vside .hl-vimage p{font-size:.75rem}.hl-vside .hl-overlay{left:14px;right:14px;bottom:14px}.hl-vision .hl-future{align-items:flex-start;flex-direction:column}#ascend .hl-app-banner{grid-template-columns:1fr;padding:24px}#ascend .hl-app-banner .hl-app-orbit{max-width:180px}#ascend .hl-keys{grid-template-columns:1fr;gap:12px}}
  `;
  const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);
  const work=document.getElementById('work');
  if(work){
    const section=document.createElement('section');section.className='hl-vision';section.id='vision';section.innerHTML=`
      <div class="wrap">
        <div class="hl-eyebrow">THE NEXT CHAPTER · HIDDEN LAWS</div>
        <h2>From individual practice to a place of discovery.</h2>
        <p class="hl-summary">Hidden Laws begins with personal experience — contemplative practice, energy work, ancestral exploration and the study of deeper patterns in everyday life. Today the work is offered through mobile and remote sessions. The next chapter is a dedicated place for practice, study and meaningful connection.</p>
        <div class="hl-now"><strong>AVAILABLE NOW</strong><span>Mobile sessions</span><span>Remote sessions</span><span>One-to-one guidance</span><span>ASCEND Keys app</span></div>
        <div class="hl-vision-grid">
          <div class="hl-vimage"><img src="https://images.unsplash.com/photo-1687783615476-f4c12358ca9d?auto=format&amp;fit=crop&amp;w=1400&amp;q=85" onerror="this.onerror=null;this.src='/art/integration.webp'" alt="A dedicated yoga and meditation studio with practice mats, illustrating the future Hidden Laws space" loading="lazy"><div class="hl-overlay"><h3>A dedicated place for practice.</h3><p>A proposed Hidden Laws environment for guided practice, study and meaningful connection.</p></div></div>
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