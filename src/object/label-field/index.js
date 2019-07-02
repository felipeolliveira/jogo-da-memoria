const labelField = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");

    $style.textContent = `
      .label-field {
        font-size: 16px;
        color: #3a4042;
        opacity: 0.5;
      }
    `;

    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.render = content => {
    module._style();

    return `
      <label class="label-field">${content}</label>
    `;
  };

  return {
    render: module.render
  };
})();
