//This contains talking and searching....

var foundItem = "";
var itemDesc = "";
var searchTimes = 0;
var talkTimes = 0;
// Search
function search(evText) {
  switch (evText) {
    case "Nothing":
      foundItem = "Nothing";
      player.name + ": Another wasted night.";
      changeImg2(".eventImage img", ".eventImage", "images/event2.jpg");

      break;
    case "Gun":
      foundItem = "Gun";
      player.name + ": Just what I needed!";
      changeImg2(".eventImage img", ".eventImage", "images/fight.jpg");
      break;

    case "Trash":
      foundItem = "Trash";
      player.name + ": Ugh, why me.";
      changeImg2(".eventImage img", ".eventImage", "images/fight.jpg");
      break;

    case "A black cat carrying a dark omen.":
      foundItem = "A black cat carrying a dark omen.";
      itemDesc = player.name + ": This can't be good..";
      changeImg2(".eventImage img", ".eventImage", "images/event2.jpg");
      break;
  }
}

//talk switch
function talk(evText) {
  switch (evText) {
    case "Hey, I think I've seen your face around here before.":
      foundItem = "Hey, I think I've seen your face around here before.";
      itemDesc = player.name + ": Glad I've never seen yours!";
      changeImg2(".eventImage img", ".eventImage", "images/event3.jpg");
      break;

    case "Get outta here scum!":
      foundItem = "Get outta here scum!";
      itemDesc = player.name + ": Happy to Oblige";
      changeImg2(".eventImage img", ".eventImage", "images/port1.jpg");
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
  itemDesc = "";
  foundItem = "";
  descriptText.innerText = "";

  $(".modal").removeClass("is-active");

  setTimeout(() => {}, 400);
});

function changeImg2(cls, cls2, img) {
  $(cls).remove();
  setTimeout(() => {}, 100);
  $(cls2).append("<img src='" + img + "' alt=''>");
}
