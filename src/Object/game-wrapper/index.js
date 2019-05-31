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
  `;

  document.head.insertAdjacentElement("beforeend", $style);

  return $gameWrapper;
}
