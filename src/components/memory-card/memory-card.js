function createCardElement(number, classModifier, nameIcon) {
  const $root = document.querySelector("#root");

  const $memoryCard = document.createElement("article");
  if (classModifier) $memoryCard.classList.add("memory-card", classModifier);
  else $memoryCard.classList.add("memory-card");

  const $icon = `<img
    class = "icon"
    src="../img/${nameIcon || "icon-collabcode.svg"} "}
    alt = ${nameIcon || "icon-collabcode.svg"}
  />`;
  $memoryCard.insertAdjacentHTML("beforeend", $icon);

  for (let i = 0; i < (number || 1); i++) {
    $root.insertAdjacentHTML("beforeend", $memoryCard.outerHTML);
  }
}

export default createCardElement;
