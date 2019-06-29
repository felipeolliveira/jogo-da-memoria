const gueioLogo = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");

    $style.textContent = `
      .gueio-logo {
        width: 171px;
        height: 175px;
      }
    `;

    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `<img class="gueio-logo" src="/img/icon-collabcode.svg" />`;
  };

  return {
    render: module.render
  };
})();
