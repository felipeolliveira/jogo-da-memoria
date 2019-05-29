const createCard = ({ className, src, alt }) => `
  <article class="memory-card ${className}">
    <img
      class="icon"
      src= ${src}
      alt= ${alt}
      OnClick="handleClick()"
    />
  </article>
`;

export { createCard };
