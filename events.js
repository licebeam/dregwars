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
      itemDesc = "Days left to pay your loan: " + player.loanday;
      changeImg2(".eventImage img", ".eventImage", "images/event5.jpg");

      break;

    case "It's Raining.":
      foundItem = "It's Raining.";
      itemDesc = "Days left to pay your loan: " + player.loanday;
      changeImg2(".eventImage img", ".eventImage", "images/event5.jpg");

      break;

    case "Prices are low today!":
      foundItem = "Prices are low today!";
      itemDesc = "Days left to pay your loan: " + player.loanday;
      changeImg2(".eventImage img", ".eventImage", "images/bankjob.jpg");
      item1.value = 25;
      item2.value = 500;
      item3.value = 2000;
      item4.value = 3000;
      updateMerch();
      break;

    case "Prices are high today!":
      foundItem = "Prices are high today!";
      itemDesc = "Days left to pay your loan: " + player.loanday;
      changeImg2(".eventImage img", ".eventImage", "images/event3.jpg");
      item1.value = 10000;
      item2.value = 20000;
      item3.value = 30000;
      item4.value = 40000;
      updateMerch();
      break;

    case "You found $1,000 on your journey.":
      foundItem = "You found $1,000 on your journey.";
      itemDesc = "Days left to pay your loan: " + player.loanday;
      changeImg2(".eventImage img", ".eventImage", "images/port1.jpg");
      player.money += 1000;
      break;

    case "You had a run-in with the Police but got away.":
      foundItem = "You had a run-in with the Police but got away.";
      itemDesc = "Days left to pay your loan: " + player.loanday;
      changeImg2(".eventImage img", ".eventImage", "images/event1.jpg");
      break;

    case "You sense something of value in the area.":
      foundItem = "You sense something of value in the area.";
      itemDesc = "Days left to pay your loan: " + player.loanday;
      changeImg2(".eventImage img", ".eventImage", "images/port1.jpg");
      break;

    case "You got mugged and lost $1,000.":
      foundItem = "You got mugged and lost $1,000.";
      itemDesc = "Days left to pay your loan: " + player.loanday;
      changeImg2(".eventImage img", ".eventImage", "images/event8.jpg");
      if (player.money >= 1000) {
        player.money -= 1000;
      } else {
        player.money = 0;
      }
      break;
  }
}
