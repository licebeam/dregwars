var player = {
  name: "Decker",
  hp: 5,
  money: 1000, //current cash
  bagspace: 4, //max inv
  invNum: 0, //current inv
  day: 1, //current Day
  loan: 1000000, //loan amount
  loanday: 30, //days until game over
  notor: 0 //player notoriety
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
  $("#playerLoan").text(" Loan: " + player.loan);
}

var playerEquip = {
  bag: "Pockets",
  armor: "Leather Jacket",
  weapon: "Fist",
  implant: "None"
};
