//THIS SCRIPT USES CLASS OBJECTS FROM loc.js

var locationText = document.getElementById("loc");
var locationDes = document.getElementById("locDescription");

var descriptText = document.getElementById("descriptText");
var eventText = document.getElementById("eventArea");

var invenPlayer = document.getElementById("playerInventory");

function hideItems() {
    document
        .getElementById("buyItem1")
        .style
        .visibility = "hidden";
    document
        .getElementById("buyItem2")
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
}

//function for buying item
function buyItems(name, amt) { //// THIS NEEDS TO BE FIXEDDDDDDDDDDDDDDDDDDDD----------------------

    if (playerInv.indexOf(name) === -1) {
        //alert('not found')
        playerInv.push({name: name, amount: amt})
    } else if (playerInv.indexOf(name) > -1) {
        //alert('found item')

        for (i = 0; i < playerInv.length; i++) {

            if (playerInv[i].name === name) {

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

    }
};

//populate Player inventory.
updateInv();
updateMerch();