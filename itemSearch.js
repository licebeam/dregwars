var foundItem = "";
var itemDesc = "";
var searchTimes = 0;
// Search
function search(evText) {
  switch (evText) {
    case "Nothing":
      foundItem = "Nothing";
      changeImg(".eventImage img", ".eventImage", "images/event2.jpg");

      break;
    case "Gun":
      foundItem = "Gun";
      changeImg(".eventImage img", ".eventImage", "images/fight.jpg");

      break;

    case "Trash":
      foundItem = "Trash";
      changeImg(".eventImage img", ".eventImage", "images/fight.jpg");

      break;

    case "A cat walking down the street.":
      foundItem = "A cat walking down the street.";
      changeImg(".eventImage img", ".eventImage", "images/fight.jpg");

      break;
  }
}
//////EVENT MODAL

function modalEvent(t1, t2) {
  $(".modalBody").focus();
  $(".modal-card-title").text(t1);
  $(".modalBody").text(t2);
  $(".modalRand").text(foundItem);
  $(".loanDays").text(itemDesc); //change this
  $(".modal").addClass("is-active");
}
$("button.delete").click(function() {
  $(".modal").removeClass("is-active");
  setTimeout(() => {}, 400);
});
