//preload images////
$('<img src="images/bankjob.jpg"/>');
$('<img src="images/event1.jpg"/>');
$('<img src="images/event2.jpg"/>');
$('<img src="images/event3.jpg"/>');
$('<img src="images/event4.jpg"/>');
$('<img src="images/event5.jpg"/>');
$('<img src="images/event6.jpg"/>');
$('<img src="images/event7.jpg"/>');
$('<img src="images/event8.jpg"/>');
$('<img src="images/titlescreen.jpg"/>');

///function that checks which event is currently happening.
function event(evText) {
  switch (evText) {
    case "No Event":
      changeImg1(".eventImage img", ".eventImage", "images/bankjob.jpg");
      break;

    case "It's Raining":
      changeImg1(".eventImage img", ".eventImage", "images/bankjob.jpg");
      break;

    case "Prices are low today!":
      changeImg1(".eventImage img", ".eventImage", "images/bankjob.jpg");
      item1.value = 25;
      item2.value = 500;
      item3.value = 2000;
      item4.value = 3000;
      updateMerch();
      break;

    case "Prices are high today!":
      changeImg1(".eventImage img", ".eventImage", "images/event3.jpg");
      item1.value = 10000;
      item2.value = 20000;
      item3.value = 30000;
      item4.value = 40000;
      updateMerch();
      break;

    case "You found $1,000 on your journey":
      changeImg1(".eventImage img", ".eventImage", "images/event3.jpg");
      player.money += 1000;
      break;

    case "You had a run-in with the Police but got away.":
      changeImg1(".eventImage img", ".eventImage", "images/event8.jpg");
      break;

    case "You sense something of value in the area":
      changeImg1(".eventImage img", ".eventImage", "images/serverjpg");
      break;

    case "You got mugged":
      changeImg1(".eventImage img", ".eventImage", "images/server.jpg");
      if (player.money >= 1000) {
        player.money -= 1000;
      } else {
        player.money = 0;
      }
      break;
  }
}
function changeImg1(cls, cls2, img) {
  $(cls).remove();
  setTimeout(() => {}, 100);
  $(cls2).append("<img src='" + img + "' alt=''>");
}
