const $root = document.querySelector("#root");

const $memoryCard = document.createElement("article");
const $memoryCardBack = document.createElement("article");

const $iconCollab = `<img
  class="icon"
  src="../img/icon-collabcode.svg"
  alt="Icone da COllabCode, mascote Gueio"
/>`;

const $iconJS = `<img
  class="icon"
  src="./img/-icon-js.png"
  alt="Icone de Javascript"
/>`;

$memoryCard.classList.add("memory-card");
$memoryCardBack.classList.add("memory-card", "-back");

$memoryCard.insertAdjacentHTML("beforeend", $iconCollab);
$memoryCardBack.insertAdjacentHTML("beforeend", $iconJS);

$root.insertBefore($memoryCardBack, null);
$root.insertBefore($memoryCard, null);
