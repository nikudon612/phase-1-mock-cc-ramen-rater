// write your code here
console.log("%c HI", "color: aqua");

const ramenMenu = document.querySelector("#ramen-menu");
const baseImgUrl = "http://localhost:3000/ramens";

document.addEventListener("DOMContentLoaded", () => {
  // fetch and translate ramen images into json
  fetch(baseImgUrl)
    .then((resp) => resp.json)
    .then((ramenImages) => getImages(ramenImages));
});

function items()