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
  const $welcomeMessage = welcomeMessage.render("Hello");
  const $welcomeWrapper = welcomeWrapper.render($gueioLogo, $welcomeMessage);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUp);
  $root.insertAdjacentHTML("beforeend", $welcomeWrapper);
})();
