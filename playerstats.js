var player = {
  name: "fake",
  hp: 5,
  money: 1000, //current cash
  bagspace: 5, //max inv
  invNum: 0, //current inv
  day: 1 //current Day
};

var computer = {
  name: "Comp"
};
//player Inventory object
var playerInv = [];

//update money and stats
function updateStats() {
  playerStats.innerText = "Name: " + player.name + "\n";
  playerStats.innerText += "Hp: " + player.hp;
  playerMoney.innerText = player.money;
  $("#playDate").text("Day: " + player.day);
}
