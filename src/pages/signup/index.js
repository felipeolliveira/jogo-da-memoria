(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render({
    content: "Log in"
  });

  const $signUp = flatButton.render({
    content: "Sign up",
    active: true
  });

  const $gueioLogo = gueioLogo.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUp);
  $root.insertAdjacentHTML("beforeend", $gueioLogo);
})();
