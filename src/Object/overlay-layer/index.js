const overlayLayer = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    $style.textContent = `
      .overlay-layer {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.95);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 40;
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
