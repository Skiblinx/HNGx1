// const date = new Date()

// const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

// const today = days[date.getDay()-1]



// const updateTime = () => {
//   const date = new Date()
//   timeUtc.textContent = date.getTime()
// }

// const todayTag = document.getElementById('today')
// const timeUtc = document.getElementById('utc')

// todayTag.textContent=today

// setInterval(updateTime,1)

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
