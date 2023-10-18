const signUpRef = document.querySelector(".js-sign-up");
const closeBtnRef = signUpRef.querySelector(".js-close-btn");
const formRef = document.forms.signUp;

const state = {
  isOpenedModal: false,
};

// formRef.email.value;
// formRef.agreeCheck.checked;

const onInput = (event) => {};
const onChangeCheckbox = (event) => {};
const onSubmit = (event) => {
  event.preventDefault();
};

formRef.email.addEventListener("input", onInput);
formRef.agreeCheck.addEventListener("change", onChangeCheckbox);
formRef.addEventListener("submit", onSubmit);

const preventLinks = (clickEvent, targetElement) => {
  clickEvent.preventDefault();
  if (!targetElement || targetElement.tagName === "A") return;

  preventLinks(clickEvent, targetElement.parentNode);
};

const openModal = () => {
  signUpRef.classList.add("sign-up__overlay--animation");
  signUpRef.classList.remove("sign-up__overlay--hidden");

  document.removeEventListener("click", onClickDocument);

  signUpRef.addEventListener("click", onClickOverlay);
  closeBtnRef.addEventListener("click", closeModal);

  state.isOpenedModal = true;
};

const closeModal = (event) => {
  event.stopPropagation();

  signUpRef.classList.remove("sign-up__overlay--animation");
  signUpRef.classList.add("sign-up__overlay--hidden");

  signUpRef.removeEventListener("click", onClickOverlay);
  closeBtnRef.removeEventListener("click", closeModal);

  document.addEventListener("click", onClickDocument);

  state.isOpenedModal = false;
};

const onClickOverlay = (event) => {
  if (event.target !== event.currentTarget || !state.isOpenedModal) return;

  closeModal(event);
};

const onClickDocument = (event) => {
  preventLinks(event, event.target);

  if (state.isOpenedModal) return;

  openModal();
};

document.addEventListener("click", onClickDocument);
