const form = document.querySelector('#user-form');

/**
 * Adds the necessary event listeners to an element to participate in form validation.
 * It handles setting and clearing error messages depending on the validation state.
 * @param element The input element to validate
 */
function addValidation(element) {
  const errorElement = document.getElementById(`${element.id}-error`);

  /**
   * Fired when the form is validated and the field is not valid.
   * Sets the error message and style, and also sets the shouldValidate flag.
   */
  element.addEventListener('invalid', () => {  
    element.classList.add('border-danger');
    errorElement.textContent = element.validationMessage;
    element.dataset.shouldValidate = true;
  });

  /**
   * Fired when user input occurs in the field. If the shouldValidate flag is set,
   * it will re-check the field's validity and clear the error message if it becomes valid.
   */
  element.addEventListener('input', () => {
    if (element.dataset.shouldValidate) {
      if (element.checkValidity()) {
        element.classList.remove('border-danger');
        errorElement.textContent = '';
      }
    }
  });

  /**
   * Fired when the field loses focus, applying the shouldValidate flag.
   */
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
