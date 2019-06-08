const createGlobalVariables = () => {
  window.store = {
    handleClickFaceup: 0,
    cardsFaceup: [],
    iconCardsFaceup: [],
    score: 0
  };
};

export default createGlobalVariables;
