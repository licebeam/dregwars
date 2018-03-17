//THIS SCRIPT USES CLASS OBJECTS FROM loc.js test bar little loading test

$('#hold').css('visibility', 'hidden');

//run change location to get default prices once
changeLocation();
var timerNum = 0; //number of timers created
////
var locationText = document.getElementById("loc");
var locationDes = document.getElementById("locDescription");
var descriptText = document.getElementById("descriptText");
var eventText = document.getElementById("eventArea");
var invenPlayer = document.getElementById("playerInventory");
var playerStats = document.getElementById("playerStatus");
var playerMoney = document.getElementById("playerMoney")

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function hideItems() {
    document
        .getElementById("buyItem1")
        .style
        .visibility = "hidden";
    document
        .getElementById("buyItem2")
        .style
        .visibility = "hidden";
    document
        .getElementById("buyItem3")
        .style
        .visibility = "hidden";
    document
        .getElementById("buyItem4")
        .style
        .visibility = "hidden";

}

function showItems() {
    document
        .getElementById("buyItem1")
        .style
        .visibility = "visible";
    document
        .getElementById("buyItem2")
        .style
        .visibility = "visible";
    document
        .getElementById("buyItem3")
        .style
        .visibility = "visible";
    document
        .getElementById("buyItem4")
        .style
        .visibility = "visible";
}

//MAIN Button menu
function button(obj, id) {

    switch (id) {
        case btn1:
            locationText.innerText = "Detroit: " + loc1.name;
            locationDes.innerText = "Description: " + loc1.desc;
            updateStats();
            changeLocation();
            updateMerch();
            createTimer();
            eventText.innerText = loc1.randomEvent();

            break;

        case btn2:
            locationText.innerText = "Detroit: " + loc2.name;
            locationDes.innerText = "Description: " + loc2.desc;
            eventText.innerText = loc1.randomEvent();
            updateStats();
            changeLocation();
            updateMerch();
            createTimer();

            break;

        case btn3:
            locationText.innerText = "Detroit: " + loc3.name;
            locationDes.innerText = "Description: " + loc3.desc;
            updateStats();
            changeLocation();
            updateMerch();
            createTimer();
            eventText.innerText = loc1.randomEvent();
            break;

        case btn4:
            locationText.innerText = "Detroit: " + loc4.name;
            locationDes.innerText = "Description: " + loc4.desc;
            updateStats();
            changeLocation();
            updateMerch();
            createTimer();
            eventText.innerText = loc1.randomEvent();
            break;

        case btnSe:
            descriptText.innerText = loc1.searchEvent();
            hideItems();

            break;

        case btnTa: // this should populate the buy menu with dom elements
            descriptText.innerText = "Talking to Bob";
            showItems();
            break;

            ///buttons for item buys
        case buyBtn1:
            updateMerch();
            updateStats();
            if (item1.amount >= 1 && player.money >= item1.value) {
                buyItems(buyName1, 1, item1.value);
                item1.amount -= 1;
                updateMerch();
                updateInv();
                updateStats();
            }

            break;

        case sellBtn1:
            sellItems(buyName1, 1, item1.value, 1); //bnum is button num for item
            updateMerch();
            updateInv();
            updateStats();

            break;

        case buyBtn2:
            updateMerch();
            updateStats();
            if (item2.amount >= 1 && player.money >= item2.value) {
                buyItems(buyName2, 1, item2.value);
                item2.amount -= 1;
                updateMerch();
                updateInv();
                updateStats();
            }

            break;

        case sellBtn2:
            sellItems(buyName2, 1, item2.value, 2); //bnum is button num for item
            updateMerch();
            updateInv();
            updateStats();

            break;

        case buyBtn3:
            updateMerch();
            updateStats();
            if (item3.amount >= 1 && player.money >= item3.value) {
                buyItems(buyName3, 1, item3.value);
                item3.amount -= 1;
                updateMerch();
                updateInv();
                updateStats();
            }

            break;

        case sellBtn3:
            sellItems(buyName3, 1, item3.value, 3); //bnum is button num for item
            updateMerch();
            updateInv();
            updateStats();

            break;

        case buyBtn4:
            updateMerch();
            updateStats();
            if (item4.amount >= 1 && player.money >= item4.value) {
                buyItems(buyName4, 1, item4.value);
                item4.amount -= 1;
                updateMerch();
                updateInv();
                updateStats();
            }

            break;

        case sellBtn4:
            sellItems(buyName4, 1, item4.value, 4); //bnum is button num for item
            updateMerch();
            updateInv();
            updateStats();

            break;
    }
};
//function for buying item
function buyItems(name, amt, price) { //finally works!!!!
    let exist = playerInv.some(playerInv => playerInv.name === name);
    if (exist === false) {
        updateStats();
        if (player.money >= price) {

            player.money -= price;
            updateStats();
            playerInv.push({name: name, amount: amt});
            updateInv();

        }

    } else {
        for (i = 0; i < playerInv.length; i++) {
            if (playerInv[i].name == name) {
                updateStats();
                if (player.money >= price) {

                    playerInv[i].amount += amt;
                    updateInv();
                    player.money -= price;
                    updateStats();

                }

            }
        }
    }
}

function sellItems(name, amt, price, bnum) {

    let itemSeller = playerInv.some(playerInv => playerInv.name === name);
    for (i = 0; i < playerInv.length; i++) {
        if (playerInv[i].name == name && itemSeller === true) {
            player.money += price;
            updateStats();
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
                updateMerch();
            }

            playerInv[i].amount -= amt;
            updateInv();

        }
    }

}

//populate Player inventory.
function updateInv() {
    invenPlayer.innerText = "Inventory:\n";
    for (i = 0; i < playerInv.length; i++) {
        if (playerInv[i].amount == 0) {
            playerInv.splice(i, 1);
        }
        invenPlayer.innerText += "Name: " + playerInv[i].name;
        invenPlayer.innerText += " Owned: " + playerInv[i].amount + "\n";

    }

}
$('#btn1').click();

updateInv();
updateMerch();
updateStats();

///TIMER ALPHA1.0
function createTimer() {
    //for the main column
    $("#bounce")
        .fadeTo("slow", 0.4, function () {

            // Animation complete.
        });
    $("button").attr("disabled", true); //disables buttons on change
    var whereVar = $('.col1');

    timerNum++;
    $("#bounce").toggleClass("bounce");

    var timeBar = $('<progress class="progress is-danger" id="timer' + timerNum + '" value=" 0 " max=" 100 ">Help</progress>').appendTo(whereVar);
    var timerBar = {
        num: timerNum,
        val: document
            .getElementById("timer" + timerNum)
            .value,
        ele: document.getElementById("timer" + timerNum)
    }
    //alert(timerBar.val);
    if (timerBar.val <= 100) {
        timerBar.ele.max = 100;
        setInterval(function () {
            timerBar.ele.value += 1;
        }, 10);
    }
    setTimeout(() => {
        //alert(timerBar.val);
        $(timerBar.ele).remove();
        $("#bounce").toggleClass("bounce");
        $("button").attr("disabled", false);
        $("#bounce").fadeTo("slow", 1, function () {
            // Animation complete.
        });
    }, 1100);
}
