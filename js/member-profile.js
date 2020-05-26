const dropdownAnimate = function (_target) {
  let target = $(`#${_target}`);
  let state = target.hasClass("show") ? "showed" : "hidden";
  switch (state) {
    case "showed":
      target.removeClass("show");
      setTimeout(() => {
        target.css({ display: "none" });
      }, 75);
      break;
    case "hidden":
      target.css({ display: "block" });
      // make sure the display block finish first
      setTimeout(() => {
        target.addClass("show");
      }, 0);
      break;
  }
};
$(document).ready(function () {
  $("select").formSelect();
  $(".datepicker").datepicker();
  $("#profile-picture").click(function () {
    dropdownAnimate($(this).attr("data-target"));
  });
  const passwordShowed = $("#password-showed");
  const passwordUnshowed = $("#password-unshowed");
  const passwordField = $("#password");
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
  const checkFormInput = () => {
    let DOMNodes = {
      fullname: $("#fullname"),
      birthDate: M.Datepicker.getInstance(
        document.getElementsByClassName("datepicker")[0]
      ),
      codename: $("#codename"),
      password: $("#password"),
      confirmPassword: $("#confirm-password"),
      telephoneNumber: $("#telephone-number"),
      phoneNumber: $("#phone-number"),
      profession: $("#profession"),
      skillset: $("#skillset"),
      address: $("#address"),
      joinPeriod: $("#join-period"),
      memberType: $("#member-type"),
      nik: $("#nik"),
      email: $("#email"),
      ktp: $("#ktp"),
    };
    // if (DOMNodes.birthDate.toString().length === 0) {
    //   $("#birthdate")
    //     .addClass("invalid")
    //     .next()
    //     .next()
    //     .attr("data-error", "Birthdate cannot be empty");
    // }
    if (DOMNodes.skillset.toString().length === 0) {
      DOMNodes.skillset
        .addClass("invalid")
        .next()
        .next()
        .attr("data-error", "Skillset cannot be empty");
    }
    if (DOMNodes.fullname.val().length === 0) {
      DOMNodes.fullname
        .addClass("invalid")
        .next()
        .next()
        .attr("data-error", "Name cannot be empty");
    }
    if (DOMNodes.codename.val().length === 0) {
      DOMNodes.codename
        .addClass("invalid")
        .next()
        .next()
        .attr("data-error", "Codename cannot be empty");
    }
    // if (DOMNodes.password.val() !== DOMNodes.confirmPassword.val()) {
    //   DOMNodes.confirmPassword.addClass("invalid");
    //   DOMNodes.password.addClass("invalid");
    //   DOMNodes.confirmPassword
    //     .addClass("invalid")
    //     .next()
    //     .next()
    //     .attr("data-error", "Password mismatch");
    // }
    if (DOMNodes.password.val().length < 8) {
      DOMNodes.password
        .addClass("invalid")
        .next()
        .next()
        .next()
        .next()
        .attr("data-error", "Password must be 8 characters long");
    }
    if (DOMNodes.address.val().length === 0) {
      DOMNodes.address
        .addClass("invalid")
        .next()
        .next()
        .attr("data-error", "Address cannot be empty");
    }
    if (DOMNodes.profession.val().length === 0) {
      DOMNodes.profession
        .addClass("invalid")
        .next()
        .next()
        .attr("data-error", "Profession cannot be empty");
    }
    if (DOMNodes.nik.val().length === 0) {
      DOMNodes.nik
        .addClass("invalid")
        .next()
        .next()
        .attr("data-error", "NIK cannot be empty");
    }
    if (DOMNodes.email.val().length === 0) {
      DOMNodes.email
        .addClass("invalid")
        .next()
        .next()
        .attr("data-error", "Email cannot be empty");
    } else if (!/\S+@\S+\.\S+/.test(DOMNodes.email.val())) {
      DOMNodes.email
        .addClass("invalid")
        .next()
        .next()
        .attr("data-error", "Invalid email format, missing `@`");
    }
    if (DOMNodes.skillset.val().length === 0) {
      DOMNodes.skillset
        .addClass("invalid")
        .next()
        .next()
        .attr("data-error", "Skillset cannot be empty");
    }
    if (DOMNodes.ktp.val().length === 0) {
      DOMNodes.ktp
        .addClass("invalid")
        .next()
        .attr("data-error", "You must upload your KTP");
    }
    let phoneNumber = DOMNodes.phoneNumber.val();
    let telephoneNumber = DOMNodes.telephoneNumber.val();
    if (!(phoneNumber.length > 7 && phoneNumber.length <= 15)) {
      DOMNodes.phoneNumber
        .addClass("invalid")
        .next()
        .next()
        .attr("data-error", "Invalid phone number format");
    }
    if (!(telephoneNumber.length > 7 && telephoneNumber.length <= 15)) {
      DOMNodes.telephoneNumber
        .addClass("invalid")
        .next()
        .next()
        .attr("data-error", "Invalid phone number format");
    }
  };
  $("#save-profile").on("click", checkFormInput);
});
