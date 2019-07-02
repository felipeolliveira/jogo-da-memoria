const formButton = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    $style.textContent = `
      .form-button {
        width: 300px;
        height: 48px;
        background-color: #f25a70;
        color: #ffffff;
        font-size: 14px;
        text-transform: uppercase;
        border-radius: 24px;
      }
    `;

    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (typeButton, content) => {
    module._style();

    return `
      <button class="form-button" type="${typeButton}">${content}</button>
    `;
  };

  return {
    render: module.render
  };
})();
