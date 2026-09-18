(()=>{
  const books=document.querySelector('#teachings .books');
  if(!books)return;

  const items=[
    {
      title:"Akharata System",
      meta:"Ahavata series · Foundations for Consciousness Development",
      href:"https://www.amazon.com.br/Akharata-System-Foundations-Consciousness-Development/dp/B0HD6WSXQC"
    },
    {
      title:"Year’s Kaleidoscope",
      meta:"Ahavata series",
      href:null
    },
    {
      title:"Fire of Becoming",
      meta:"Kaleidoscope series · Book 2",
      href:"https://www.amazon.com/s?k=9798180880314"
    },
    {
      title:"The Invisible Strike",
      meta:"Energetic Raids, the Five Centers, and the Art of Defense",
      href:"https://www.amazon.com/s?k=9798185508244"
    },
    {
      title:"Energy Massage: Practitioner’s Manual",
      meta:"Chakras, Nadis, Kundalini, Zodiac & the Five Elements",
      href:"https://www.amazon.com/s?k=9798187952137"
    }
  ];

  books.innerHTML='';
  for(const item of items){
    const el=document.createElement(item.href?'a':'div');
    el.className='book'+(item.href?' book-link-live':' book-static');
    if(item.href){
      el.href=item.href;
      el.target='_blank';
      el.rel='noopener noreferrer';
      el.setAttribute('aria-label',`View ${item.title} on Amazon`);
    }
    el.innerHTML=`<strong>${item.title}</strong><span>${item.meta}</span>${item.href?'<em>View on Amazon →</em>':''}`;
    books.appendChild(el);
  }

  const style=document.createElement('style');
  style.textContent=`
    .book-link-live{display:block;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease;min-height:118px}
    .book-link-live:hover,.book-link-live:focus-visible{transform:translateY(-2px);background:rgba(255,255,255,.06)}
    .book-link-live em{display:block;margin-top:10px;color:#f2d18c;font-style:normal;font-size:.82rem;font-weight:800;letter-spacing:.02em}
    .book-static{display:block;min-height:118px;cursor:default}
  `;
  document.head.appendChild(style);
})();