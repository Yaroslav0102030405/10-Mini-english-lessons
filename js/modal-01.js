const openModal = document.querySelector(".box-1");
const closeModal = document.querySelector(".closeModal");
const backdrop = document.querySelector(".backdrop");

openModal.addEventListener("click", onOpenModal);
closeModal.addEventListener("click", onCloseModal);
backdrop.addEventListener("click", onBackdrop);
function onOpenModal() {
  backdrop.classList.remove("is-hidden");
}

function onCloseModal() {
  backdrop.classList.add("is-hidden");
}

function onBackdrop(e) {
  if (e.currentTarget === e.target) {
    backdrop.classList.add("is-hidden");
  }
}
