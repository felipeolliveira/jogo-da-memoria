const createCard = ({ className, src, alt }) => {
  const $article = `
  <article class="memory-card ${className === undefined ? "" : className}">
    <img
      class="icon"
      src= ${src}
      alt= ${alt}
      OnClick="handleClick()"
    />
  </article>
`;

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
    }
    
    .memory-card > .icon {
      width: 100px;
      z-index: 2;
    }
    
    .memory-card.-back {
      background-color: #fff;
    }
    
    .memory-card.-back::before {
      content: "";
      position: absolute;
      width: 94px;
      height: 94px;
      background-color: #d4d4d4;
      border-radius: 100%;
      transform: translateY(10px);
      z-index: 1;
    }
  `;

  const $style = document.querySelector("head > style");
  if (!$style.innerHTML.includes(styles)) {
    $style.textContent += styles;
  }

  return $article;
};

export default createCard;
