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
      changeImg2(".eventImage img", ".eventImage", "images/event1.jpg");

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
      changeImg2(".eventImage img", ".eventImage", "images/event5.jpg");
      break;

    case "Get outta here scum!":
      foundItem = "Get outta here scum!";
      itemDesc = player.name + ": Happy to Oblige";
      changeImg2(".eventImage img", ".eventImage", "images/port1.jpg");
      break;
  }
}
function funcEvent() {
  eventText.innerText = loc1.randomEvent();
  event(eventText.innerText);
  setTimeout(() => {
    modalEvent(
      "//Day " + player.day + " is Starting...",
      "Prices have changed!"
    );
  }, 1000);
}
///function that checks which event is currently happening.
function event(evText) {
  switch (evText) {
    case "No Event":
      foundItem = "No Event";
      itemDesc = player.name + ": Glad I've never seen yours!";
      changeImg2(".eventImage img", ".eventImage", "images/event5.jpg");

      break;

    case "It's Raining.":
      foundItem = "It's Raining.";
      itemDesc = player.name + ": Glad I've never seen yours!";
      changeImg2(".eventImage img", ".eventImage", "images/event5.jpg");

      break;

    case "Prices are low today!":
      foundItem = "Prices are low today!";
      itemDesc = player.name + ": Glad I've never seen yours!";
      changeImg2(".eventImage img", ".eventImage", "images/bankjob.jpg");
      item1.value = 25;
      item2.value = 500;
      item3.value = 2000;
      item4.value = 3000;
      updateMerch();
      break;

    case "Prices are high today!":
      foundItem = "Prices are high today!";
      itemDesc = player.name + ": Glad I've never seen yours!";
      changeImg2(".eventImage img", ".eventImage", "images/event3.jpg");
      item1.value = 10000;
      item2.value = 20000;
      item3.value = 30000;
      item4.value = 40000;
      updateMerch();
      break;

    case "You found $1,000 on your journey.":
      foundItem = "You found $1,000 on your journey.";
      itemDesc = player.name + ": Glad I've never seen yours!";
      changeImg2(".eventImage img", ".eventImage", "images/port1.jpg");
      player.money += 1000;
      break;

    case "You had a run-in with the Police but got away.":
      foundItem = "You had a run-in with the Police but got away.";
      itemDesc = player.name + ": Glad I've never seen yours!";
      changeImg2(".eventImage img", ".eventImage", "images/event1.jpg");
      break;

    case "You sense something of value in the area.":
      foundItem = "You sense something of value in the area.";
      itemDesc = player.name + ": Glad I've never seen yours!";
      changeImg2(".eventImage img", ".eventImage", "images/port1.jpg");
      break;

    case "You got mugged and lost $1,000.":
      foundItem = "You got mugged and lost $1,000.";
      itemDesc = player.name + ": Glad I've never seen yours!";
      changeImg2(".eventImage img", ".eventImage", "images/event8.jpg");
      if (player.money >= 1000) {
        player.money -= 1000;
      } else {
        player.money = 0;
      }
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
  $(cls2).append("<img src='" + img + "'alt='images/bankjob.jpg'>");
}
