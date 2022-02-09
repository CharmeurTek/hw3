var name = prompt("Please enter your name");
var nb_units = prompt("Please enter your number of units completed at college");

if (!Number.isInteger(nb_units) || nb_units < 0) {
    console.log("Error: your number of your units is invalid !")
}

console.log("Hello " + name);
switch (true) {
    case nb_units >= 0 && nb_units <= 30:
    console.log("Your grade standing is Freshman");
    break;
    case nb_units >= 31 && nb_units <= 60:
    console.log("Your grade standing is Sophomore");
    break;
    case nb_units >= 61 && nb_units <= 90:
    console.log("Your grade standing is Junior");
    break;
    case nb_units >= 91:
    console.log("Your grade standing is Senior");
    break;
}