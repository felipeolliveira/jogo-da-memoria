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

  // Creating username input
  const $username = inputField.render("text", "Name Example");
  const $labelUserName = labelField.render("UserName");
  const $userNameWrapper = formfieldWrapper.render($labelUserName, $username);

  // Creating email input
  const $inputEmail = inputField.render("email", "example@email.com");
  const $labelEmail = labelField.render("E-mail");
  const $emailWrapper = formfieldWrapper.render($labelEmail, $inputEmail);

  // Creating password input
  const $inputPassword = inputField.render("password", "••••••••");
  const $labelPassword = labelField.render("Password");
  const $passwordWrapper = formfieldWrapper.render(
    $labelPassword,
    $inputPassword
  );

  // Creating confirm password input
  const $inputConfirmPassword = inputField.render("password", "••••••••");
  const $labelConfirmPassword = labelField.render("Confirm password");
  const $confirmPasswordWrapper = formfieldWrapper.render(
    $labelConfirmPassword,
    $inputConfirmPassword
  );

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUp);
  $root.insertAdjacentHTML("beforeend", $welcomeWrapper);
  $root.insertAdjacentHTML("beforeend", $userNameWrapper);
  $root.insertAdjacentHTML("beforeend", $emailWrapper);
  $root.insertAdjacentHTML("beforeend", $passwordWrapper);
  $root.insertAdjacentHTML("beforeend", $confirmPasswordWrapper);
})();
