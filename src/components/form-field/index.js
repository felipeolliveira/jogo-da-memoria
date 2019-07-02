const formField = (function() {
  const module = {};

  module._id = 0;

  module._style = () => {
    const $style = document.createElement("style");

    $style.textContent = `
      .form-field-${module._id} {
        width: 300px;
        margin: 0 auto;
        position: relative;
      }

      .form-field-${module._id} > .label{
        font-size: 16px;
        color: #3a4042;
        opacity: 0.5;
      }
      
      .form-field-${module._id} > .input {
        width: 300px;
        display: block;
        font-size: 18px;
        color: #3a4042;
        border-bottom: 1px solid rgba(58, 64, 66, 0.5);
        margin-top: 12px;
        padding-bottom: 12px;
      }

      .form-field-${module._id} > .message {
        position: absolute;
        opacity: 0;
        bottom: -12px;
        right: 0;
        transition: .2s;
        text-transform: lowercase;
        color: red;
      }

      .form-field-${module._id}.-warning > .input {
        border-bottom: 1px solid red;
      }

      .form-field-${module._id}.-warning > .message {
        bottom: -24px;
        opacity: 1;
      }
    `;

    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.handleChangeValidationEmail = $component => {
    const inputUser = $component.value.toLowerCase();

    const expression = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

    const validation = expression.test(inputUser);

    if (inputUser.length >= 1) {
      validation
        ? $component.parentElement.classList.remove("-warning")
        : $component.parentElement.classList.add("-warning");
    } else {
      $component.parentElement.classList.remove("-warning");
    }

    return validation;
  };

  module.render = (typeInput = "text", labelInput = "") => {
    module._id++;
    module._style();

    return `
      <fieldset class = "form-field-${module._id}">
        <label 
          class="label"
          for="${typeInput}-${module._id}"
          >${labelInput}</label>
        <input 
          class="input"
          type="${typeInput}"
          id="${typeInput}-${module._id}"
          placeholder="Insira seu ${labelInput}"
          onChange="formField.handleChangeValidationEmail(this)" />
        <span class="message">\u{26A0} ${labelInput} inválido.</span>
      </fieldset>
    `;
  };

  return {
    render: module.render,
    handleChangeValidationEmail: module.handleChangeValidationEmail
  };
})();
