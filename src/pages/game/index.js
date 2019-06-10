const $root = document.querySelector("#root");

const $gameWrapper = gameWrapper.create();
const $scoreBar = scoreBar.create();

const createCard = memoryCard.create();

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

const newRandomCards = () => {
  const selectCards = [$javascriptCard, $cppCard, $bugCard, $womanCard];

  const duplicateCards = () => {
    const cards = [];
    for (let i = 0; i < 2; i++) {
      cards.push(...selectCards);
    }
    return cards;
  };

  const cardsShuffler = () => {
    let cards = duplicateCards();
    let finalCards = [];

    while (cards.length) {
      const randomNumber = Math.floor(Math.random() * cards.length);
      const randomCard = cards[randomNumber];
      const indexCard = cards.indexOf(randomCard);

      if (indexCard > -1) {
        finalCards.push(randomCard);
        cards.splice(indexCard, 1);
      }
    }

    return finalCards;
  };

  const newCards = cardsShuffler();
  newCards.forEach(card => {
    $gameWrapper.insertAdjacentHTML("beforeend", card);
  });
};

newRandomCards();

$root.insertAdjacentHTML("afterbegin", $scoreBar);
$root.insertAdjacentElement("beforeend", $gameWrapper);
