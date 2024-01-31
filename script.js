const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yessBtn = document.querySelector(".yess-btn");
const MDRBtn = document.querySelector(".MDR-btn");

yessBtn.addEventListener("click", () => {
  question.innerHTML = "HAPPY VALENTINES DAY MAHALLL ILYYY";
  gif.src =
  "https://media1.tenor.com/images/5acd718308f3d8212a9279d094ae8ea2/tenor.gif?itemid=16191958";
});

MDRBtn.addEventListener("mouseover", () => {
  const MDRBtnRect = MDRBtn.getBoundingClientRect();
  const maxX = window.innerWidth - MDRBtnRect.width;
  const maxY = window.innerHeight - MDRBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  MDRBtn.style.left = randomX + "px";
  MDRBtn.style.top = randomY + "px";
});