import createGameWrapper from "../Object/game-wrapper/index.js";
import memoryCard from "../components/memory-card/index.js";

const $root = document.querySelector("#root");
const $gameWrapper = createGameWrapper();

const createCard = memoryCard();

const $javascriptCard = createCard({
  src: "img/icon-js.png",
  alt: "Icone da linguagem Javascript"
});
const $cppCard = createCard({
  src: "img/icon-c.png",
  alt: "Icone da linguagem C++"
});
const $bugCard = createCard({
  src: "img/icon-bug.png",
  alt: "Icone do inseto - o bug usado em informática"
});
const $womanCard = createCard({
  src: "img/icon-woman.png",
  alt: "Icone de uma mulher usando um laptop"
});

$gameWrapper.insertAdjacentHTML("beforeend", $javascriptCard);
$gameWrapper.insertAdjacentHTML("beforeend", $cppCard);
$gameWrapper.insertAdjacentHTML("beforeend", $bugCard);
$gameWrapper.insertAdjacentHTML("beforeend", $womanCard);

$root.insertAdjacentElement("beforeend", $gameWrapper);
