function renderButton() {
  console.log("callback called");
  gapi.load("auth2", function () {
    auth2 = gapi.auth2.init({
      client_id:
        "854323361392-72p61h583mihiamd35d87lhrl3nu2nu3.apps.googleusercontent.com",
      cookiepolicy: "single_host_origin",
      scope: "profile",
    });
    console.log(`SIGNED IN: ${auth2.isSignedIn.get()}`);
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
