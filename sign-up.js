const formRef = document.forms.signUp;

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
