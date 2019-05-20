const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $icon = `<img
    class="icon"
    src="../img/icon-collabcode.svg"
    alt="Icone da COllabCode, mascote Gueio"
/>`;

$root.insertBefore($memoryCard, null);

$memoryCard.classList.add("memory-card");
$memoryCard.insertAdjacentHTML("beforeend", $icon);
