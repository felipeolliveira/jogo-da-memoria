const welcomeWrapper = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");

    $style.textContent = `
      .welcome-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateY(-74px);
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
