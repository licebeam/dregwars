//THIS SCRIPT USES CLASS OBJECTS FROM loc.js test bar little loading test

$("#hold").css("visibility", "hidden");
var dayChange = false;
var eventModal = false; //set a modal up for an event.
var timerNum = 0; //number of timers created
////
var locationText = document.getElementById("loc");
var locationDes = document.getElementById("locDescription");
var descriptText = document.getElementById("descriptText");
var eventText = document.getElementById("eventArea");
var invenPlayer = document.getElementById("playerInventory");
var playerStats = document.getElementById("playerStatus");
var playerMoney = document.getElementById("playerMoney");
//this var checks if the inital loan is payed off.
var initLoan = false; //false = not paid////
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hideItems() {
  $("#buyBody").fadeTo("fast", 0.1, function() {
    // Animation complete.
    document.getElementById("buyItem1").style.visibility = "hidden";
    document.getElementById("buyItem2").style.visibility = "hidden";
    document.getElementById("buyItem3").style.visibility = "hidden";
    document.getElementById("buyItem4").style.visibility = "hidden";
  });
}

function showItems() {
  $("#buyBody").fadeTo("fast", 1, function() {
    // Animation complete.
    document.getElementById("buyItem1").style.visibility = "visible";
    document.getElementById("buyItem2").style.visibility = "visible";
    document.getElementById("buyItem3").style.visibility = "visible";
    document.getElementById("buyItem4").style.visibility = "visible";
  });
}

//MAIN Button menu
if (dayChange === false) {
  function button(obj, id) {
    switch (id) {
      case btn1:
        hideItems();
        changeImg(".mainImage img", ".mainImage", "images/server.jpg");
        locationText.innerText = "Detroit: " + loc1.name;
        locationDes.innerText = "Description: " + loc1.desc;
        eventText.innerText = "";
        eventText.innerText = loc1.randomEvent();
        changeLocation();
        if (player.day !== 1) {
          event(eventText.innerText);
          if (player.loanday <= 0) {
            loseGame();
          }
        } else {
          eventText.innerText = "No Event";
        }
        createTimer();
        $("button").attr("disabled", true); //disables buttons on change
        break;

      case btn2:
        hideItems();
        locationText.innerText = "Detroit: " + loc2.name;
        locationDes.innerText = "Description: " + loc2.desc;
        eventText.innerText = "";
        eventText.innerText = loc1.randomEvent();
        changeLocation();
        if (player.day !== 1) {
          event(eventText.innerText);
          changeImg(".mainImage img", ".mainImage", "images/server2.jpg");
          if (player.loanday <= 0) {
            loseGame();
          }
        } else {
          eventText.innerText = "No Event";
        }
        createTimer();
        $("button").attr("disabled", true); //disables buttons on change
        break;

      case btn3:
        hideItems();
        changeImg(".mainImage img", ".mainImage", "images/server3.jpg");
        locationText.innerText = "Detroit: " + loc3.name;
        locationDes.innerText = "Description: " + loc3.desc;
        eventText.innerText = "";
        eventText.innerText = loc1.randomEvent();
        changeLocation();
        if (player.day !== 1) {
          event(eventText.innerText);
          if (player.loanday <= 0) {
            loseGame();
          }
        } else {
          eventText.innerText = "No Event";
        }
        createTimer();
        $("button").attr("disabled", true); //disables buttons on change
        break;

      case btn4:
        hideItems();
        changeImg(".mainImage img", ".mainImage", "images/server4.jpg");
        locationText.innerText = "Detroit: " + loc4.name;
        locationDes.innerText = "Description: " + loc4.desc;
        eventText.innerText = "";
        eventText.innerText = loc1.randomEvent();
        changeLocation();
        if (player.day !== 1) {
          event(eventText.innerText);
          if (player.loanday <= 0) {
            loseGame();
          }
        } else {
          eventText.innerText = "No Event";
        }
        createTimer();
        $("button").attr("disabled", true); //disables buttons on change
        break;

      case btnSe: //search button
        if (searchTimes === 0) {
          descriptText.innerText = loc1.searchEvent();
          search(descriptText.innerText);
          modalEvent("Searching Area///", "You found: ");
          searchTimes = 1;
        }

        break;

      case btnTa: // this should populate the buy menu with dom elements
        if (talkTimes === 0) {
          descriptText.innerText = loc1.talkEvent();
          talk(descriptText.innerText);
          modalEvent(
            "Talking///",
            "You desperately listen for any semblance of meaning as they tell you: "
          );
          talkTimes = 1;
        }

        break;

      ///buttons for item buys
      case buyBtn1:
        if (
          item1.amount >= 1 &&
          player.money >= item1.value &&
          player.invNum < player.bagspace
        ) {
          buyItems(buyName1, 1, item1.value);
          item1.amount -= 1;
        }

        break;

      case sellBtn1:
        sellItems(buyName1, 1, item1.value, 1); //bnum is button num for item
        break;

      case buyBtn2:
        if (
          item2.amount >= 1 &&
          player.money >= item2.value &&
          player.invNum < player.bagspace
        ) {
          buyItems(buyName2, 1, item2.value);
          item2.amount -= 1;
        }
        break;

      case sellBtn2:
        sellItems(buyName2, 1, item2.value, 2); //bnum is button num for item
        break;

      case buyBtn3:
        if (
          item3.amount >= 1 &&
          player.money >= item3.value &&
          player.invNum < player.bagspace
        ) {
          buyItems(buyName3, 1, item3.value);
          item3.amount -= 1;
        }
        break;

      case sellBtn3:
        sellItems(buyName3, 1, item3.value, 3); //bnum is button num for item
        break;

      case buyBtn4:
        if (
          item4.amount >= 1 &&
          player.money >= item4.value &&
          player.invNum < player.bagspace
        ) {
          buyItems(buyName4, 1, item4.value);
          item4.amount -= 1;
        }
        break;

      case sellBtn4:
        sellItems(buyName4, 1, item4.value, 4); //bnum is button num for item
        break;

      case loanButton:
        if (player.money >= player.loan) {
          player.money -= player.loan;
          player.loan = 0;
          winGame();
        }
        break;
    }
  }
}
//function for buying item
function buyItems(name, amt, price) {
  //finally works!!!!
  let exist = playerInv.some(playerInv => playerInv.name === name);
  if (exist === false) {
    if (player.money >= price) {
      player.money -= price;
      player.playerInv += 1; //add to player bag
      playerInv.push({
        //add item to the player inventory if it doesn't exist
        name: name,
        amount: amt
      });
      player.invNum += 1; //testing removal and bagspace
    }
  } else {
    for (i = 0; i < playerInv.length; i++) {
      if (playerInv[i].name == name) {
        if (player.money >= price) {
          playerInv[i].amount += amt;
          player.money -= price;
        }
      }
    }
  }
}

function sellItems(name, amt, price, bnum) {
  //SELLING FUNCTION

  let itemSeller = playerInv.some(playerInv => playerInv.name === name);
  for (i = 0; i < playerInv.length; i++) {
    if (playerInv[i].name == name && itemSeller === true) {
      player.money += price;
      if (itemSeller === true) {
        switch (bnum) {
          case 1:
            item1.amount += 1;
            break;
          case 2:
            item2.amount += 1;
            break;

          case 3:
            item3.amount += 1;
            break;

          case 4:
            item4.amount += 1;
            break;
        }
      }

      playerInv[i].amount -= amt;
    }
  }
}

//populate Player inventory.
function updateInv() {
  var bagNum = player.bagspace - 1;
  invenPlayer.innerText =
    "Player Bagspace: " +
    bagNum +
    " Current: " +
    player.invNum +
    " Inventory:\n";
  for (i = 0; i < playerInv.length; i++) {
    if (playerInv[i].amount == 0) {
      player.invNum -= 1; //removal of bag space
      updateStats();
      playerInv.splice(i, 1);
    }
    invenPlayer.innerText += "Name: " + playerInv[i].name;
    invenPlayer.innerText += " Owned: " + playerInv[i].amount + "\n";
  }
}
var firstLoad = false; //check if game has loaded real quick like
if (firstLoad === false) {
  $("#btn1").click();
}

///TIMER ALPHA1.0
function createTimer() {
  dayChange = true;
  //for the main column
  $("#bounce").addClass("bounce");
  $("#eventArea").css("visibility", "hidden");
  $("#bounce").fadeTo("slow", 0.5, function() {
    // Animation complete.
  });
  var whereVar = $(".col1");
  timerNum++;

  var timeBar = $(
    '<progress class="progress is-danger" id="timer' +
      timerNum +
      '" value=" 0 " max=" 100 ">Help</progress>'
  ).appendTo(whereVar);
  var timerBar = {
    num: timerNum,
    val: document.getElementById("timer" + timerNum).value,
    ele: document.getElementById("timer" + timerNum)
  };
  //alert(timerBar.val);
  if (timerBar.val <= 100) {
    timerBar.ele.max = 100;
    setInterval(function() {
      timerBar.ele.value += 1;
    }, 5);
  }
  setTimeout(() => {
    if (firstLoad === true) {
      //this is where you see events
      player.day += 1; //CHANGE DAYS
      player.loanday -= 1;
      $("#eventArea").css("visibility", "visible");
      modalLoad(
        "//Day " + player.day + " is Starting...",
        "Prices have changed!"
      );
    }

    //alert(timerBar.val);
    searchTimes = 0; //makes sure you can only search 1 time per day.
    talkTimes = 0; //same as above for talking
    timerBar.ele.value = 0;
    $(timerBar.ele).remove();
    $("button").attr("disabled", false);
    $("#bounce").removeClass("bounce");
  }, 1200);
}

function modalLoad(t1, t2) {
  $(".modalBody").focus();
  $(".modal-card-title").text(t1);
  $(".modalBody").text(t2);
  $(".modalRand").text(eventText.innerText);
  $(".loanDays").text("Days left to pay your loan: " + player.loanday);
  $(".modal").addClass("is-active");
}
$("button.delete").click(function() {
  $(".modal").removeClass("is-active");
  $("#moneyBody").focus(); //strange button bug fix?
  $("#bounce").fadeTo("slow", 1, function() {
    // Animation complete.
    firstLoad = true; //make sure the initial modal does not come back
    dayChange = true;
    showItems();
  });
  setTimeout(() => {}, 400);
});

//change ability to use pointer events
if (dayChange === true) {
  $(".disableMouse").css("pointer-events", "all");
}

function winGame() {
  alert("you win");
  window.location.reload();
}

function loseGame() {
  alert("you lose");
  window.location.reload();
}
///Image change function

function changeImg(cls, cls2, img) {
  $(document).ready(function() {
    $(cls).remove();
    setTimeout(() => {}, 100);
    $(cls2).append("<img src='" + img + "' alt=''>");
  });
}

///UPDATE LOOP
setInterval(() => {
  updateInv();
  updateStats();
  updateMerch();
}, 60);
