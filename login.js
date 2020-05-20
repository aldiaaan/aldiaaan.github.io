// client id: 854323361392-ql1indjuus9ng9rr999hai2uimjlbsmj.apps.googleusercontent.com
// client secret: xRBbaoGAQ8yCU_fufH8K90u1

const onSignIn = function (user) {
  const profile = user.getBasicProfile();
  console.log(user);
  console.log("testtest");
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
};
