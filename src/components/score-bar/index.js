const scoreBar = (function() {
  const module = {};

  module._style = function() {
    const $style = document.createElement("style");
    $style.textContent = `
    .score-bar {
      width: 200px;
      height: 50px;
      margin: 0 auto;
      background-color: #f25a70;
      margin-bottom: 20px;
      border-radius: 0 0 10px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .score-bar > .number {
      font-family: "Open Sans", Calibri, Arial;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
    `;
    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.create = () => {
    module._style();

    return `
    <header class="score-bar">
      <span class="number">0</span>
    </header>
  `;
  };

  return {
    create: module.create
  };
})();
