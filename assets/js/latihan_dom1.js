// Bikin Tombol Ubah Bg

// const parent1 = document.querySelector("body");
// console.log(parent1);

const parent2 = document.querySelector(".container");
// console.log(parent2);

const getButton1 = document.querySelector(".container .ubahWarna");
// console.log(getButton1);

getButton1.addEventListener("click", function() {
  document.body.style.backgroundColor = "deepskyblue";
});

// Bikin Tombol lewat JS
const createNewButton = document.createElement("button");
const textNewButton = document.createTextNode("Tombol Warna Random");

createNewButton.appendChild(textNewButton)
createNewButton.setAttribute("type", "button");
createNewButton.classList.add("btn", "btn-light", "randomWarna");

// parent2.appendChild(createNewButton);
getButton1.after(createNewButton);

// console.log(createNewButton);

function randomWarnaRGB() {
  return Math.floor(Math.random() * 256);
}

function randomWarnaAlpa() {
  return Math.random().toFixed(2);
}

function randomWarnaRGBA() {
  const red = randomWarnaRGB();
  const green = randomWarnaRGB();
  const blue = randomWarnaRGB();
  const alpha = randomWarnaAlpa();

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

// randomWarnaAlpa()
// randomWarnaRGB()
// randomWarnaRGBA()

createNewButton.addEventListener("click", function () {
  const randomWarna = randomWarnaRGBA();
  document.body.style.backgroundColor = randomWarna;
  document.body.style.transition = "all 2s ease-out";
  // console.log(a)
});

const getAllInput = document.querySelectorAll("input");
console.log(getAllInput);

const allBody = document.body;
// console.log(allBody);

for(let a = 0; a < getAllInput.length; a++) {
  getAllInput[a].addEventListener("input", function () {
    const valueRed = getAllInput[0].value;
    const valueGreen = getAllInput[1].value;
    const valueBlue = getAllInput[2].value;
    const valueAlpha = getAllInput[3].value;
    const fullRGBA = `rgb(${valueRed}, ${valueGreen}, ${valueBlue}, ${valueAlpha})`;

    // console.log(valueRed);
    // console.log(valueGreen);
    // console.log(valueBlue);
    console.log(fullRGBA);

    allBody.style.backgroundColor = fullRGBA;
    allBody.style.transition = "all 2s ease-out";
  });
} 

// document.body.addEventListener("mousemove", function (e) {
//   const positionX = Math.floor((e.clientX / window.innerWidth) * 255);
//   const positionY = Math.floor((e.clientY / window.innerHeight) * 255);

//   // console.log(positionX);
//   // console.log(positionY);

//   allBody.style.backgroundColor = `rgb(${positionX}, ${positionY}, 180)`
// });


