const $root = document.querySelector("#root");

const $memoryCard = document.createElement("article");
const $memoryCard2 = document.createElement("article");

const $icon = `<img
  class="icon"
  src="../img/icon-collabcode.svg"
  alt="Icone da COllabCode, mascote Gueio"
/>`;

const $icon2 = `<img
  class="icon"
  src="./img/-icon-js.png"
  alt="Icone de Javascript"
/>`;

$memoryCard.classList.add("memory-card");
$memoryCard2.classList.add("memory-card", "-back");

$memoryCard.insertAdjacentHTML("beforeend", $icon);
$memoryCard2.insertAdjacentHTML("beforeend", $icon2);

$root.insertBefore($memoryCard2, null);
$root.insertBefore($memoryCard, null);
