export async function onRequest(context){
  const response=await context.next();
  const url=new URL(context.request.url);
  if(url.pathname!=='/'||!response.headers.get('content-type')?.includes('text/html'))return response;
  const html=await response.text();
  const injected=html.replace('</body>','<script src="/site-enhancements.js?v=20260914-2" defer></script></body>');
  const headers=new Headers(response.headers);
  headers.delete('content-length');
  headers.set('cache-control','no-store');
  return new Response(injected,{status:response.status,statusText:response.statusText,headers});
}
