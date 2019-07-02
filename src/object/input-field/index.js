const inputField = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");

    $style.textContent = `
      .input-field {
        width: 100%;
        display: block;
        font-size: 18px;
        color: #3a4042;
        border-bottom: 1px solid rgba(58, 64, 66, 0.5);
        margin-top: 12px;
        padding-bottom: 12px;
        position: relative;
      }
      .input-field.-warning {
        border-bottom: 1px solid red;
      }
    `;

    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.handleChangeValidationEmail = $component => {
    const inputUser = $component.value.toLowerCase();

    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validation = expression.test(inputUser);

    if (inputUser.length >= 1) {
      validation
        ? $component.classList.remove("-warning")
        : $component.classList.add("-warning");
    } else {
      $component.classList.remove("-warning");
    }

    return validation;
  };

  module.render = () => {
    module._style();

    return `
    <input class="input-field" type="email" id="email" placeholder="Insira seu email"
      onChange="inputField.handleChangeValidationEmail(this)" />
    `;
  };

  return {
    render: module.render,
    handleChangeValidationEmail: module.handleChangeValidationEmail
  };
})();
