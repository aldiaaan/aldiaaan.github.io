const dropdownAnimate = function (_target) {
  let target = $(`#${_target}`);
  console.log(target);
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
  $("ul.tabs").tabs();
  var menu = $(".menu");
  var target = $("#" + menu.attr("data-target"));
  menu.pushpin({
    top: target.offset().top,
  });
  $("#new-job-title").on("focus", function () {
    $("#new-job-expand").slideDown(300);
  });
  $("#new-job-title").on("blur", function () {
    // $("#new-job-expand").slideUp(100);
  });
  $(".job_more").click(function () {
    dropdownAnimate($(this).attr("data-target"));
  });
  $("#profile-picture").click(function () {
    dropdownAnimate($(this).attr("data-target"));
  });
});
