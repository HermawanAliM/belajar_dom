// DOM Manipulation :

// DOM Manipulation Method 
// 1. Manipulasi Element
// 2. Manipulasi Node 

// 1. Manipulasi Element : Memanipulasi elemen yang udah ditangkap dengan melakukan aksi seperti diubah isi dari paraf atau mengubah warnanya
// * Beberapa contoh method untuk memanipulasi elemen :

// 1.1. element.innerHTML -> Bisa berisikan teks biasa dan juga kode html
const judul = document.getElementById("judul");

judul.innerHTML = "<em>Halo, Hermawan Ali M</em>"

const getSectionA = document.querySelector("section#a");
// getSectionA.innerHTML = "Halo, Ali";

// 1.2. element.style.<diikuti properti css yang diinginkan> -> Fungsi untuk memberikan style kepada elemen
judul.style.color = "salmon";
getSectionA.style.backgroundColor = "salmon";

// 1.3. element.setAttribute() -> Fungsi menambahkan attribut baru pada elemen
// ! setAttribute() bersifat menimpa attribut yang sebelumnya 
judul.setAttribute("name", "Hermawan");

// 1.4 element.getAttribute() -> Fungsi mengetahui isi dari suatu attribut
const getAttrAnchor = document.querySelector("section#a a");
getAttrAnchor.getAttribute("href");

// 1.5 element.removeAttribute() -> Fungsi menghapus attribut dari suatu attribut
judul.removeAttribute("name");
// getAttrAnchor.removeAttribute("href");

// 1.4. element.classList -> Fungsi untuk mengelola attribut class
const getElemenP1 = document.querySelector("section#a .p1")
const getElemenP2 = document.querySelector("section#a .p2")

// element.classList.add() -> Untuk menambahkan class pada elemen
getElemenP2.classList.add("ninu")

// element.classList.remove() -> Untuk menghapus class pada elemen
getElemenP2.classList.remove("ninu")


// element.classList.toggle() -> Untuk memberikan class tertentu pada elemen jika tidak mempunyai dan menghilangkan class tersebut jika elemen tersebut mempunyainya
getElemenP2.classList.toggle("ninu"); // -> mengembalikan nilai boolean berupa true jika tidak mempunyai class tersebut dan false jika sudah mempunyai class

// element.classList.item() -> Untuk mengetahui nama class tertentu pada elemen
getElemenP1.classList.add("satu");
getElemenP1.classList.add("dua");
getElemenP1.classList.add("tiga");

getElemenP1.classList.item(2); // -> menggunakan angka dan dimulai dari nol untuk mengetahui class yang diinginkan

// element.classList.contains() -> Untuk mengecek pada elemen apa memiliki class tertentu
getElemenP1.classList.contains("satu");// -> mengembalikan nilai boolean true jika class ada dan false jika tidak ada

// element.classList.replace() -> Untuk menimpa atau mengganti class yang sudah ada menjadi class baru 
getElemenP1.classList.replace("satu", "sembilan");

// 2. Manipulasi Node : Memanipulasi elemen yang udah ditangkap dengan melakukan aksi seperti menyisipkan paraf baru atau menghilangkan elemen

// 2.1 documnet.createElement() -> Untuk membuat elemen baru
const createParagraf = document.createElement("p");

// 2.2 document.createTextNode() -> Untuk membuat teks pada elemen
const paragrafText = document.createTextNode("Ini paragraf baru dengan JS");

// 2.3 node.appendChild() -> Untuk menambahkan elemen pada bagian akhir elemen parent
createParagraf.appendChild(paragrafText);
getSectionA.appendChild(createParagraf);

const createLi = document.createElement("li");
const createTextLi = document.createTextNode("item baru dengan JS");
createLi.appendChild(createTextLi);

const ulParent = document.querySelector("section#b ul");
const liChild = ulParent.querySelector("li:nth-child(2)");

// 2.4 node.insertBefore() -> Untuk menambahkan elemen pada bagian yang diinginkan
ulParent.insertBefore(createLi, liChild);

const delLink = document.getElementsByTagName("a")[0];

// 2.5 parentNode.removeChild() -> Untuk menghapus atau menghilangkan elemen
getSectionA.removeChild(delLink);

const getSectionB = document.getElementById("b");
const paragraf4 = getSectionB.querySelector("p");

const createH2Baru = document.createElement("h2");
const createTextH2Baru = document.createTextNode("Heading 2 dengan JS");
createH2Baru.appendChild(createTextH2Baru);

// 2.6 parentNode.replaceChild() -> Untuk mengganti elemen
getSectionB.replaceChild(createH2Baru, paragraf4);

createParagraf.style.backgroundColor = "orchid";
createLi.style.backgroundColor = "orchid";
createH2Baru.style.backgroundColor = "orchid";

