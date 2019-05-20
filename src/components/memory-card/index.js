function createCardElement(qtd, classModifier, nameIcon) {
  const $wrapCards = document.querySelector(".wrap-cards");

  const $memoryCard = document.createElement("article");
  if (classModifier) $memoryCard.classList.add("memory-card", classModifier);
  else $memoryCard.classList.add("memory-card");

  const $icon = `<img
    class = "icon"
    src="../img/${nameIcon}"}
    alt = ${nameIcon}
  />`;
  $memoryCard.insertAdjacentHTML("beforeend", $icon);

  for (let i = 0; i < (qtd || 1); i++) {
    $wrapCards.insertAdjacentHTML("beforeend", $memoryCard.outerHTML);
  }
}

function createFrontCard(qtd) {
  createCardElement(qtd, "", "icon-collabcode.svg");
}

function createBackCard(qtd, nameIcon) {
  createCardElement(qtd, "-back", nameIcon);
}

export { createFrontCard, createBackCard };
