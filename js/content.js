const fristPage = document.querySelector(".frist-page");
const secondPage = document.querySelector(".second-page");
const thirdPage = document.querySelector(".third-page");

const fristContent = () => {
  const clock = document.querySelector(".clock");
  const dateNow = document.querySelector(".date");
  const second = document.querySelector(".second");
  const amPm = document.querySelector(".amPm");
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const time = new Date();
  const year = time.getFullYear();
  const month = String(time.getMonth() + 1).padStart(2, "0");
  const date = String(time.getDate()).padStart(2, "0");
  const day = week[time.getDay()];
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const checkAmPm = hours >= 12 ? "PM" : "AM";

  clock.innerText = `${hours}:${minutes}`;
  second.innerText = seconds;
  dateNow.innerText = `${year}년 ${month}월 ${date}일 ${day}요일`;
  amPm.innerText = checkAmPm;
};

fristContent();

setInterval(fristContent, 1000);
