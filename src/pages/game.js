import createcardsWrapper from "../Object/cards-wrappers/index.js";
import {
  createBackCard,
  createFrontCard
} from "../components/memory-card/index.js";

const $root = document.querySelector("#root");

const $cardsWrapper = createcardsWrapper();
const $memoryCardBack = createBackCard("icon-js.png");
const $memoryCardFront = createFrontCard();

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
