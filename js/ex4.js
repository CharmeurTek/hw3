var trynb = 0;
var password;

while (password !== "secret" && trynb != 3) {
    password = prompt("Please enter your password: ");
    trynb++;
}
if (password == "secret") {
    console.log("You entered the correct password after " + trynb + " attempt(s)");
}
else if (trynb == 3) {
    console.log("Your account is locked!  You failed to enter the correct password " + trynb +" times");
}