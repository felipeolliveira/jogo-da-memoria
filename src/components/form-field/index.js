const formField = (function() {
  const module = {};

  module._id = 0;

  module._style = () => {
    const $style = document.createElement("style");

    $style.textContent = `
      .form-field-${module._id} {
        width: 300px;
        margin: 0 auto;
      }

      .form-field-${module._id} > .label{
        font-size: 16px;
        color: #3a4042;
        opacity: 0.5;
      }
      
      .form-field-${module._id} > .input {
        width: 300px;
        display: block;
        font-size: 18px;
        color: #3a4042;
        border-bottom: 1px solid rgba(58, 64, 66, 0.5);
        margin-top: 12px;
        padding-bottom: 12px;
      }
    `;

    document.head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (typeInput = "text", labelInput = "") => {
    module._id++;
    module._style();

    return `
      <fieldset class = "form-field-${module._id}">
        <label 
          class="label"
          for="${typeInput}-${module._id}"
          >${labelInput}
        </label>
        <input 
          class="input"
          type="${typeInput}"
          id="${typeInput}-${module._id}"
          placeholder="Insira seu ${labelInput}"/>
      </fieldset>
    `;
  };

  return {
    render: module.render
  };
})();
