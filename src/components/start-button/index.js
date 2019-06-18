const startButton = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    $style.textContent = `
      .start-button {
        width: 100px;
        height: 100px;
        background-color: #2ecc71;
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
      }
    `;

    document.head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();

    return `
      <button class="start-button">${content}</button>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
