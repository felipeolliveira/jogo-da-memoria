const layerStart = (function() {
  const module = {};

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
    const $overlayLayer = overlayLayer.render();
    const $startButton = startButton.render("Start", "#2ecc71");

    return `
      <div class="layer-start" onClick="layerStart.handleClick(this)" onTransitionend="layerStart.handleTransitionEnd(this)">
        ${$overlayLayer}
        ${$startButton}
      </div>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
    handleTransitionEnd: module.handleTransitionEnd
  };
})();
