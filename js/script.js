var mailLink = document.querySelector(".mail-button");
var modalPopup = document.querySelector(".modal-window");
var modalClose = modalPopup.querySelector(".modal-close");
var submit = modalPopup.querySelector(".button-submit");
var nameForm = modalPopup.querySelector(".name-form")
var mailForms = modalPopup.querySelector(".mail-forms");
var emailForm = modalPopup.querySelector(".email-form");
var mailTextarea = modalPopup.querySelector(".mail-textarea");


var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

mailLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");

  if (storage) {
    emailForm.value = storage;
  }

  nameForm.focus();
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.remove("modal-error");
});

mailForms.addEventListener("submit", function (evt) {
  if (!nameForm.value || !emailForm.value || !mailTextarea.value ) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-error");
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", emailForm.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
      modalPopup.classList.remove("modal-error");
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



















