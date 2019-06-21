const layerStart = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    $style.textContent = `
      .layer-start {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 50;
      }
    `;
    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = $component => {
    if (event.target.classList.contains("start-button")) {
      const $children = $component.querySelectorAll("*");
      $children.forEach(child => child.classList.add("-fadeout"));
    }
  };

  module.handleTransitionEnd = $component => {
    if (event.target.classList.contains("overlay-layer")) $component.remove();
  };

  module.render = () => {
    module._style();

    const $overlayLayer = overlayLayer.render();
    const $startButton = startButton.render("Start", "#2ecc71");

    return `
      <div class="layer-start" onClick="layerStart.handleClick(this)" onTransitionend="layerStart.handleTransitionEnd(this)">
      ${$startButton}
      ${$overlayLayer}
      </div>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
    handleTransitionEnd: module.handleTransitionEnd
  };
})();
