function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function renderButton() {
  console.log("callback called");
  gapi.load("auth2", function () {
    auth2 = gapi.auth2.init({
      client_id:
        "854323361392-72p61h583mihiamd35d87lhrl3nu2nu3.apps.googleusercontent.com",
      cookiepolicy: "single_host_origin",
      scope: "profile",
    });

    auth2.attachClickHandler(
      element,
      {},
      function (googleUser) {
        console.log("Signed in: " + googleUser.getBasicProfile().getName());
      },
      function (error) {
        console.log("Sign-in error", error);
      }
    );
  });

  element = document.getElementById("google-sso");
}
