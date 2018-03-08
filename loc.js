class locClass {
    constructor(name, desc, sear) {

        this.name = name;
        this.desc = desc;
        this.sear = sear;
    }
    randomEvent() { //random event method
        return "poop";
    };
}

var loc1 = new locClass;
loc1.name = "Downtown";
loc1.desc = "This is Downtown.";
loc1.sear = ""

var loc2 = new locClass;
loc2.name = "East Side";
loc2.desc = "A smelly dump of a town.";

var loc3 = new locClass;
loc3.name = "West Side";
loc3.desc = "The slums of Detroit.";

var loc4 = new locClass;
loc4.name = "South End";
loc4.desc = "The proverbial end of the city.";