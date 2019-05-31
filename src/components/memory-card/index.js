export default function memoryCard() {
  const $style = document.createElement("style");
  const styles = `
    .memory-card {
      width: 155px;
      height: 155px;
      position: relative;
      background-color: #f25a70;
      border-radius: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      margin-top: 10px;
      transition: .2s;
    }
    .memory-card > .icon {
      width: 100px;
      z-index: 2;
      display:block;
      transition: .2s;
    }
    .memory-card > .icon.-back {
      display: none;
      transition: .2s;
    }
    .memory-card.-faceup {
      background-color: #fff;
    }
    .memory-card.-faceup::before {
      content: "";
      position: absolute;
      width: 94px;
      height: 94px;
      background-color: #d4d4d4;
      border-radius: 100%;
      transform: translateY(10px);
      z-index: 1;
    }
    .memory-card.-faceup > .icon {
      transition: .2s;
      display: none;
    }
    .memory-card.-faceup > .icon.-back {
      display: inline;
      transition: .2s;
    }
  `;
  $style.textContent = styles;
  document.head.insertAdjacentElement("beforeend", $style);

  function handleClickToggleCard() {
    const $target = event.target;

    if ($target.localName === "article") {
      $target.classList.toggle("-faceup");
    } else if ($target.offsetParent.localName === "article") {
      $target.offsetParent.classList.toggle("-faceup");
    }
  }

  window.handleClickToggleCard = handleClickToggleCard;

  return ({ srcFront, altFront, srcBack, altBack }) => `
  <article 
    class="memory-card" 
    OnClick="handleClickToggleCard()"
    >
    <img
      class="icon"
      src= "${srcFront}"
      alt= "${altFront}"
    />
    <img
      class="icon -back"
      src= "${srcBack}"
      alt= "${altBack}"
    />
  </article>
  `;
}
