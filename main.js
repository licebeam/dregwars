//THIS SCRIPT USES CLASS OBJECTS FROM loc.js

var locationText = document.getElementById("loc");
var locationDes = document.getElementById("locDescription");

var descriptText = document.getElementById("descriptText");
var eventText = document.getElementById("eventArea");

var invenPlayer = document.getElementById("playerInventory");
var playerStats = document.getElementById("playerStatus");
var playerMoney = document.getElementById("playerMoney")

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

//function for buying item
function buyItems(name, amt) { //finally works!!!!
    let exist = playerInv.some(playerInv => playerInv.name === name);
    if (exist === false) {
        playerInv.push({name: name, amount: amt});
    } else {
        for (i = 0; i < playerInv.length; i++) {
            if (playerInv[i].name == name) {
                playerInv[i].amount += amt;

            }
        }
    }

}

function sellItems(name, amt) {
    for (i = 0; i < playerInv.length; i++) {
        if (playerInv[i].name == name) {
            playerInv[i].amount -= amt;

        }
    }
}

function updateInv() {
    invenPlayer.innerText = "";
    for (i = 0; i < playerInv.length; i++) {
        if (playerInv[i].amount == 0) {
            playerInv.splice(i, 1);
        }
        invenPlayer.innerText += "\n Name: " + playerInv[i].name;
        invenPlayer.innerText += " Owned: " + playerInv[i].amount;

    }

}
//update money and stats
function updateStats() {
    playerStats.innerText = "Name: " + player.name + "\n";
    playerStats.innerText += "Hp: " + player.hp;
    playerMoney.innerText = player.money;
}
//MAIN Button menu
function button(obj, id) {

    switch (id) {
        case btn1:
            locationText.innerText = "Detroit: " + loc1.name;
            locationDes.innerText = "Description: " + loc1.desc;
            eventText.innerText = loc1.randomEvent();

            break;

        case btn2:
            locationText.innerText = "Detroit: " + loc2.name;
            locationDes.innerText = "Description: " + loc2.desc;
            eventText.innerText = loc1.randomEvent();
            break;

        case btn3:
            locationText.innerText = "Detroit: " + loc3.name;
            locationDes.innerText = "Description: " + loc3.desc;
            eventText.innerText = loc1.randomEvent();
            break;

        case btn4:
            locationText.innerText = "Detroit: " + loc4.name;
            locationDes.innerText = "Description: " + loc4.desc;
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
            buyItems(buyName1, 1);
            //alert("You bought " + buyName1);
            item1.amount -= 1; //change later
            updateMerch();
            updateInv();
            break;

        case sellBtn1:
            sellItems(buyName1, 1);
            item1.amount += 1; //change later
            updateMerch();
            //alert("You Sold " + buyName1);
            updateInv();
            break;

        case buyBtn2:
            buyItems(buyName2, 1);
            //alert("You bought " + buyName2);
            item2.amount -= 1; //change later
            updateMerch();
            updateInv();
            break;

        case sellBtn2:
            sellItems(buyName2, 1);
            //alert("You Sold " + buyName2);
            item2.amount += 1; //change later
            updateMerch();
            updateInv();
            break;

        case buyBtn3:
            buyItems(buyName3, 1);
            //alert("You bought " + buyName2);
            item3.amount -= 1; //change later
            updateMerch();
            updateInv();
            break;

        case sellBtn3:
            sellItems(buyName3, 1);
            //alert("You Sold " + buyName2);
            item3.amount += 1; //change later
            updateMerch();
            updateInv();
            break;

        case buyBtn4:
            buyItems(buyName4, 1);
            //alert("You bought " + buyName2);
            item4.amount -= 1; //change later
            updateMerch();
            updateInv();
            break;

        case sellBtn4:
            sellItems(buyName4, 1);
            //alert("You Sold " + buyName2);
            item4.amount += 1; //change later
            updateMerch();
            updateInv();
            break;
    }
};

//populate Player inventory.
updateInv();
updateMerch();
updateStats();