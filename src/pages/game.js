import createcardsWrapper from "../Object/cards-wrappers/index.js";
import { createCard } from "../components/memory-card/index.js";

const $root = document.querySelector("#root");

const $cardsWrapper = createcardsWrapper();
const $gueioCard = createCard(
  "img/icon-collabcode.svg",
  "Icone do Gueio, mascote da collabcode"
);
const $javascriptCard = createCard(
  "img/icon-js.png",
  "Icone da linguagem Javascript",
  "-back"
);
const $cppCard = createCard(
  "img/icon-c.png",
  "Icone da linguagem C++",
  "-back"
);
const $bugCard = createCard(
  "img/icon-bug.png",
  "Icone do Gueio, mascote da collabcode",
  "-back"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $gueioCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $gueioCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $javascriptCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $javascriptCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $cppCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $cppCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $bugCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $bugCard);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
