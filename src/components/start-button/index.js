const startButton = (function() {
  const module = {};

  module._style = bgColor => {
    const $style = document.createElement("style");
    $style.textContent = `
      .start-button {
        width: 100px;
        height: 100px;
        background-color: ${bgColor};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        z-index: 50;
        transform-origin: center;
        transition: .4s cubic-bezier(.68,-0.55,.27,1.55);
      }
      .start-button:hover {
        transform: translate(-50%, -50%) scale(1.2);
      }
      .start-button.-fadeout {
        transform: translate(-50%, 50%) scale(0);
        opacity: 0;
      }
    `;

    document.head.insertBefore($style, null);
  };

  module.render = (content, bgColor) => {
    module._style(bgColor);

    return `
      <button class="start-button">${content}</button>
    `;
  };

  return {
    render: module.render
  };
})();
