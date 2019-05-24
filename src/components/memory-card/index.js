const createCard = (src, alt, ...classNames) => `
  <article class="memory-card ${classNames}">
    <img
      class="icon"
      src= ${src}
      alt= ${alt}
      OnClick="handleClick()"
    />
  </article>
`;

export { createCard };
