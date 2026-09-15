const CONTENT_KEY='site:content:v2';
const DEFAULTS = {
  heroKicker: 'Knowledge · Practice · Integration',
  heroTitle: 'Uniting the worlds.',
  heroLead: 'Hidden Laws is the home of my work in conscious development, ancestral practice, Qigong, Reiki, energetic awareness and the ASCEND system — built to bring inner experience back into ordinary life.',
  mission: 'To preserve, develop and pass on practical knowledge that helps people understand themselves, reconnect with deeper layers of life, and carry what they discover back into the world.',
  missionBody: 'The aim is not to escape one world for another. It is to connect inner and outer, visible and subtle, ancestral and present, knowledge and experience — while keeping discernment, responsibility and ordinary life at the center.',
  aboutTitle: 'Oleksandr Dmytruk',
  aboutBody: 'I am an author, teacher and practitioner based in Portland, working across Qigong, Reiki, ancestral work, shamanic traditions, energetic practice and astral or subtle-body guidance. I founded the 12 Rays School and continue to develop the ASCEND body of work through writing, structured training and private practice.',
  bookingIntro: 'Choose a private session through the connected calendar, or send an inquiry if you are not sure which form of work is the right starting point.'
};
function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}})}
export async function onRequestGet(context){let saved={};if(context.env.CONTENT){try{saved=JSON.parse((await context.env.CONTENT.get(CONTENT_KEY))||'{}')}catch{}}return json({...DEFAULTS,...saved})}
