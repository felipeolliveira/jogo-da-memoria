export default function crateGameWrapper() {
  const $gameWrapper = document.createElement("section");
  $gameWrapper.classList.add("game-wrapper");

  const $style = document.createElement("style");
  $style.textContent = `
    .game-wrapper {
      width: 375px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 20px auto;
      padding: 10px 0 20px;
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
  `;

  window.$cardsFaceup = [];
  window.$iconCardsFaceup = [];
  window.score = 0;

  $gameWrapper.addEventListener("click", () => {
    $cardsFaceup = $gameWrapper.querySelectorAll(
      ".memory-card.-faceup:not(.-alright)"
    );
    $iconCardsFaceup = $gameWrapper.querySelectorAll(
      ".memory-card.-faceup:not(.-alright) .-back .icon"
    );

    const isEqualCards = () => {
      return (
        $iconCardsFaceup[0].getAttribute("src") ===
        $iconCardsFaceup[1].getAttribute("src")
      );
    };

    const wrongCombination = () => {
      console.log("Combinações erradas. Tente novamente");
      setTimeout(() => {
        $cardsFaceup.forEach(memoryCard => {
          memoryCard.classList.remove("-faceup");
        });
        $cardsFaceup = [];
        $iconCardsFaceup = [];
      }, 800);
    };

    const rightCombination = () => {
      console.log("Combinações corretas! Continue...");
      $cardsFaceup.forEach(card => card.classList.add("-alright"));
      $cardsFaceup = [];
      $iconCardsFaceup = [];
      score++;
      console.log(score);
    };

    if ($cardsFaceup.length === 2) {
      if (isEqualCards()) {
        rightCombination();
      } else {
        wrongCombination();
      }
    }
  });

  document.head.insertAdjacentElement("beforeend", $style);

  return $gameWrapper;
}
