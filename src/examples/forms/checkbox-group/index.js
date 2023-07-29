const form = document.querySelector('#options-form');

function validateCheckboxes(form) {
  const data = new FormData(form);

  if (data.getAll('options').length === 0) {
    form.elements.option1.setCustomValidity('Please select at least one option.');
  }
}

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
    errorElement.textContent = element.validationMessage;
    element.dataset.shouldValidate = true;
  });

  /**
   * Fired when user input occurs in the field. If the shouldValidate flag is set,
   * it will re-check the field's validity and clear the error message if it becomes valid.
   */
  element.addEventListener('change', () => {
    if (element.dataset.shouldValidate) {
      if (element.checkValidity()) {
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

addValidation(form.elements.option1);
addValidation(form.elements.option2);
addValidation(form.elements.option3);

form.addEventListener('submit', event => {
  event.preventDefault();
  validateCheckboxes(form);
  console.log(form.checkValidity());
})