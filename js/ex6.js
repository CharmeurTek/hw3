var hours = prompt("Please enter a hours number: ");
var minutes = prompt("Please enter a minutes number: ");
var secondes = prompt("Please enter a secondes number: ");
hours = parseInt(hours);
minutes = parseInt(minutes);
secondes = parseInt(secondes);
var error = 0;

if (hours < 0 || hours > 23 || !Number.isInteger(hours)) {
    console.log("hours error, invalid input");
    error = 1;
}
else if (minutes < 0 || minutes > 60 || !Number.isInteger(minutes)) {
    console.log("minutes error, invalid input");
    error = 1;
}
else if (secondes < 0 || secondes > 60 || !Number.isInteger(secondes)) {
    console.log("secondes error, invalid input");
    error = 1;
}
if (error != 1) {
    secondes++;
    if (secondes == 60) {
        secondes = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
            if (hours == 24) {
                hours = 0;
            }
        }
    }
    console.log(hours + "h" + minutes + "m" + secondes + "s");
}