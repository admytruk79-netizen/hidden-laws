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
    injected=injected.replace('</body>','<script src="/art-loader.js?v=20260915-5" defer></script></body>');
  }
  if(!injected.includes('/mobile-layout-fix.js')){
    injected=injected.replace('</body>','<script src="/mobile-layout-fix.js?v=20260915-4" defer></script></body>');
  }
  if(!injected.includes('/bio-lineage.js')){
    injected=injected.replace('</body>','<script src="/bio-lineage.js?v=20260915-1" defer></script></body>');
  }
  if(!injected.includes('/art-motion-fix.js')){
    injected=injected.replace('</body>','<script src="/art-motion-fix.js?v=20260915-1" defer></script></body>');
  }
  if(!injected.includes('/book-links.js')){
    injected=injected.replace('</body>','<script src="/book-links.js?v=20260915-1" defer></script></body>');
  }
  if(!injected.includes('/typography-stability.js')){
    injected=injected.replace('</body>','<script src="/typography-stability.js?v=20260915-1" defer></script></body>');
  }
  if(!injected.includes('/lineage-display-fix.js')){
    injected=injected.replace('</body>','<script src="/lineage-display-fix.js?v=20260916-1" defer></script></body>');
  }
  if(!injected.includes('/visual-layout-fix.js')){
    injected=injected.replace('</body>','<script src="/visual-layout-fix.js?v=20260916-1" defer></script></body>');
  }
  if(!injected.includes('/image-quality-fix.js')){
    injected=injected.replace('</body>','<script src="/image-quality-fix.js?v=20260916-1" defer></script></body>');
  }
  if(!injected.includes('/lineage-image-quality.js')){
    injected=injected.replace('</body>','<script src="/lineage-image-quality.js?v=20260916-2" defer></script></body>');
  }
  if(!injected.includes('/generated-lineage-assets.js')){
    injected=injected.replace('</body>','<script src="/generated-lineage-assets.js?v=20260917-2" defer></script></body>');
  }
  const headers=new Headers(response.headers);
  headers.delete('content-length');
  headers.set('cache-control','no-store');
  return new Response(injected,{status:response.status,statusText:response.statusText,headers});
}