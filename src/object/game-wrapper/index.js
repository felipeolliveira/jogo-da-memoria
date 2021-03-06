const gameWrapper = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    $style.textContent = `
      .game-wrapper {
        width: 80vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 70px auto 20px;
        padding: 10px 0 10px;
        border-radius: 20px;
        box-shadow: 0 0px 5px rgba(0, 0, 0, 0.15);
      }
  
      .game-wrapper .-alright{
        position: relative;
      }
  
      .game-wrapper .-alright::after {
        content: "\u{2714}";
        font-size: 20px;
        color: green;
        position: absolute;
        top: 5px;
        right: 5px;
      }
  
      @media (max-width: 460px) {
        .game-wrapper {
          width: 100vw;
        }
      }

      @media (min-width: 620px) {
        .game-wrapper {
          width: 520px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          margin: 0;
        }
      }
  
      @media (min-width: 825px) {
        .game-wrapper {
          width: 700px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          margin: 0;
        }
      }

      @media (max-height: 540px) {
        .game-wrapper {
          position: static;
          transform: none;
          margin: 70px auto 20px;
        }
      }
    `;
    document.head.insertAdjacentElement("beforeend", $style);
  };

  module._gameWrapper = "";

  module.create = () => {
    module._style();

    const $gameWrapper = document.createElement("section");
    $gameWrapper.classList.add("game-wrapper");
    $gameWrapper.addEventListener("click", module._handleWrapperEventListener);

    module._gameWrapper = $gameWrapper;

    return $gameWrapper;
  };

  module._isEqualCards = () => {
    return (
      store.iconCardsFaceup[0].getAttribute("src") ===
      store.iconCardsFaceup[1].getAttribute("src")
    );
  };

  module._wrongCombination = () => {
    module._gameWrapper.removeEventListener(
      "click",
      module._handleWrapperEventListener
    );

    setTimeout(() => {
      store.cardsFaceup.forEach(memoryCard => {
        memoryCard.classList.remove("-faceup");
      });

      store.cardsFaceup = [];
      store.iconCardsFaceup = [];
      module._gameWrapper.addEventListener(
        "click",
        module._handleWrapperEventListener
      );
    }, 800);
  };

  module._rightCombination = () => {
    store.cardsFaceup.forEach(card => card.classList.add("-alright"));
    store.cardsFaceup = [];
    store.iconCardsFaceup = [];
    store.score++;
    scoreBar.counterScore();
  };

  module._getOnlyActivesCards = () => {
    store.cardsFaceup = module._gameWrapper.querySelectorAll(
      ".memory-card.-faceup:not(.-alright)"
    );
    store.iconCardsFaceup = module._gameWrapper.querySelectorAll(
      ".memory-card.-faceup:not(.-alright) .-back .icon"
    );
  };

  module._handleWrapperEventListener = () => {
    module._getOnlyActivesCards();

    if (store.cardsFaceup.length === 2) {
      if (module._isEqualCards()) {
        module._rightCombination();
      } else {
        module._wrongCombination();
      }
    }
  };

  return {
    create: module.create
  };
})();
