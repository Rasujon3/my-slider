let images = [
  "images/pic-1.JPG",
  "images/pic-2.JPG",
  "images/pic-3.JPG",
  "images/pic-4.JPG",
  "images/pic-5.JPG",
  "images/pic-6.JPG",
  "images/pic-7.JPG",
  "images/pic-8.JPG",
  "images/pic-9.JPG",
];
let imgIndex = 0;
const imgElement = document.getElementById("slider-img");
setInterval(() => {
  if (imgIndex >= images.length) {
    imgIndex = 0;
  }
  //   console.log(imgIndex);
  const imgUrl = images[imgIndex];
  //   console.log(imgUrl
  imgElement.setAttribute("src", imgUrl);
  imgIndex++;
}, 1000);
