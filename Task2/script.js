let [sec, min, hrs] = [0, 0, 0];
let timer = document.querySelector(".container");
let int = null;
document.getElementById("start").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 1000);
});
document.getElementById("pause").addEventListener("click", () => {
  clearInterval(int);
});
document.getElementById("reset").addEventListener("click", () => {
  clearInterval(int);
  [sec, min, hrs] = [0, 0, 0];
  timer.innerHTML = "00:00:00";
});

function displayTimer() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hrs++;
    }
  }
  let h = hrs < 10 ? "0" + hrs : hrs;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  timer.innerHTML = `${h}:${m}:${s}`;
}
