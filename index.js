const getClock = () => {
  const title = document.querySelector(".header-nav__right");
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  title.innerText = `${hours}:${minutes}`;
};
getClock();
setInterval(getClock, 1000);

const getCon = () => {
  const container = document.querySelector(".container");
};
getCon();

const checkMode = () => {
  const body = document.querySelector("body");
  const App = document.querySelector(".App");
  let mode = localStorage.getItem("mode");
  if (mode == "light") {
    delete body.dataset.theme;
    delete App.dataset.theme;
  }
};
checkMode();

const getMode = () => {
  const btn = document.querySelector(".toggle-btn");
  const back = document.querySelector(".back");
  const body = document.querySelector("body");
  const App = document.querySelector(".App");
  btn.addEventListener("click", () => {
    if (body.dataset.theme == "dark") {
      delete body.dataset.theme;
      delete App.dataset.theme;
      back.classList.remove("border-dark");
      back.classList.add("border-light");
      localStorage.setItem("mode", "light");
    } else {
      body.dataset.theme = "dark";
      App.dataset.theme = "dark";
      back.classList.remove("border-light");
      back.classList.add("border-dark");
      localStorage.setItem("mode", "dark");
    }
  });
};
getMode();
