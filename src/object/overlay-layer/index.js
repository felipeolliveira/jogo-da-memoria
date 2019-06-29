const overlayLayer = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    $style.textContent = `
      .overlay-layer {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.70);
        transform-origin: bottom;
        transition: .3s .25s;
      }
      .overlay-layer.-fadeout {
        transform: scaleY(0);
        opacity: 0;
      }
    `;
    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `<div class="overlay-layer"></div>`;
  };

  return {
    render: module.render
  };
})();
