var mailLink = document.querySelector(".mail-button");
var modalPopup = document.querySelector(".modal-window");
var loginClose = modalPopup.querySelector(".modal-close");
var submit = modalPopup.querySelector(".button-submit");




mailLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");
  nameform.focus();
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
});

submit.addEventListener("click", function (evt) {
  evt.preventDefault();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
    }
  }
});


var slidefirst = document.querySelector(".slide-first");
var slidesecond = document.querySelector(".slide-second");
var slidethird = document.querySelector(".slide-third");
var firstbutton = document.querySelector(".first-button");
var secondbutton = document.querySelector(".second-button");
var thirdbutton = document.querySelector(".third-button");

secondbutton.addEventListener("click", function () {
  slidesecond.classList.add("slide-current");
  secondbutton.classList.add("current");
  firstbutton.classList.remove("current");
  thirdbutton.classList.remove("current");
  slidefirst.classList.remove("slide-current");
  slidethird.classList.remove("slide-current");
});

firstbutton.addEventListener("click", function () {
  slidefirst.classList.add("slide-current");
  firstbutton.classList.add("current");
  secondbutton.classList.remove("current");
  thirdbutton.classList.remove("current");
  slidesecond.classList.remove("slide-current");
  slidethird.classList.remove("slide-current");
});

thirdbutton.addEventListener("click", function () {
  slidethird.classList.add("slide-current");
  thirdbutton.classList.add("current");
  secondbutton.classList.remove("current");
  firstbutton.classList.remove("current");
  slidefirst.classList.remove("slide-current");
  slidesecond.classList.remove("slide-current");
});



















