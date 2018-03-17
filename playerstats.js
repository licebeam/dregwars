var player = {
    name: "fake",
    hp: 5,
    money: 10000,
    bagspace: 10
}

var computer = {
    name: "Comp"
}
//player Inventory object
var playerInv = []

//update money and stats
function updateStats() {
    playerStats.innerText = "Name: " + player.name + "\n";
    playerStats.innerText += "Hp: " + player.hp;
    playerMoney.innerText = player.money;
}
