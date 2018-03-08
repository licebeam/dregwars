class locClass { //base location class, contains a lot of logic
    constructor(name, desc, sear) {

        this.name = name;
        this.desc = desc;

    }
    randomEvent() { //random event method
        return eventResult[Math.floor(Math.random() * (1 - 0 + 1)) + 0]
    };

    searchEvent() { //random search event for event
        return searchResult[Math.floor(Math.random() * (1 - 0 + 1)) + 0]
    }

    dealerEvent() { //random search event for dealer
        return dealerResult[Math.floor(Math.random() * (2 - 0 + 1)) + 0]
    }
}

//inhereted classes
var loc1 = new locClass;
loc1.name = "Downtown";
loc1.desc = "This is Downtown.";

var loc2 = new locClass;
loc2.name = "East Side";
loc2.desc = "Corporate office district";

var loc3 = new locClass;
loc3.name = "West Side";
loc3.desc = "The slums of Detroit.";

var loc4 = new locClass;
loc4.name = "South End";
loc4.desc = "The proverbial end.";

//data structures for random events
var searchResult = ["You found nothing", "You found something"];
var eventResult = ["It's Sunny Out", "It's Raining"];
var dealerResult = ["Cyber", "Dreg", "Gear"];