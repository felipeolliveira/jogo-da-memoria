import createcardsWrapper from "../Object/cards-wrappers/index.js";
import createCard from "../components/memory-card/index.js";

const $root = document.querySelector("#root");

const $cardsWrapper = createcardsWrapper();
const $gueioCard = createCard({
  src: "img/icon-collabcode.svg",
  alt: "Icone do Gueio, mascote da collabcode"
});
const $javascriptCard = createCard({
  src: "img/icon-js.png",
  alt: "Icone da linguagem Javascript",
  className: "-back"
});
const $cppCard = createCard({
  src: "img/icon-c.png",
  alt: "Icone da linguagem C++",
  className: "-back"
});
const $bugCard = createCard({
  src: "img/icon-bug.png",
  alt: "Icone do Gueio, mascote da collabcode",
  className: "-back"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $gueioCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $gueioCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $javascriptCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $javascriptCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $cppCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $cppCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $bugCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $bugCard);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
