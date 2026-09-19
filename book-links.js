(()=>{
  const books=document.querySelector('#teachings .books');
  if(!books)return;

  const items=[
    {
      title:"Akharata System",
      meta:"Volume I · The Structure of Man",
      isbn:"ASIN B0HD6WSXQC",
      desc:"The foundational text behind the Akharata system — a structured map of inner development drawn from shamanic, yogic and energetic training, organized into a clear framework for practice rather than abstract theory.",
      href:"https://www.amazon.com/gp/product/B0HD6WSXQC?language=en_US&currency=USD"
    },
    {
      title:"Year’s Kaleidoscope",
      meta:"Kaleidoscope series · Book 1",
      isbn:"ASIN B0H2NHP3HF",
      desc:"The opening volume of the Kaleidoscope series, following a year of practice, observation and inner change through the turning of the seasons.",
      href:"https://www.amazon.com/gp/product/B0H2NHP3HF?language=en_US&currency=USD"
    },
    {
      title:"Fire of Becoming",
      meta:"Kaleidoscope series · Book 2",
      isbn:"Paperback · ISBN 979-8-1808-8031-4",
      desc:"The second book in the Kaleidoscope series, tracing the transformative fire of personal becoming — the friction, breakdowns and breakthroughs that reshape a person from the inside out.",
      href:"https://www.amazon.com/s?k=9798180880314&i=stripbooks&language=en_US&currency=USD"
    },
    {
      title:"The Invisible Strike",
      meta:"Energetic Raids, the Five Centers, and the Art of Defense",
      isbn:"ASIN B0H7QQPL8V",
      desc:"A practical guide to recognizing energetic raids on the five centers of the body and mind, and building real, verifiable defenses against them.",
      href:"https://www.amazon.com/gp/product/B0H7QQPL8V?language=en_US&currency=USD"
    },
    {
      title:"Energy Massage: Practitioner’s Manual",
      meta:"Chakras, Nadis, Kundalini, Zodiac & the Five Elements",
      isbn:"ASIN B0GX2ZMXDF",
      desc:"A practitioner’s manual connecting chakras, nadis, kundalini, the zodiac and the five elements into one applied system for energy massage and bodywork.",
      href:"https://www.amazon.com/gp/product/B0GX2ZMXDF?language=en_US&currency=USD"
    },
    {
      title:"Long Con",
      meta:"Catfishing, Romance & the Architecture of Digital Deception",
      isbn:"ASIN B0HBM2VRN3",
      desc:"An examination of catfishing, romance, and the architecture of digital deception.",
      href:"https://www.amazon.com/gp/product/B0HBM2VRN3?language=en_US&currency=USD"
    }
  ];

  books.innerHTML='';
  items.forEach((item,i)=>{
    const card=document.createElement('div');
    card.className='book';
    const detailsId=`book-details-${i}`;
    card.innerHTML=`
      <strong>${item.title}</strong>
      <span>${item.meta}</span>
      <div class="book-details" id="${detailsId}">
        ${item.isbn?`<div class="book-isbn">${item.isbn}</div>`:''}
        <p>${item.desc}</p>
      </div>
      <div class="book-actions">
        <button class="book-toggle" type="button" aria-expanded="false" aria-controls="${detailsId}">
          <span class="book-toggle-label">Details</span>
          <svg viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        ${item.href?`<a class="book-amazon" href="${item.href}" target="_blank" rel="noopener noreferrer" aria-label="View ${item.title} on Amazon">View on Amazon →</a>`:''}
      </div>
    `;
    books.appendChild(card);

    const toggle=card.querySelector('.book-toggle');
    const label=card.querySelector('.book-toggle-label');
    const details=card.querySelector('.book-details');
    toggle.addEventListener('click',()=>{
      const expanded=details.classList.toggle('expanded');
      toggle.setAttribute('aria-expanded',String(expanded));
      label.textContent=expanded?'Hide details':'Details';
    });
  });

  const style=document.createElement('style');
  style.textContent=`
    .books{align-items:start}
    .book{display:flex;flex-direction:column;min-width:0}
    .book>strong{display:block;color:#fff}
    .book>span{display:block;color:var(--muted);font-size:.9rem;margin-top:2px}
    .book-details{overflow:hidden;max-height:0;transition:max-height .4s cubic-bezier(.16,.84,.28,1),margin-top .4s ease;margin-top:0}
    .book-details.expanded{max-height:240px;margin-top:12px}
    .book-isbn{font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:#8f9cac;margin-bottom:6px;font-weight:700}
    .book-details p{margin:0;color:#b7c0cc;font-size:.9rem;line-height:1.55}
    .book-actions{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;row-gap:8px;column-gap:12px;margin-top:14px}
    .book-toggle{display:inline-flex;align-items:center;gap:6px;padding:0;border:0;background:none;color:#f2d18c;font-size:.82rem;font-weight:800;letter-spacing:.02em;cursor:pointer;white-space:nowrap}
    .book-toggle:hover,.book-toggle:focus-visible{color:#ffe0a3}
    .book-toggle svg{width:10px;height:10px;transition:transform .3s ease}
    .book-toggle[aria-expanded="true"] svg{transform:rotate(180deg)}
    .book-amazon{font-size:.82rem;font-weight:800;letter-spacing:.02em;color:#f2d18c;white-space:nowrap}
    .book-amazon:hover{text-decoration:underline}
    @media(prefers-reduced-motion:reduce){.book-details{transition:none!important}}
  `;
  document.head.appendChild(style);
})();