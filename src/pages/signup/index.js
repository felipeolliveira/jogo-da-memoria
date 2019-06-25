(function() {
  const $root = document.querySelector("#root");

  const createButton = flatButton.render();
  console.log(createButton);

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
