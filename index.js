
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function updateDateTime() {
  const date = new Date();
  const today = days[date.getDay()];
  const timeUtc = date.getTime();

  todayTag.textContent = `Today is ${today}`;
  utc.textContent = `The current time in milliseconds is ${timeUtc}`;
}

const todayTag = document.getElementById('today');
const utc = document.getElementById('utc');

updateDateTime();
setInterval(updateDateTime, 1000);
