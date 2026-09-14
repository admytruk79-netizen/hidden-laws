const DEFAULT_BOOKING_URL='https://cal.com/ascend-5vlj4z/private-session';

export async function onRequestGet(context) {
  const bookingUrl = (context.env.BOOKING_URL || DEFAULT_BOOKING_URL).trim();
  return new Response(JSON.stringify({ bookingUrl }), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    }
  });
}
