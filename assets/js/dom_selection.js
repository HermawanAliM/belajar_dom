// DOM Selection : Digunakan untuk memanipulasi elemen atau struktur pada HTML menggunakan JS
 
// DOM Selection Method : 
// 1. getElementById() -> Menghasilkan element
// Digunakan untuk memanipulasi elemen HTML yang memiliki id 
const judul = document.getElementById("judul");

console.log(judul);
// judul.style.color = "#A084E8";

// 2. getElementsByTagName() -> Menghasilkan HTMLCollection
// Digunakan untuk memanipulasi elemen HTML berupa tag HTML
// ! Jika elemen yang dikembalikan berupa HTML Collection wajib menggunakan index 
const getPId = document.getElementsByTagName("p");

// for(let a = 0; a < getPId.length; a++) {
//   if (a % 2 == 0) {
//     getPId[a].style.backgroundColor = "salmon";
//   } else {
//     getPId[a].style.backgroundColor = "lightblue";
//   }
// }

// 3. getElementsByClassName() -> Menghasilkan HTMLCollection
// Digunakan untuk memanipulasi elemen HTML yang memiliki class
const getClassP1 = document.getElementsByClassName("p1")[0];

// getClassP1.innerHTML = "Teks ini diubah melalui JS";

// 4. querySelector() -> Menghasilkan element
// * Gunakan querySelector dan querySelectorAll jika tidak diperbolehkan mengubah struktur dari HTML tersebut
const getPId4 = document.querySelector("#b p");
const getLi1 = document.querySelector("section#b ul li:nth-child(1)");

// getPId4.style.fontWeight = "800";
// getLi1.style.backgroundColor = "#96B6C5"

// 5. querySelectorAll() -> Menghasilkan NodeList
// ! Sama hal seperti cara 2 dan 3 untuk queryselectorAll juga menggunakan index
const getPId1 = document.querySelectorAll("p");

// getPId1[0].style.fontSize = "1rem";
// getPId1[0].style.fontWeight = "800";

// Memperkecil Scope Node Root 
const getSectionA = document.getElementById("a");
const getIdAnchor = getSectionA.querySelector("a");

// console.log(getSectionA);
// console.log(getIdAnchor)

// getIdAnchor.style.backgroundColor = "#6F61C0";
// getIdAnchor.style.fontSize = "2.1rem";
