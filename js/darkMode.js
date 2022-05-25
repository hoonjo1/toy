const switchingTheme = (isDark) => {
  const back = document.querySelector(".back");
  const body = document.querySelector("body");
  const App = document.querySelector(".App");

  if (isDark) {
    body.dataset.theme = "dark";
    App.dataset.theme = "dark";
    back.classList.remove("border-light");
    back.classList.add("border-dark");
    localStorage.setItem("mode", "dark");
    console.log("true");
  }
  if (!isDark) {
    delete body.dataset.theme;
    delete App.dataset.theme;
    delete back.dataset.theme;
    back.classList.remove("border-dark");
    back.classList.add("border-light");
    localStorage.setItem("mode", "light");
    console.log("false");
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
    } else {
      switchingTheme(true);
    }
  });
};

getMode();
