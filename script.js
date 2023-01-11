const imgcard = document.querySelectorAll(".img");
const mainCont = document.querySelector(".main-container");
const images = [
  { imagepath: "url(cat.jpg)", class: "cat", num: 0 },
  { imagepath: "url(lion.jpg)", class: "lion", num: 0 },
  { imagepath: "url(ele.jpg)", class: "elephant", num: 0 },
];
let count = [];
let clicked = 0;
let imageSelected = [];

const btn = document.querySelector(".btn");

for (let i = 0; i < 6; i++) {
  const randomDiv = imgcard[i];
  let randomImageNum;
  if (images.length === 3) {
    randomImageNum = Math.floor(Math.random() * 3);
    if (images[randomImageNum].num === 2) {
      images.splice([randomImageNum], 1);
    }
  }
  if (images.length === 2) {
    randomImageNum = Math.floor(Math.random() * 2);
    if (images[randomImageNum].num === 2) {
      images.splice([randomImageNum], 1);
    }
  }
  if (images.length === 1) {
    randomImageNum = Math.floor(Math.random() * 1);
  }
  randomDiv.style.backgroundImage = images[randomImageNum].imagepath;

  images[randomImageNum].num++;

  randomDiv.classList.add(images[randomImageNum].class);
}

mainCont.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) {
    e.composedPath().forEach((item) => {
      if (item.classList != "overlay") {
      } else {
        item.style.backgroundColor = "transparent";
        imageSelected.push(item);
        let imageVal = item.querySelector("div").classList[2];
        count.push(imageVal);
        clicked++;

        if (clicked === 2 && imageVal === count[0]) {
          count = [];
          imageSelected = [];
          imageVal = [];
          clicked = 0;
        }
        if (clicked === 2 && imageVal !== count[0]) {
          imageSelected.forEach((pic) => {
            setTimeout(() => {
              pic.style.backgroundColor = "rgb(223, 57, 85)";
            }, 600);
          });

          clicked = 0;
          count = [];
          imageSelected = [];
          imageVal = [];
        }
      }
    });
  }
});

btn.addEventListener("click", () => {
  window.location.reload();
});
