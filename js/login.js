$(document).ready(function () {
  const passwordShowed = $("#password-showed");
  const passwordUnshowed = $("#password-unshowed");
  const passwordField = $("#password");
  const checkFormInput = function () {
    console.log("ads");
    const DOMNodes = {
      password: $("#password"),
      codename: $("#codename"),
    };
    var flag = true;
    if (DOMNodes.codename.val().length === 0) {
      DOMNodes.codename
        .addClass("invalid")
        .next()
        .next()
        .attr("data-error", "Codename cannot be empty");
      flag = false;
    }
    if (DOMNodes.password.val().length === 0) {
      DOMNodes.password
        .addClass("invalid")
        .next()
        .next()
        .next()
        .next()
        .attr("data-error", "Password cannot be empty");
      flag = false;
    }
    return flag;
  };
  passwordShowed.click(() => {
    passwordShowed.css("display", "none");
    passwordUnshowed.css("display", "inline-block");
    passwordField[0].type = "password";
  });
  passwordUnshowed.click(function () {
    passwordShowed.css("display", "inline-block");
    passwordUnshowed.css("display", "none");
    passwordField[0].type = "text";
  });
  $("#login-btn").on("click", () => {
    if (checkFormInput()) {
      document.location = "/member.html";
    }
  });
});
