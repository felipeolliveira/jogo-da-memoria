const layerStart = (function() {
  const module = {};

  module.handleClick = $component => {
    if (event.target.classList.contains("start-button")) {
      const listChilds = $component.children;

      for (const child of listChilds) {
        child.classList.add("-fadeout");
        console.log(child);
      }

      setTimeout(() => $component.remove(), 1200);
    }
  };

  module.render = () => {
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
