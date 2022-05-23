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
    localStorage.setItem("mode", "dark");
    console.log("true");
  }
  if (!isDark) {
    delete body.dataset.theme;
    delete App.dataset.theme;
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

const getDotSide = () => {
  const App = document.querySelector(".App");
  const modeBox = document.createElement("div");
  const noteBtn = document.createElement("button");
  const testBtn = document.createElement("button");
  const clockBtn = document.createElement("button");

  noteBtn.classList.add("note-btn");
  testBtn.classList.add("test-btn");
  clockBtn.classList.add("clock-btn");
  modeBox.classList.add("mode-btn");

  modeBox.appendChild(noteBtn);
  modeBox.appendChild(testBtn);
  modeBox.appendChild(clockBtn);

  App.appendChild(modeBox);
};
getDotSide();

const getClickMode = () => {
  const App = document.querySelector(".App");
  const clock = document.createElement("span");

  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  clock.innerText = clock.innerText = `${hours}:${minutes}`;

  App.appendChild(clock);
};

const getDotMode = () => {
  const noteBtn = document.querySelector(".note-btn");
  const testBtn = document.querySelector(".test-btn");
  const clockBtn = document.querySelector(".clock-btn");

  noteBtn.addEventListener("click", () => {
    console.log("note");
  });

  testBtn.addEventListener("click", () => {
    console.log("test");
  });

  clockBtn.addEventListener("click", getClickMode);
};

getDotMode();

// const getNote = () => {
//   const App = document.querySelector(".App");
//   const note = document.createElement("div");

//   const seleteBtn = document.createElement("div");
//   const createBtn = document.createElement("button");
//   const removeBtn = document.createElement("button");

//   note.classList.add("note");
//   note.innerText = "";

//   seleteBtn.classList.add("selete-btn");

//   removeBtn.classList.add("remove-btn");
//   createBtn.classList.add("create-btn");
//   removeBtn.innerText = "Remove";
//   createBtn.innerText = "Create";

//   App.appendChild(note);
//   App.appendChild(seleteBtn);

//   seleteBtn.appendChild(removeBtn);
//   seleteBtn.appendChild(createBtn);
// };

// getNote();

// const getTest = () => {
//   const App = document.querySelector(".App");
//   const divTest = document.createElement("div");
//   const createBtn = document.querySelector(".create-btn");
//   const removeBtn = document.querySelector(".remove-btn");

//   createBtn.addEventListener("click", () => {
//     divTest.innerText = "생성";
//     App.appendChild(divTest);
//   });

//   removeBtn.addEventListener("click", () => {
//     App.removeChild(divTest);
//   });
// };

// getTest();
