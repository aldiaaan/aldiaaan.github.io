console.log($);
const autoplay = () => {
  $(".carousel").carousel("next");
  setTimeout(autoplay, 3000);
};
$(document).ready(function () {
  $(".carousel").carousel(
    {
      fullWidth: true,
      indicators: true,
    },
    setTimeout(autoplay, 3000)
  );
  $(".dropdown-trigger").dropdown();
});
