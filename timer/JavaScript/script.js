const date = document.querySelector(".date");
const dayName = document.querySelectorAll(".day-name div");
const monthName = document.querySelectorAll(".month div");
const hrs = document.querySelectorAll(".hour");
const min = document.querySelectorAll(".minute");
const sec = document.querySelectorAll(".second");
const span = document.querySelectorAll(".merit span");
function runClock() {
  const time = new Date();
  let da = time.getDate();
  da = da < 10 ? "0" + da : da;
  let mo = time.getMonth() + 1;
  mo = mo < 10 ? "0" + mo : mo;
  let ye = time.getFullYear();
  date.innerHTML = `${da}-${mo}-${ye}`;
  console.log(time.getDay());
  dayName[time.getDay()].classList.add("day-active");
  monthName[time.getMonth()].classList.add("day-active");

  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  if (h > 12) {
    h = h - 12 == 0 ? 12 : h - 12;
    span[1].classList.add("active");
  } else {
    span[0].classList.add("active");
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  h = h.toString();
  m = m.toString();
  s = s.toString();

  hrs[0].innerHTML = h[0];
  hrs[1].innerHTML = h[1];
  min[0].innerHTML = m[0];
  min[1].innerHTML = m[1];
  sec[0].innerHTML = s[0];
  sec[1].innerHTML = s[1];
}
setInterval(runClock, 1000);
