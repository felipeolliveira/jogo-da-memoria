const welcomeMessage = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");

    $style.textContent = `
      .welcome-message {
        font-weight: bold;
        font-size: 24px;
        color: #f25a70;
      }
    `;

    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (content = "") => {
    module._style();

    return `<h1 class="welcome-message">${content}</h1>`;
  };

  return {
    render: module.render
  };
})();
