const CONTENT_KEY='site:content:v2';
const DEFAULTS = {
  heroKicker: 'Knowledge · Practice · Integration',
  heroTitle: 'Discover the Hidden Laws.',
  heroLead: "Practical knowledge for conscious development — through direct experience, reflection, and work that can be applied in everyday life.",
  mission: 'To preserve, develop and pass on practical knowledge that helps people understand themselves, reconnect with deeper layers of life, and carry what they discover back into the world.',
  missionBody: 'The aim is not to escape one world for another. It is to connect inner and outer, visible and subtle, ancestral and present, knowledge and experience — while keeping discernment, responsibility and ordinary life at the center.',
  aboutTitle: 'A life of practice, study and transmission.',
  aboutBody: "I'm Oleksandr Dmytruk — an author, teacher and practitioner based in Portland. My path ran through a rare Qigong lineage out of North Tibet, Reiki, ancestral and shamanic practice, and years spent listening for what sits just beneath ordinary experience — the astral and subtle-body layer most people only notice in passing. I was drawn to each of these in turn because every tradition I studied held a genuine piece of something larger, and none of them, on its own, held the whole. The longer I practiced, the more clearly those pieces pointed to one underlying architecture, which is what eventually became ASCEND — not a philosophy to take on faith, but a structure built to be tested against real, lived experience.",
  bookingIntro: "Book a Session will take you straight to my calendar for a consultation. If a time doesn't work, send an inquiry below and I will reply personally."
};
function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}})}
export async function onRequestGet(context){let saved={};if(context.env.CONTENT){try{saved=JSON.parse((await context.env.CONTENT.get(CONTENT_KEY))||'{}')}catch{}}return json({...DEFAULTS,...saved})}
