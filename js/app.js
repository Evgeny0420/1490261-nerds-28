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





















