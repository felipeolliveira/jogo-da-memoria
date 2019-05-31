import createGameWrapper from "../Object/game-wrapper/index.js";
import memoryCard from "../components/memory-card/index.js";

const $root = document.querySelector("#root");
const $gameWrapper = createGameWrapper();

const createCard = memoryCard();

const $javascriptCard = createCard({
  srcFront: "img/icon-collabcode.svg",
  altFront: "Icone do Gueio, mascote da collabcode",
  srcBack: "img/icon-js.png",
  altBack: "Icone da linguagem Javascript"
});
const $cppCard = createCard({
  srcFront: "img/icon-collabcode.svg",
  altFront: "Icone do Gueio, mascote da collabcode",
  srcBack: "img/icon-c.png",
  altBack: "Icone da linguagem C++"
});
const $bugCard = createCard({
  srcFront: "img/icon-collabcode.svg",
  altFront: "Icone do Gueio, mascote da collabcode",
  srcBack: "img/icon-bug.png",
  altBack: "Icone do inseto - o bug usado em informática"
});
const $womanCard = createCard({
  srcFront: "img/icon-collabcode.svg",
  altFront: "Icone do Gueio, mascote da collabcode",
  srcBack: "img/icon-woman.png",
  altBack: "Icone de uma mulher usando um laptop"
});

$gameWrapper.insertAdjacentHTML("beforeend", $javascriptCard);
$gameWrapper.insertAdjacentHTML("beforeend", $cppCard);
$gameWrapper.insertAdjacentHTML("beforeend", $bugCard);
$gameWrapper.insertAdjacentHTML("beforeend", $womanCard);

$root.insertAdjacentElement("beforeend", $gameWrapper);
