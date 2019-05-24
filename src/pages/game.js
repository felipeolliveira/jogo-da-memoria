import createcardsWrapper from "../Object/cards-wrappers/index.js";
import { createCard } from "../components/memory-card/index.js";

const $root = document.querySelector("#root");

const $cardsWrapper = createcardsWrapper();
const $memoryCardBack = createCard(
  "img/icon-js.png",
  "Icone de Javascript",
  "-back"
);
const $memoryCardFront = createCard(
  "img/icon-collabcode.svg",
  "Icone do Gueio, mascote da collabcode",
  ""
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBack);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
