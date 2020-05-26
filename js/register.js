function gapiHandler() {
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
        location.reload();
      },
      function (error) {
        console.log("Sign-in error", error);
      }
    );
    auth2.then(function () {
      auth2 = gapi.auth2.getAuthInstance();
      if (auth2.isSignedIn.get()) {
        document.location = "/register-form.html";
      }
    });
  });

  element = document.getElementById("google-sso");
}
