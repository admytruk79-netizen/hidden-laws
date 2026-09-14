export async function onRequest(context){
  const response=await context.next();
  const url=new URL(context.request.url);
  if(url.pathname!=='/'||!response.headers.get('content-type')?.includes('text/html'))return response;
  const html=await response.text();
  const withTheme=html.replace('</head>','<link rel="stylesheet" href="/theme.css?v=20260914"></head>');
  const injected=withTheme.replace('</body>','<script src="/dynamic-content.js?v=20260914" defer></script></body>');
  const headers=new Headers(response.headers);headers.delete('content-length');headers.set('cache-control','no-store');
  return new Response(injected,{status:response.status,statusText:response.statusText,headers});
}
