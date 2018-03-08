//THIS SCRIPT USES CLASS OBJECTS FROM loc.js

var locationText = document.getElementById("loc");
var locationDes = document.getElementById("locDescription");

var descriptText = document.getElementById("descriptText");
var eventText = document.getElementById("eventArea");
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

            break;

        case btnTa:
            descriptText.innerText = "fuck";
            break;

    }
};
