const layerStart = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");

    $style.textContent = `
    .layer-start.-fadeout > .overlay-layer {
      transition: opacity .8s .4s;
      opacity: 0;
    }
    .layer-start.-fadeout > .start-button {
      transition: .5s;
      transform: translate(-50%, -30%);
      opacity: 0;
    }
    `;
    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = component => {
    component.classList.add("-fadeout");
    setTimeout(() => component.remove(), 1500);
  };

  module.render = () => {
    module._style();

    const $overlayLayer = overlayLayer.render();
    const $startButton = startButton.render("Start");

    return `
      <div class="layer-start" onClick="layerStart.handleClick(this)">
        ${$overlayLayer}
        ${$startButton}
      </div>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
