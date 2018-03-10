//THIS SCRIPT USES CLASS OBJECTS FROM loc.js

var locationText = document.getElementById("loc");
var locationDes = document.getElementById("locDescription");

var descriptText = document.getElementById("descriptText");
var eventText = document.getElementById("eventArea");

var invenPlayer = document.getElementById("playerInventory");

function hideItems() {
    document.getElementById("buyItem1").style.visibility = "hidden";
    document.getElementById("buyItem2").style.visibility = "hidden";

}

function showItems() {
    document.getElementById("buyItem1").style.visibility = "visible";
    document.getElementById("buyItem2").style.visibility = "visible";
}


//player Inventory object
var playerInv = [{
    name: "Credit",
    amount: 1
}, {
    name: "Cyber Wares",
    amount: 1
}]

//get buy names for below function----
var buyName1 = document.getElementById("buyName1").textContent;
//function for buying item
function buyItems(name, amt) {
    for (i = 0; i < playerInv.length; i++) {
        if (playerInv[i].name == name) {
            playerInv[i].amount += amt;
        }
    }
}

function updateInv() {
    invenPlayer.innerText = "";
    for (i = 0; i < playerInv.length; i++) {
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
            descriptText.innerText = "fuck";
            showItems();
            break;


            ///buttons for item buys
        case buyBtn1:
            buyItems(buyName1, 1);
            alert("you bought " + buyName1 + " Owned: " + playerInv[0].amount);
            updateInv();
            break;

        case sellBtn1:
            alert("you sold somethin");
            alert(JSON.stringify(playerInv))
            break;

    }
};

//populate Player inventory.
updateInv();