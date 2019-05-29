const createCard = card => `
  <article class="memory-card ${card.className}">
    <img
      class="icon"
      src= ${card.src}
      alt= ${card.alt}
      OnClick="handleClick()"
    />
  </article>
`;

export { createCard };
