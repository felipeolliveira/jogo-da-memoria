const createCard = (classModifier, icon) => `
  <article class="memory-card ${classModifier}">
    <img
      class="icon"
      src="img/${icon}"
      alt= ${icon}
      OnClick="handleClick()"
    />
  </article>
`;

export { createCard };
