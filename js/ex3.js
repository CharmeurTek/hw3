var firstnumber = prompt("Please enter a number (no decimal): ");
var secondnumber = prompt("Please enter a number (no decimal): ");

firstnumber = parseInt(firstnumber);
secondnumber = parseInt(secondnumber);

if (!Number.isInteger(firstnumber)) {
    console.log("Error: your first number is invalid !")
}
else if (!Number.isInteger(secondnumber)) {
    console.log("Error: your second number is invalid !")
}

console.log( `Addition: ${firstnumber + secondnumber}`);
console.log( `Subtraction: ${firstnumber - secondnumber}`);
console.log( `Multiplication: ${firstnumber * secondnumber}`);
console.log( `Division: ${firstnumber / secondnumber}`);
console.log( `Modulo: ${firstnumber % secondnumber}`);