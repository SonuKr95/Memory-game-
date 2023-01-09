const imgcard = document.querySelectorAll(".img");
const images = ["url(/cat.jpg)", "url(/lion.jpg)", "url(/ele.jpg)"];

for (let i = 0; i < 6; i++) {
  const randomImg = Math.ceil(Math.random() * 3);
  const randomDiv = imgcard[i];
  let randomNum = [];

  /////////
  //////////

  randomDiv.style.backgroundImage = images[randomImg - 1];
  randomDiv.style.backgroundColor = "#fff";
  if (randomImg === 1) {
    randomDiv.classList.add("cat");
  }
  if (randomImg === 2) {
    randomDiv.classList.add("lion");
  }
  if (randomImg === 3) {
    randomDiv.classList.add("elephant");
  }
}
