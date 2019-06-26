const flatButton = (function() {
  const module = {};

  module._id = 0;

  module._style = active => {
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button-${module._id} {
        width: 50%;
        min-width: 150px;
        height: 176px;
        background-color: ${active ? "#f25a70" : "#eae6da"};
        color: ${active ? "#ffffff" : "#fffcee"};
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
    `;

    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({ content = "", active = false }) => {
    module._id++;
    module._style(active);

    return `<button class="flat-button-${module._id}">${content}</button>`;
  };

  return {
    render: module.render
  };
})();
