const DEFAULTS = {
  heroKicker: 'Knowledge · Practice · Integration',
  heroTitle: 'Uniting the worlds.',
  heroLead: 'A living body of work devoted to self-knowledge, conscious development, ancestral connection, energetic awareness and bringing inner experience back into ordinary life.',
  mission: 'To preserve, develop and pass on practical knowledge that helps people understand themselves, reconnect with deeper layers of life, and bring what they discover back into the world.',
  missionBody: 'The aim is not to escape one world for another. It is to unite inner and outer, visible and subtle, ancestral and present, knowledge and experience — and make that connection useful in everyday life.',
  aboutTitle: 'Oleksandr Dmytruk',
  aboutBody: 'Author, teacher and practitioner working across contemplative development, Qigong, Reiki, ancestral work, energetic practice, shamanic traditions and astral guidance. His work brings structured training, symbolic teaching and direct practice into one coherent path.',
  bookingIntro: 'Book directly through the connected calendar once the booking URL is configured in Cloudflare. Until then, you can send a private inquiry below.'
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
}

export async function onRequestGet(context) {
  let saved = {};
  if (context.env.CONTENT) {
    try { saved = JSON.parse((await context.env.CONTENT.get('site:content')) || '{}'); } catch {}
  }
  return json({ ...DEFAULTS, ...saved });
}
