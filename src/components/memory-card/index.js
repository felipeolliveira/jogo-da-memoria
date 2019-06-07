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
      position: relative;
    }
    .memory-card > .card {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      justify-content: inherit;
      align-items: inherit;
    }
    .memory-card > .card.-back {
      display: none;
      background: #fff;
    }
    .memory-card > .card.-back::before {
      content: "";
      position: absolute;
      width: 94px;
      height: 94px;
      background-color: #d4d4d4;
      border-radius: 100%;
      transform: translateY(10px);
      z-index: 1;
    }
    .memory-card .icon {
      width: 100px;
      height: 100px;
      z-index: 2;
    }
    .memory-card.-faceup > .card {
      display: none;
    }
    .memory-card.-faceup > .card.-back {
      display: flex;
    }
    .memory-card .card.-faceup > .icon.-back {
      display: inline;
    }
  `;
  $style.textContent = styles;
  document.head.insertAdjacentElement("beforeend", $style);

  store.handleClickFaceup = $component => {
    if (!$component.classList.contains("-faceup")) {
      if (store.cardsFaceup.length < 2) {
        $component.classList.add("-faceup");
      }
    }
  };

  return ({ src, alt }) => `
  <div class="memory-card" onClick="store.handleClickFaceup(this)">
    <article class="card">
      <img
        class="icon"
        src="img/icon-collabcode.svg"
        alt="Icone do Gueio, mascote da collabcode"
      />
    </article>
    <article class="card -back">
      <img
        class="icon"
        src= "${src}"
        alt= "${alt}"
      />
    </article>
  </div>
  `;
}
