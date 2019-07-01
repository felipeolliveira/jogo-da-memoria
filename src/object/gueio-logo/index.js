const gueioLogo = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");

    $style.textContent = `
      .gueio-logo {
        width: 256px;
        height: 256px;
        padding: 34px 41px;
        border-radius: 50%;
        background-color: #ffffff;
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
