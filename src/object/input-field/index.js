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
        padding: 12px 0;
      }
    `;

    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (typeInput = "", placeholder = "") => {
    module._style();

    return `
    <input class="input-field" type="${typeInput}" placeholder="${placeholder}" />
    `;
  };

  return {
    render: module.render,
    handleChangeValidationEmail: module.handleChangeValidationEmail
  };
})();
