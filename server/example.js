const puppeteer = require('puppeteer');
const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
  try {
    const res = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/kcp16vmkrvga75lbo7d7dttle6oltc7p@import.calendar.google.com/events?key=${API_KEY}`);
    if (res.status === 200) {
      const $ = cheerio.load(res.data)
      console.log(res.data)
      const events = [];
      $('.day-label').each((index, element) => {
        console.log(($(element).text()));
      });
      console.log(events);
    }
  } catch (error) {
    console.error(error);
  }
})()

// kcp16vmkrvga75lbo7d7dttle6oltc7p@import.calendar.google.com

// BEGIN:VCALENDAR
// VERSION:2.0
// CALSCALE:GREGORIAN
// PRODID:-//EMS eSchedule//NONSGML Event Calendar//EN
// X-PUBLISHED-TTL:PT12H
// X-WR-CALNAME:(eSchedule - Orange County Emergency Services)
// X-WR-TIMEZONE:America/New_York
// METHOD:PUBLISH
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200302T060000
// DTEND:20200303T060000
// UID:27267762@myesched.com
// DTSTAMP:20200302T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200306T060000
// DTEND:20200307T060000
// UID:27267763@myesched.com
// DTSTAMP:20200306T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200310T060000
// DTEND:20200311T060000
// UID:27267764@myesched.com
// DTSTAMP:20200310T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200314T060000
// DTEND:20200315T060000
// UID:27267765@myesched.com
// DTSTAMP:20200314T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200318T060000
// DTEND:20200319T060000
// UID:27267766@myesched.com
// DTSTAMP:20200318T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200322T060000
// DTEND:20200323T060000
// UID:27267767@myesched.com
// DTSTAMP:20200322T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200326T060000
// DTEND:20200327T060000
// UID:27267768@myesched.com
// DTSTAMP:20200326T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200330T060000
// DTEND:20200331T060000
// UID:27267769@myesched.com
// DTSTAMP:20200330T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Vacation/Vacation
// DTSTART:20200403T060000
// DTEND:20200404T060000
// UID:26728708@myesched.com
// DTSTAMP:20200403T060000
// DESCRIPTION: Orange County Emergency Services: Vacation/Vacation
// LAST-MODIFIED:20191215T065300
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200407T060000
// DTEND:20200408T060000
// UID:27267770@myesched.com
// DTSTAMP:20200407T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200411T060000
// DTEND:20200412T060000
// UID:27267771@myesched.com
// DTSTAMP:20200411T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200415T060000
// DTEND:20200416T060000
// UID:27267772@myesched.com
// DTSTAMP:20200415T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200419T060000
// DTEND:20200420T060000
// UID:27267773@myesched.com
// DTSTAMP:20200419T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200423T060000
// DTEND:20200424T060000
// UID:27267774@myesched.com
// DTSTAMP:20200423T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200427T060000
// DTEND:20200428T060000
// UID:27267775@myesched.com
// DTSTAMP:20200427T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200501T060000
// DTEND:20200502T060000
// UID:27267776@myesched.com
// DTSTAMP:20200501T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200505T060000
// DTEND:20200506T060000
// UID:27267777@myesched.com
// DTSTAMP:20200505T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200509T060000
// DTEND:20200510T060000
// UID:27267778@myesched.com
// DTSTAMP:20200509T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200513T060000
// DTEND:20200514T060000
// UID:27267779@myesched.com
// DTSTAMP:20200513T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200517T060000
// DTEND:20200518T060000
// UID:27267780@myesched.com
// DTSTAMP:20200517T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200521T060000
// DTEND:20200522T060000
// UID:27267781@myesched.com
// DTSTAMP:20200521T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200525T060000
// DTEND:20200526T060000
// UID:27267782@myesched.com
// DTSTAMP:20200525T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200529T060000
// DTEND:20200530T060000
// UID:27267783@myesched.com
// DTSTAMP:20200529T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200602T060000
// DTEND:20200603T060000
// UID:27267784@myesched.com
// DTSTAMP:20200602T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200606T060000
// DTEND:20200607T060000
// UID:27267785@myesched.com
// DTSTAMP:20200606T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200610T060000
// DTEND:20200611T060000
// UID:27267786@myesched.com
// DTSTAMP:20200610T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200614T060000
// DTEND:20200615T060000
// UID:27267787@myesched.com
// DTSTAMP:20200614T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200618T060000
// DTEND:20200619T060000
// UID:27267788@myesched.com
// DTSTAMP:20200618T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200622T060000
// DTEND:20200623T060000
// UID:27267789@myesched.com
// DTSTAMP:20200622T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200626T060000
// DTEND:20200627T060000
// UID:27267790@myesched.com
// DTSTAMP:20200626T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200630T060000
// DTEND:20200701T060000
// UID:27267791@myesched.com
// DTSTAMP:20200630T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200704T060000
// DTEND:20200705T060000
// UID:27267792@myesched.com
// DTSTAMP:20200704T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200708T060000
// DTEND:20200709T060000
// UID:27267793@myesched.com
// DTSTAMP:20200708T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200712T060000
// DTEND:20200713T060000
// UID:27267794@myesched.com
// DTSTAMP:20200712T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200716T060000
// DTEND:20200717T060000
// UID:27267795@myesched.com
// DTSTAMP:20200716T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200720T060000
// DTEND:20200721T060000
// UID:27267796@myesched.com
// DTSTAMP:20200720T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Paramedic/Medic 5
// DTSTART:20200724T060000
// DTEND:20200725T060000
// UID:27267797@myesched.com
// DTSTAMP:20200724T060000
// DESCRIPTION: Orange County Emergency Services: Paramedic/Medic 5
// LAST-MODIFIED:20200115T100600
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Vacation/Vacation
// DTSTART:20200728T060000
// DTEND:20200729T060000
// UID:28257567@myesched.com
// DTSTAMP:20200728T060000
// DESCRIPTION: Orange County Emergency Services: Vacation/Vacation
// LAST-MODIFIED:20200229T071200
// END:VEVENT
// BEGIN:VEVENT
// SUMMARY:Orange County Emergency Services: Vacation/Vacation
// DTSTART:20200801T060000
// DTEND:20200802T060000
// UID:28257570@myesched.com
// DTSTAMP:20200801T060000
// DESCRIPTION: Orange County Emergency Services: Vacation/Vacation
// LAST-MODIFIED:20200229T071400
// END:VEVENT
// END:VCALENDAR