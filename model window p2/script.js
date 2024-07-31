// not complete yet

"Use strict";
// In this project we will build UI component

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay hidden");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

const openModal = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
/*there are 3 types of key events
1. keyup
it happens when we lift our finger off the key 
2. keypress
it is fired continously as we keep our finger on a certain key
3. keydown
it is fired as soon as we just press down the key*/
document.addEventListener('keydown', function (e) {
  console.log(e);
  if(e.key === 'Escape')console.log('escape was pressed');
});
