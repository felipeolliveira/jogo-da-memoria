(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render({
    content: "Log in"
  });

  const $signUp = flatButton.render({
    content: "Sign up",
    active: true
  });

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUp);
})();
