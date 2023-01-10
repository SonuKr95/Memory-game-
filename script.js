const imgcard = document.querySelectorAll(".img");
const images = [
  { imagepath: "url(/cat.jpg)", class: "cat", num: 0 },
  { imagepath: "url(/lion.jpg)", class: "lion", num: 0 },
  { imagepath: "url(/ele.jpg)", class: "elephant", num: 0 },
];

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

imgcard.forEach((imgContainer) => {
  imgContainer.addEventListener("click", () => {
    console.log(imgContainer.classList.contains("cat"));
  });
});
