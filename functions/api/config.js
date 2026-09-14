export async function onRequestGet(context) {
  const bookingUrl = (context.env.BOOKING_URL || '').trim();
  return new Response(JSON.stringify({ bookingUrl }), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    }
  });
}
