const startButton = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    $style.textContent = `
      .start-button {
        width: 100px;
        height: 100px;
        background-color: #66ff68;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        color: #3a4042;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        z-index: 50;
      }
      .start-button.-fadeout {
        transition: opacity .5s, transform .5s, z-index .5s .5s;
        transform: translate(-50%, -30%);
        opacity: 0;
        z-index: 0;
      }
    `;

    document.head.insertBefore($style, null);
  };

  module.handleClick = event => {
    const $startButton = event;
    const $overlayLayer = document.querySelector(".overlay-layer");

    $overlayLayer.classList.add("-fadeout");
    $startButton.classList.add("-fadeout");
    // $startButton.classList.add("-fadeout");
    // setTimeout(() => {
    //   $overlayLayer.classList.add("-fadeout");
    // }, 1500);
  };

  module.create = () => {
    module._style();

    return `
      <button class="start-button" onClick="startButton.handleClick(this)">Start</button>
    `;
  };

  return {
    create: module.create,
    handleClick: module.handleClick
  };
})();
