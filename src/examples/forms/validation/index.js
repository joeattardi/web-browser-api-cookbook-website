const form = document.querySelector('#user-form');

function addValidation(element) {
  const errorElement = document.getElementById(`${element.id}-error`);

  element.addEventListener('invalid', () => {  
    element.classList.add('border-danger');
    errorElement.textContent = element.validationMessage;
    element.dataset.shouldValidate = true;
  });

  element.addEventListener('input', () => {
    if (element.dataset.shouldValidate) {
      if (element.checkValidity()) {
        element.classList.remove('border-danger');
        errorElement.textContent = '';
      }
    }
  });

  element.addEventListener('blur', () => {
    // This field has been touched, it will now be validated on subsequent
    // `input` events.
    element.dataset.shouldValidate = true;
  });
}

addValidation(form.elements.username);
addValidation(form.elements.email);

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(form.checkValidity());
});
