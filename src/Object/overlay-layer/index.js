const overlayLayer = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    $style.textContent = `
      .overlay-layer {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.95);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 40;
      }
      .overlay-layer.-fadeout {
        transition: opacity .8s .4s;
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
