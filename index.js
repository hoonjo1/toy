const getClock = () => {
  const clock = document.querySelector(".header-nav__right");
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
};
getClock();
setInterval(getClock, 1000);

const getCon = () => {
  const container = document.querySelector(".container");
};
getCon();

// const checkMode = () => {
//   const back = document.querySelector(".back");
//   const body = document.querySelector("body");
//   const App = document.querySelector(".App");
//   let mode = localStorage.getItem("mode");
//   if (mode === "light") {
//     delete body.dataset.theme;
//     delete App.dataset.theme;
//     back.classList.remove("border-dark");
//     back.classList.add("border-light");
//   }
// };
// checkMode();

// const getMode = () => {
//   const btn = document.querySelector(".toggle-btn");
//   const back = document.querySelector(".back");
//   const body = document.querySelector("body");
//   const App = document.querySelector(".App");
//   btn.addEventListener("click", () => {
//     if (body.dataset.theme == "dark") {
//       delete body.dataset.theme;
//       delete App.dataset.theme;
//       back.classList.remove("border-dark");
//       back.classList.add("border-light");
//       localStorage.setItem("mode", "light");
//     } else {
//       body.dataset.theme = "dark";
//       App.dataset.theme = "dark";
//       back.classList.remove("border-light");
//       back.classList.add("border-dark");
//       localStorage.setItem("mode", "dark");
//     }
//   });
// };
// getMode();

const switchingTheme = (isDark) => {
  const back = document.querySelector(".back");
  const body = document.querySelector("body");
  const App = document.querySelector(".App");

  if (isDark) {
    body.dataset.theme = "dark";
    App.dataset.theme = "dark";
    back.classList.remove("border-light");
    back.classList.add("border-dark");
    console.log("참");
  }
  if (!isDark) {
    delete body.dataset.theme;
    delete App.dataset.theme;
    back.classList.remove("border-dark");
    back.classList.add("border-light");
    console.log("거짓");
  }
};

const checkMode = () => {
  let mode = localStorage.getItem("mode");
  if (mode === "light") {
    switchingTheme(false);
  }
};
checkMode();

const getMode = () => {
  const btn = document.querySelector(".toggle-btn");
  const body = document.querySelector("body");
  btn.addEventListener("click", () => {
    if (body.dataset.theme === "dark") {
      switchingTheme(false);
      localStorage.setItem("mode", "light");
    } else {
      switchingTheme(true);
      localStorage.setItem("mode", "dark");
    }
  });
};
getMode();
