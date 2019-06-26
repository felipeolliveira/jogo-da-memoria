const flatButton = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button {
        width: 50%;
        min-width: 150px;
        height: 176px;
        background-color: #eae6da;
        color: #ffffff;
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
      }
      .flat-button.-active {
        background-color: #f25a70;
      }
    `;

    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();

    return ({ content = "Vazio", className = "" }) =>
      `<button class="flat-button ${className}">${content}</button>`;
  };

  return {
    render: module.render
  };
})();
