const hourE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");
function upadteClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  hourE1.innerText = h;
  minutesE1.innerHTML = m;
  secondsE1.innerText = s;
  ampmE1.innerText = ampm;
  setTimeout(() => {
    upadteClock();
  }, 1000);
}
upadteClock();
