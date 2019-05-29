function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  const $style = document.createElement("style");
  $style.textContent = `
    .cards-wrapper {
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

  return $cardsWrapper;
}

export default createCardsWrapper;
