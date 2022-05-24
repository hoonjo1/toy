const change = (event) => {
  const fristBtn = document.querySelector(".first-btn");
  const secondBtn = document.querySelector(".second-btn");
  const thirdBtn = document.querySelector(".third-btn");

  const fristPage = document.querySelector(".frist-page");
  const secondPage = document.querySelector(".second-page");
  const thirdPage = document.querySelector(".third-page");

  fristBtn.addEventListener("click", () => {
    if (fristPage.classList.contains("hidden")) {
      secondPage.classList.add("hidden");
      thirdPage.classList.add("hidden");
      fristPage.classList.remove("hidden");
    }
  });

  secondBtn.addEventListener("click", () => {
    if (secondPage.classList.contains("hidden")) {
      fristPage.classList.add("hidden");
      thirdPage.classList.add("hidden");
      secondPage.classList.remove("hidden");
    }
  });

  thirdBtn.addEventListener("click", () => {
    if (thirdPage.classList.contains("hidden")) {
      fristPage.classList.add("hidden");
      secondPage.classList.add("hidden");
      thirdPage.classList.remove("hidden");
    }
  });
};

change();
