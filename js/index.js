$(document).ready(function () {
  $(".sidenav").sidenav();
  for (question of $(".question-container > div:not(.divider)")) {
    let answer = $(question).children("#q-answer");
    $(question)
      .find("#q-drop")
      .on("click", function () {
        if ($(this).hasClass("expanded")) {
          $(this).removeClass("expanded");
          $(this).css("transform", "rotate(0deg)");
        } else {
          $(this).addClass("expanded");
          $(this).css("transform", "rotate(-180deg)");
        }
        answer.slideToggle(350);
      });
  }
});
