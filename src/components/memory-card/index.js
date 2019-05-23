const createFrontCard = () => `
  <article class="memory-card">
    <img
      class="icon"
      src="img/icon-collabcode.svg"
      alt="icone da collabcode - Gueio"
      OnClick="handleClick()"
    />
  </article>
`;

const createBackCard = icon => `
  <article class="memory-card -back">
    <img
      class="icon"
      src="img/${icon}"
      alt= ${icon}
      OnClick="handleClick()"
    />
  </article>
`;

export { createFrontCard, createBackCard };
