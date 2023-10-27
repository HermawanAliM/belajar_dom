/**
 * DOM Events 
 * 
 * Events pada JS merepresentasikan sebuah kejadian yang akan terjadi di dalam DOM.
 * Events tersebut bisa dilakukan oleh pengguna (mouse event, keyboard event) ataupun oleh API secara otomatis.
 * 
 * Gimana cara menerapkan events pada JS? Pada JS adalah istilah yaitu "Mendengarkan" dengan maksud apakah pada halaman web tersebut ada kejadian sesuatu
 * Ada 2 cara untuk mendengarkan events pada JS : 
 * 1. Menggunakan event-handler -> inline html attribut, element method (method lama) -> Tidak disarankan untuk digunakan karena mencampur HTML dan JS
 * 2. Menggunakan addEventListener() (method baru)
 * 
 * Perbedaan antar kedua method ini ialah dalam menangani sebuah kejadian untuk event-handler hanya 1 kejadian saja sebaliknya untuk addEventListerner bisa menangani banyak kejadian
 */

// Contoh event-handler
const p1 = document.querySelector(".p1");

function ubahWarnaBgParagraf() {
  p1.style.backgroundColor = "plum";
}

const p4 = document.querySelector("section#b p");

p4.addEventListener("click", function () {
  const getUl = document.querySelector("section#b ul");
  const createLiNew = document.createElement("li");
  const addTextLi = document.createTextNode("Ini isi teks baru");

  createLiNew.appendChild(addTextLi);
  getUl.appendChild(createLiNew);
});