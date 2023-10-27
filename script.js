const login = document.querySelector(".login");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

const openModal = function () {
  modal.style["display"] = "block";
};

const closeModal = function () {
  modal.style["display"] = "none";
};

const outsideClick = function (e) {
  console.log(e);
  if (e.target == modal) {
    closeModal();
  }
};

login.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);
