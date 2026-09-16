(()=>{
  const books=document.querySelector('#teachings .books');
  if(!books)return;

  const items=[
    {
      title:"Year’s Kaleidoscope",
      meta:"Kaleidoscope series · Book 1",
      href:"https://www.amazon.com/s?k=9798197501882"
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
    const a=document.createElement('a');
    a.className='book book-link-live';
    a.href=item.href;
    a.target='_blank';
    a.rel='noopener noreferrer';
    a.setAttribute('aria-label',`View ${item.title} on Amazon`);
    a.innerHTML=`<strong>${item.title}</strong><span>${item.meta}</span><em>View on Amazon →</em>`;
    books.appendChild(a);
  }

  const style=document.createElement('style');
  style.textContent=`
    .book-link-live{display:block;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease;min-height:118px}
    .book-link-live:hover,.book-link-live:focus-visible{transform:translateY(-2px);background:rgba(255,255,255,.06)}
    .book-link-live em{display:block;margin-top:10px;color:#f2d18c;font-style:normal;font-size:.82rem;font-weight:800;letter-spacing:.02em}
  `;
  document.head.appendChild(style);
})();
