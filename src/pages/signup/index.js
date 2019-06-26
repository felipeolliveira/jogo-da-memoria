(function() {
  const $root = document.querySelector("#root");

  const createButton = flatButton.render();

  const $loginButton = createButton({
    content: "Log in"
  });

  const $signUp = createButton({
    content: "Sign up",
    className: "-active"
  });

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUp);
})();
