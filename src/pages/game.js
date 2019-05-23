import createcardsWrapper from "../Object/cards-wrappers/index.js";
import { createCard } from "../components/memory-card/index.js";

const $root = document.querySelector("#root");

const $cardsWrapper = createcardsWrapper();
const $memoryCardBack = createCard("-back", "icon-js.png");
const $memoryCardFront = createCard("", "icon-collabcode.svg");

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
