var locationText = document.getElementById("loc");
var locationDes = document.getElementById("locDescription");

var descriptText = document.getElementById("descriptText");
var loc1 = "Downtown ";
var loc2 = "East Side ";
var loc3 = "West Side ";
var loc4 = "South End ";

var locD1 = "TEXT TEXT TEXT";

//MAIN
function button(obj, id) {

    switch (id) {
        case btn1:
            locationText.innerText = "Detroit: " + loc1;
            locationDes.innerText = "Description: " + locD1;
            break;

        case btn2:
            locationText.innerText = "Detroit: " + loc2;
            break;

        case btn3:
            locationText.innerText = "Detroit: " + loc3;
            break;

        case btn4:
            locationText.innerText = "Detroit: " + loc4;
            break;

        case btnSe:
            descriptText.innerText = "fuck";
            break;

        case btnTa:
            descriptText.innerText = "fuck";
            break;

    }
};
