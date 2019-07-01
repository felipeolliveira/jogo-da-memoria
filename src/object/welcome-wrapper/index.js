const welcomeWrapper = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");

    $style.textContent = `
      .welcome-wrapper {
        text-align: center;
        transform: translateY(-25%);
      }
    `;

    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (...children) => {
    module._style();

    return `<div class="welcome-wrapper">
      ${children.join("")}
    </div>`;
  };

  return {
    render: module.render
  };
})();
