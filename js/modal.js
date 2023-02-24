(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      modalCheckbox: document.querySelector("[data-modal-checkbox]"),
      submitModalBtn: document.querySelector("[data-modal-submit]"),
      // subInput: document.querySelector("[data-input-submit]"),
      // submitSublBtn: document.querySelector("[data-sub-submit]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.modalCheckbox.addEventListener("click", () => {
      refs.submitModalBtn.toggleAttribute("disabled")
    })
    // refs.subInput.addEventListener("input", () => {
    //   refs.submitSublBtn.toggleAttribute("disabled")
    // })
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();