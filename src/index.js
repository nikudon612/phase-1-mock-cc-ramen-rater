// // write your code here
// console.log("%c HI", "color: aqua");

// //MY CODE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // document.addEventListener("DOMContentLoaded", () => {
// //   fetch(ImgUrl)
// //     .then((resp) => resp.json())
// //     .then((ramenImages) => getImages(ramenImages));
// // });

// // function getImages(ramenImages) {
// //   const images = ramenImages.ramens;
// //   images.forEach((ramenImages) => renderImage(ramenImages));
// // }

// // function renderImage(image) {
// //   const img = document.createElement("img");
// //   img.src = image;

// //   // append image to container
// //   ramenMenu.append(img);
// // }

// //core deliverable 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // See all ramen images in the div with the id of ramen-menu.
// // When the page loads,request the data from the server to get all the ramen objects.
// // Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

// const ramenMenu = document.querySelector("#ramen-menu");
// const ramenurl = "http://localhost:3000/ramens";
// // added for part 2 getting details for ramen
// const ramenDetail = document.getElementById("ramen-detail");

// document.addEventListener("DOMContentLoaded", () => {
//   fetch(ramenurl)
//     .then((resp) => resp.json())
//     .then((data) => displayRamens(data));
// });

// function displayRamens(data) {
//   console.log(data);
//   // what's next?
//   // for each data, create and append image
//   data.forEach((ramen) => {
//     appendToRamenMenu(ramen);
//     //create img element
//     const imageOfRamen = document.createElement("img");
//     imageOfRamen.src = ramen.image;

//     // add event listener from part 2
//     imageOfRamen.addEventListener("click", () => {
//       ramenDetail;
//       //use a function
//       getInfo(ramen);
//     });

//     //append img element
//     ramenMenu.append(imageOfRamen);
//   });
// }

// //part 2 function get info -
// //grab the information of each ramen in #ramen-display
// // feature it

// // core deliverable 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Click on an image from the #ramen-menu div and
// // see all the info about that ramen displayed inside the #ramen-detail div and where it says

// function featureNewRamen(ramen) {
//   // create const for every key
//   // OR BETTER - object.keys
//   const id = ramen.id;
//   const name = ramen.name;
//   const restaurant = ramen.restaurant;

//   // make name = data's ramen name
//   ramenDetail.querySelector(".name").innerHTML = ramen.name;
//   // same for restaurant
//   ramenDetail.querySelector(".restaurant").innerHTML = ramen.restaurant;
//   // same for image
//   ramenDetail.querySelector(".detail-image").src = ramen.image;
//   // insert comment here and insert rating here.
//   //rating reference comment in html append inner html
//   document.querySelector("#rating-display").innerHTML = ramen.rating;
//   //comment reference comment in html append innerhtml
//   document.querySelector("#comment-display").innerHTML = ramen.comment;
// }

// // Core deliverable 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// //Create a new ramen after submitting the new-ramen form.
// //The new ramen should be added to the#ramen-menu div.
// //The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

// //create a function to pass into the event listener
// function submitRamen(e) {
//   // prevent form from reseting
//   e.preventDefault();
//   // console.log to check the form submit works
//   console.log("does this work?");

//   //associate data to input field
//   // pull value from each form field
//   const newName = document.querySelector("#new-name").value;
//   const newRestaurant = document.querySelector("#new-restaurant").value;
//   const newImage = document.querySelector("#new-image").value;
//   const newRating = document.querySelector("#new-rating").value;
//   const newComment = document.querySelector("#new-comment").value;
//   // check to see if submission to name field works in console
//   // console.log(newName);
//   // create object because all above values are very messy and complicating looking
//   const inputValues = {
//     name: newName,
//     restaurant: newRestaurant,
//     image: newImage,
//     rating: newRating,
//     comment: newComment,
//   };
//   console.log(inputValues);

//   //create dom element
//   // const imageElement = document.createElement("img");
//   // //append all our values to ramen menu constant
//   // ramenMenu.append(inputElement);

//   //ALREADY DID THE ABOVE IN OUR ABOVE FUNCTIONS SO WE CAN JUST PASS OBJECT THRU FUNCTION
//   appendToRamenMenu(inputValues);
// }

// // declare the form as a const
// const form = document.querySelector("#new-ramen");
// // create a submit event for the form
// form.addEventListener("submit", submitRamen);

// chris code

// write your code here

// See all ramen images in the div with the id of ramen-menu.
// When the page loads, request the data from the server to get all the ramen objects.
// Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

const ramenMenu = document.getElementById("ramen-menu");
const ramensUrl = "http://localhost:3000/ramens";
const ramenDetail = document.getElementById("ramen-detail");

document.addEventListener("DOMContentLoaded", () => {
  fetch(ramensUrl)
    .then((response) => response.json())
    .then((data) => displayRamens(data));
});

function displayRamens(arrayOfRamens) {
  console.log(arrayOfRamens);
  // data: Array of Objects
  // [
  // {
  //  "id": 1,
  //  "name": "Shoyu Ramen",
  //  "restaurant": "Nonono",
  //  "image": "./assets/ramen/shoyu.jpg",
  //  "rating": 7,
  //  "comment": "Delish. Can't go wrong with a classic!"
  // },
  //     ...
  // ]
  // What do we do here?
  // for each data, create and append image
  arrayOfRamens.forEach((ramen) => {
    appendToRamenMenu(ramen);

    // // create an img element
    // const imgOfRamen = document.createElement('img');
    // imgOfRamen.src = ramen.image

    // // - Click on an image from the `#ramen-menu` div
    // imgOfRamen.addEventListener('click', () => {
    //     featureNewRamenInCenter(ramen)
    // })

    // // append that img element to what?
    // ramenMenu.append(imgOfRamen)
  });
}

function appendToRamenMenu(ramen) {
  // create an img element
  const imgOfRamen = document.createElement("img");
  imgOfRamen.src = ramen.image;

  // - Click on an image from the `#ramen-menu` div
  imgOfRamen.addEventListener("click", () => {
    featureNewRamenInCenter(ramen);
  });

  // append that img element to what?
  ramenMenu.append(imgOfRamen);
}

// grab the information of ramen and display in #ramen-detail
//      i.e., it will "feature" it
function featureNewRamenInCenter(ramen) {
  // see all the info about that ramen displayed inside the `#ramen-detail` div
  const ramenDetail = document.getElementById("ramen-detail");

  // img
  ramenDetail.querySelector(".detail-image").src = ramen.image;

  // name and restaurant
  ramenDetail.querySelector(".name").innerHTML = ramen.name;
  ramenDetail.querySelector(".restaurant").innerHTML = ramen.restaurant;

  // and where it says `insert comment here` and `insert rating here`.
  document.querySelector("#rating-display").innerHTML = ramen.rating;
  document.querySelector("#comment-display").innerHTML = ramen.comment;
}

// CORE DELIVERABLE #3
// Allow a user to submit their own ramen info

// Create a new ramen after submitting the new-ramen form.
// The new ramen should be added to the #ramen-menu div.
// The new ramen does not need to persist; in
// other words, if you refresh the page, it's okay that the new ramen is no
// longer on the page.

function submitRamen(event) {
  event.preventDefault();
  // Associate data to input fields
  // Pull the values of each of the submission form fields
  const newName = document.querySelector("#new-name").value;
  const newRestaurant = document.querySelector("#new-restaurant").value;
  const newImage = document.querySelector("#new-image").value;
  const newRating = document.querySelector("#new-rating").value;
  const newComment = document.querySelector("#new-comment").value;

  const inputValues = {
    name: newName,
    restaurant: newRestaurant,
    image: newImage,
    rating: newRating,
    comment: newComment,
  };

  // const imageElement = document.createElement('img')
  // ramenMenu.append(imageElement)
  appendToRamenMenu(inputValues);
}

const form = document.querySelector("#new-ramen");

form.addEventListener("submit", submitRamen);
