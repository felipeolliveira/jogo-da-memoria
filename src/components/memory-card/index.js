function createFrontCard() {
  const $memoryC = `
  <article class="memory-card">
    <img
      class="icon"
      src="img/icon-collabcode.svg"
      alt="icone da collabcode - Gueio"
      OnClick="handleClick()"
    />
  </article>
  `;

  return $memoryC;
}

function createBackCard(icon) {
  const $memoryC = `
  <article class="memory-card -back">
    <img
      class="icon"
      src="img/${icon}"
      alt= ${icon}
      OnClick="handleClick()"
    />
  </article>
  `;
  return $memoryC;
}

export { createFrontCard, createBackCard };
