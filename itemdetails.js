var item1 = {
  name: "Credit Stick",
  value: 100, // this is the range of price this can be.
  amount: 10, // this is the range of items this can be.
  dvalue: 100, // default
  damount: 10, // default
  sell: false
};

var item2 = {
  name: "Cyber Wares",
  value: 1000, // this is the range of price this can be.
  amount: 10, // this is the range of items this can be.
  dvalue: 1000, // default
  damount: 10, // default
  sell: false
};

var item3 = {
  name: "Mega Mushrooms",
  value: 2000, // this is the range of price this can be.
  amount: 5, // this is the range of items this can be.
  dvalue: 2000, // default
  damount: 5, // default
  sell: false
};

var item4 = {
  name: "Injector",
  value: 3333, // this is the range of price this can be.
  amount: 10, // this is the range of items this can be.
  dvalue: 3333, // default
  damount: 10, // default
  sell: false
};
// / WHERE ITEMS LAY get buy names for function show, buy and sell---- sets the
// item 1
var buyn1 = document.getElementById("buyName1");
var buyp1 = document.getElementById("buyPrice1");
var buya1 = document.getElementById("buynum1");
buyn1.innerText = item1.name + " -- ";
buyp1.innerText = "Price: " + item1.value;
buya1.innerText = "Available: " + item1.amount;
var buyName1 = document.getElementById("buyName1").textContent;
// item 2
var buyn2 = document.getElementById("buyName2");
var buyp2 = document.getElementById("buyPrice2");
var buya2 = document.getElementById("buynum2");
buyn2.innerText = item2.name + " -- ";
buyp2.innerText = "Price: " + item2.value;
buya2.innerText = "Available: " + item2.amount;
var buyName2 = document.getElementById("buyName2").textContent;
// item 3
var buyn3 = document.getElementById("buyName3");
var buyp3 = document.getElementById("buyPrice3");
var buya3 = document.getElementById("buynum3");
buyn3.innerText = item3.name + " -- ";
buyp3.innerText = "Price: " + item3.value;
buya3.innerText = "Available: " + item3.amount;
var buyName3 = document.getElementById("buyName3").textContent;
// item 4
var buyn4 = document.getElementById("buyName4");
var buyp4 = document.getElementById("buyPrice4");
var buya4 = document.getElementById("buynum4");
buyn4.innerText = item4.name + " -- ";
buyp4.innerText = "Price: " + item4.value;
buya4.innerText = "Available: " + item4.amount;
var buyName4 = document.getElementById("buyName4").textContent;

function updateMerch() {
  //update the items in the merchant
  // / WHERE ITEMS LAY get buy names for function show, buy and sell---- sets the
  // item 1
  var buyn1 = document.getElementById("buyName1");
  var buyp1 = document.getElementById("buyPrice1");
  var buya1 = document.getElementById("buynum1");
  buyn1.innerText = item1.name + " -- ";
  buyp1.innerText = "$: " + item1.value;
  buya1.innerText = "x " + item1.amount;
  var buyName1 = document.getElementById("buyName1").textContent;
  // item 2
  var buyn2 = document.getElementById("buyName2");
  var buyp2 = document.getElementById("buyPrice2");
  var buya2 = document.getElementById("buynum2");
  buyn2.innerText = item2.name + " -- ";
  buyp2.innerText = "$: " + item2.value;
  buya2.innerText = "x " + item2.amount;
  var buyName2 = document.getElementById("buyName2").textContent;
  // item 3
  var buyn3 = document.getElementById("buyName3");
  var buyp3 = document.getElementById("buyPrice3");
  var buya3 = document.getElementById("buynum3");
  buyn3.innerText = item3.name + " -- ";
  buyp3.innerText = "$: " + item3.value;
  buya3.innerText = "x " + item3.amount;
  var buyName3 = document.getElementById("buyName3").textContent;
  // item 4
  var buyn4 = document.getElementById("buyName4");
  var buyp4 = document.getElementById("buyPrice4");
  var buya4 = document.getElementById("buynum4");
  buyn4.innerText = item4.name + " -- ";
  buyp4.innerText = "$: " + item4.value;
  buya4.innerText = "x " + item4.amount;
  var buyName4 = document.getElementById("buyName4").textContent;
}
//change locations for buttons
function changeLocation() {
  item1.value = item1.dvalue;
  item1.amount = item1.damount;
  item2.value = item2.dvalue;
  item2.amount = item2.damount;
  item3.value = item3.dvalue;
  item3.amount = item3.damount;
  item4.value = item4.dvalue;
  item4.amount = item4.damount;

  var modifier1 = getRandomNum(1, 10);
  var modifier2 = getRandomNum(1, 10);
  item1.value *= modifier1;
  item1.amount *= modifier2;

  var modifier3 = getRandomNum(1, 10);
  var modifier4 = getRandomNum(1, 10);
  item2.value *= modifier3;
  item2.amount *= modifier4;

  var modifier5 = getRandomNum(1, 10);
  var modifier6 = getRandomNum(1, 10);
  item3.value *= modifier5;
  item3.amount *= modifier6;

  var modifier7 = getRandomNum(1, 10);
  var modifier8 = getRandomNum(1, 10);
  item4.value *= modifier7;
  item4.amount *= modifier8;
  updateMerch();
}
