const createCard = (src, alt, classModifier) => `
  <article class="memory-card ${classModifier}">
    <img
      class="icon"
      src= ${src}
      alt= ${alt}
      OnClick="handleClick()"
    />
  </article>
`;

export { createCard };
