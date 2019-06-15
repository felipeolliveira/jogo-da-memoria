const startButton = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    $style.textContent = `
      .start-button {
        width: 80px;
        height: 80px;
        background-color: #ffd166;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        color: #3a4042;
        text-transform: uppercase;
        font-weight: bold;
      }
    `;

    document.head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();

    return `
      <button class="start-button">Start</button>
    `;
  };

  return {
    create: module.create
  };
})();
