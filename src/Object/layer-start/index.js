const layerStart = (function() {
  const module = {};

  module.handleClick = $component => {
    const $startButton = $component.querySelector(".start-button");
    const $overlayLayer = $component.querySelector(".overlay-layer");

    if (event.target === $startButton) {
      $startButton.classList.add("-fadeout");
      setTimeout(() => {
        $overlayLayer.classList.add("-fadeout");
      }, 200);
      setTimeout(() => {
        $component.remove();
      }, 400);
    }

    // if (event.target.classList.contains("start-button")) {
    //   const listChilds = $component.children;

    //   for (const child of listChilds) {
    //     child.classList.add("-fadeout");
    //     console.log(child);
    //   }

    //   setTimeout(() => $component.remove(), 1200);
    // }
  };

  module.render = () => {
    const $overlayLayer = overlayLayer.render();
    const $startButton = startButton.render("Start", "#2ecc71");

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
