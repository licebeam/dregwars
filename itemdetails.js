var item1 = {
    name: "Credit Stick",
    value: Math.floor(Math.random() * (1000 - 10 + 1)) + 10, // this is the range of price this can be.
    amount: Math.floor(Math.random() * (50 - 1 + 1)) + 1 // this is the range of items this can be.
}

var item2 = {
    name: "Cyber Wares",
    value: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000, // this is the range of price this can be.
    amount: Math.floor(Math.random() * (10 - 1 + 1)) + 1 // this is the range of items this can be.
}

// / WHERE ITEMS LAY get buy names for function show, buy and sell---- sets the
// item 1
var buyn1 = document.getElementById("buyName1");
var buyp1 = document.getElementById("buyPrice1");
var buya1 = document.getElementById("buynum1");
buyn1.innerText = item1.name + " ---- ";
buyp1.innerText = "Price: " + item1.value;
buya1.innerText = "Available: " + item1.amount;
var buyName1 = document
    .getElementById("buyName1")
    .textContent;
// item 2
var buyn2 = document.getElementById("buyName2");
var buyp2 = document.getElementById("buyPrice2");
var buya2 = document.getElementById("buynum2");
buyn2.innerText = item2.name + " ---- ";
buyp2.innerText = "Price: " + item2.value;
buya2.innerText = "Available: " + item2.amount;
var buyName2 = document
    .getElementById("buyName2")
    .textContent;

function updateMerch() { //update the items in the merchant

    // / WHERE ITEMS LAY get buy names for function show, buy and sell---- sets the
    // item 1
    var buyn1 = document.getElementById("buyName1");
    var buyp1 = document.getElementById("buyPrice1");
    var buya1 = document.getElementById("buynum1");
    buyn1.innerText = item1.name + " ---- ";
    buyp1.innerText = "Price: " + item1.value;
    buya1.innerText = "Available: " + item1.amount;
    var buyName1 = document
        .getElementById("buyName1")
        .textContent;
    // item 2
    var buyn2 = document.getElementById("buyName2");
    var buyp2 = document.getElementById("buyPrice2");
    var buya2 = document.getElementById("buynum2");
    buyn2.innerText = item2.name + " ---- ";
    buyp2.innerText = "Price: " + item2.value;
    buya2.innerText = "Available: " + item2.amount;
    var buyName2 = document
        .getElementById("buyName2")
        .textContent;

}