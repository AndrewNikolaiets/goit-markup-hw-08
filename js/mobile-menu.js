(() => {
  const refs = {
    openModalBtn: document.querySelector("[mob-modal-open]"),
    closeModalBtn: document.querySelector("[mob-modal-close]"),
      modal: document.querySelector("[mob-modal]"),
    body: document.querySelector("[body]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
  }
})();