const scoreBar = (function() {
  const module = {};

  module._style = function() {
    const $style = document.createElement("style");
    $style.textContent = `
    .score-bar {
      width: 200px;
      height: 50px;
      background-color: #3a4042;
      margin-bottom: 20px;
      border-radius: 0 0 10px 10px;
      text-align: center;
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 20;
    }
    .score-bar > .number {
      font-family: "Open Sans", Calibri, Arial;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      line-height: 50px;
    }
    `;
    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.counterScore = () => {
    const $number = document.querySelector(".score-bar > .number");
    $number.textContent = store.score;
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
    create: module.create,
    counterScore: module.counterScore
  };
})();
