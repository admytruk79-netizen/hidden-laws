(()=>{
  const about=document.querySelector('#about');
  if(!about||document.querySelector('.bio-origin')) return;

  const style=document.createElement('style');
  style.textContent=`
    .bio-origin{margin-top:34px;padding-top:28px;border-top:1px solid rgba(255,255,255,.10);max-width:820px}
    .bio-origin h3{margin:0 0 14px;font-family:Georgia,serif;font-size:clamp(1.65rem,3vw,2.35rem);font-weight:400;color:#fff}
    .bio-origin-body{position:relative;overflow:hidden;max-height:5.2em;transition:max-height .5s cubic-bezier(.16,.84,.28,1)}
    .bio-origin-body.expanded{max-height:900px}
    .bio-origin-body:not(.expanded):after{content:"";position:absolute;left:0;right:0;bottom:0;height:2.6em;background:linear-gradient(180deg,transparent,#08111f)}
    .bio-origin p{margin:0 0 16px;color:#b7c0cc;font-size:1rem;line-height:1.75}
    .bio-origin p:last-child{margin-bottom:0}
    .bio-origin-toggle{position:relative;z-index:2;display:inline-flex;align-items:center;gap:6px;margin-top:14px;padding:0;border:0;background:none;color:#f2d18c;font-size:.86rem;font-weight:800;letter-spacing:.03em;cursor:pointer}
    .bio-origin-toggle:hover{color:#ffe0a3}
    .bio-origin-toggle svg{width:11px;height:11px;transition:transform .3s ease}
    .bio-origin-toggle[aria-expanded="true"] svg{transform:rotate(180deg)}
  `;
  document.head.appendChild(style);

  const block=document.createElement('div');
  block.className='bio-origin';
  block.innerHTML=`
    <div class="eyebrow">Origin</div>
    <h3>Why I built ASCEND.</h3>
    <div class="bio-origin-body" id="bio-origin-body">
      <p>Long before ASCEND existed, I kept running into the same gap: real knowledge scattered across dozens of separate systems, each holding a genuine piece, none holding the whole. A breathing technique here, a symbolic framework there, a fragment of energetic theory somewhere else — rarely anything that connected them into one coherent map.</p>
      <p>So I did two things at once. I studied what already existed, as widely and honestly as I could. And I started building the comprehensive system I couldn't find anywhere else. Not being bound to a single inherited framework turned out to be useful rather than limiting — it's how I arrived at my own structural model of the mind's metaphysical architecture, work that didn't fit neatly inside any tradition I had studied, because no existing map had drawn it that way.</p>
      <p>I think of it less like following a marked trail and more like walking through a forest and treading a path that wasn't there before. I'm not in a rush. I'm just laying the path down, one deliberate step at a time.</p>
    </div>
    <button class="bio-origin-toggle" id="bio-origin-toggle" type="button" aria-expanded="false" aria-controls="bio-origin-body">
      <span class="bio-origin-toggle-label">Read more</span>
      <svg viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `;

  const anchor=about.querySelector('.bio-lineage');
  const wrap=about.querySelector('.wrap');
  if(anchor) anchor.after(block);
  else if(wrap) wrap.appendChild(block);

  const body=block.querySelector('#bio-origin-body');
  const toggle=block.querySelector('#bio-origin-toggle');
  const label=block.querySelector('.bio-origin-toggle-label');
  toggle.addEventListener('click',()=>{
    const expanded=body.classList.toggle('expanded');
    toggle.setAttribute('aria-expanded',String(expanded));
    label.textContent=expanded?'Show less':'Read more';
  });
})();
