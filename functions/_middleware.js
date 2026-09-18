export async function onRequest(context){
  const response=await context.next();
  const url=new URL(context.request.url);
  if(url.pathname!=='/'||!response.headers.get('content-type')?.includes('text/html'))return response;
  const html=await response.text();
  let injected=html;
  if(!injected.includes('/site-enhancements.js')){
    injected=injected.replace('</body>','<script src="/site-enhancements.js?v=20260914-2" defer></script></body>');
  }
  if(!injected.includes('/art-loader.js')){
    injected=injected.replace('</body>','<script src="/art-loader.js?v=20260918-3-cachefix" defer></script></body>');
  }
  if(!injected.includes('/book-links.js')){
    injected=injected.replace('</body>','<script src="/book-links.js?v=20260915-1" defer></script></body>');
  }
  if(!injected.includes('/bio-lineage.js')){
    injected=injected.replace('</body>','<script src="/bio-lineage.js?v=20260918-2-cachefix" defer></script></body>');
  }
  if(!injected.includes('/about-origin.js')){
    injected=injected.replace('</body>','<script src="/about-origin.js?v=20260918-1" defer></script></body>');
  }
  if(!injected.includes('/touch-motion.js')){
    injected=injected.replace('</body>','<script src="/touch-motion.js?v=20260917-1" defer></script></body>');
  }
  const headers=new Headers(response.headers);
  headers.delete('content-length');
  headers.set('cache-control','no-store');
  return new Response(injected,{status:response.status,statusText:response.statusText,headers});
}
