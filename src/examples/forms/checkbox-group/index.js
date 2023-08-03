const form = document.querySelector('#options-form');

function validateCheckboxes(form) {
  const data = new FormData(form);

  // To avoid setting the validation error on multiple elements,
  // choose the first checkbox and use that to hold the group's validation
  // message.
  const element = form.elements.option1;

  if (data.getAll('options').length === 0) {
    element.setCustomValidity('Please select at least one option.');
  } else {
    element.setCustomValidity('');
  }
}

/**
 * Adds the necessary event listeners to an element to participate in form validation.
 * It handles setting and clearing error messages depending on the validation state.
 * @param element The input element to validate
 */
function addValidation(element) {
  const errorElement = document.getElementById('checkbox-error');

  /**
   * Fired when the form is validated and the field is not valid.
   * Sets the error message and style.
   */
  element.addEventListener('invalid', () => {
    errorElement.textContent = element.validationMessage;
  });

  /**
   * Fired when user input occurs in the field.
   * It will re-check the field's validity and clear the error message if it becomes valid.
   */
  element.addEventListener('change', () => {
    validateCheckboxes(form);
    if (form.elements.option1.checkValidity()) {
      errorElement.textContent = '';
    }
  });
}

addValidation(form.elements.option1);
addValidation(form.elements.option2);
addValidation(form.elements.option3);

form.addEventListener('submit', event => {
  event.preventDefault();
  validateCheckboxes(form);
  console.log(form.checkValidity());
});
