(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render({
    content: "Log in"
  });

  const $signUp = flatButton.render({
    content: "Sign up",
    active: true
  });

  // Creanting logo and welcome message
  const $gueioLogo = gueioLogo.render();
  const $welcomeMessage = welcomeMessage.render("Hello");
  const $welcomeWrapper = welcomeWrapper.render($gueioLogo, $welcomeMessage);

  // Creating Email input
  const $inputEmail = inputField.render();
  const $labelEmail = labelField.render("E-mail");
  const $emailWrapper = formfieldWrapper.render($labelEmail, $inputEmail);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUp);
  $root.insertAdjacentHTML("beforeend", $welcomeWrapper);
  $root.insertAdjacentHTML("beforeend", $emailWrapper);
})();
