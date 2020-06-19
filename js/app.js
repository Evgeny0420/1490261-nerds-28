let mailLink = document.querySelector(".mail-button");
let modalPopup = document.querySelector(".modal-window");
var loginClose = modalPopup.querySelector(".modal-close");

mailLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
});

















