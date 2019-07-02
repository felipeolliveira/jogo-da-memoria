const formfieldWrapper = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");

    $style.textContent = `
      .form-field {
        width: 80%;
        max-width: 800px;
        min-width: 300px;
        margin: 0 auto 29px;
      }`;

    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ($label, $input) => {
    module._style();

    return `
      <fieldset class = "form-field">
        ${$label}
        ${$input}
      </fieldset>
    `;
  };

  return {
    render: module.render,
    handleChangeValidationEmail: module.handleChangeValidationEmail
  };
})();
