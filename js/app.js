var mailLink = document.querySelector(".mail-button");
var modalPopup = document.querySelector(".modal-window");
var loginClose = modalPopup.querySelector(".modal-close");
var submit = modalPopup.querySelector(".button-submit")

mailLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
});

submit.addEventListener("click", function (evt) {
  evt.preventDefault();
});



















