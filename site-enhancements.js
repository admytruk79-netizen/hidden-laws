(()=>{
  const section=document.querySelector('#ascend');
  if(!section)return;

  const heading=section.querySelector('.section-head h2');
  const intro=section.querySelector('.section-head .intro');
  if(heading)heading.textContent='A growing body of structured work.';
  if(intro)intro.textContent='ASCEND separates reflection, long-form training, advanced developmental work and symbolic story so each remains clear in purpose and stage of development.';

  const grid=section.querySelector('.grid3');
  if(!grid)return;
  grid.classList.add('ascend-grid');

  const cards=[...grid.querySelectorAll('.card')];
  const journey=cards.find(card=>card.querySelector('.tag')?.textContent.trim()==='ASCEND Journey');
  if(journey){
    const title=journey.querySelector('h3');
    const body=journey.querySelector('p');
    const meta=journey.querySelector('.meta');
    if(title)title.textContent='A forthcoming symbolic journey.';
    if(body)body.textContent='In development: a self-paced story experience through 108 Keys, 24 Chambers and Seven Gates. It is not yet released as a public app or product.';
    if(meta){
      meta.innerHTML='<span class="pill status-pill">In development</span><span class="pill">108 Keys</span><span class="pill">24 Chambers</span><span class="pill">Seven Gates</span>';
    }
  }

  if(!cards.some(card=>card.querySelector('.tag')?.textContent.trim()==='Akharata')){
    const card=document.createElement('article');
    card.className='card';
    card.innerHTML='<div class="tag">Akharata</div><h3>Advanced developmental work.</h3><p>An advanced supporting layer within the broader ASCEND training architecture. It deepens developmental practice without replacing or bypassing Core Formation progression.</p><div class="meta"><span class="pill">Advanced</span><span class="pill">Supporting layer</span><span class="pill">ASCEND training</span></div>';
    grid.appendChild(card);
  }

  if(!document.getElementById('ascend-enhancement-style')){
    const style=document.createElement('style');
    style.id='ascend-enhancement-style';
    style.textContent='.status-pill{background:#1f352d!important;color:#fff!important;border-color:#1f352d!important}.ascend-grid{grid-template-columns:repeat(4,minmax(0,1fr))}@media(max-width:1100px){.ascend-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:760px){.ascend-grid{grid-template-columns:1fr}}';
    document.head.appendChild(style);
  }
})();
