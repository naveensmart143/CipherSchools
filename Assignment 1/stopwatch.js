let btns = document.querySelectorAll(".btn");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".sedonds");
let value = 00;
let min = 0;
let setId = null;
btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("start")) {
      setId = setInterval(() => {
        value++;
        seconds.innerHTML = String(value).padStart(2, "0");
        if (value == 59) {
          min++;
          value = 0;
          minutes.innerHTML = String(min).padStart(2, "0");
        }
      }, 1000);
    } else if (e.target.classList.contains("stop")) {
      clearInterval(setId);
    } else if (e.target.classList.contains("reset")) {
      minutes.innerHTML = String(00).padStart(2, "0");
      seconds.innerHTML = String(00).padStart(2, "0");
      clearInterval(setId);
      min = value = 0;
    }
  });
});
