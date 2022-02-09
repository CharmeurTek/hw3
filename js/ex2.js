var day = prompt("Please enter a day of the week : (sun, mon, tue, wed, thu, fri, and sat)");

switch(day) {
    case "sun":
        console.log("You entered: " + day)
        console.log("The following day is: mon")
        break;
    case "mon":
        console.log("You entered: " + day)
        console.log("The following day is: tue")
        break;
    case "tue":
        console.log("You entered: " + day)
        console.log("The following day is: wed")
        break;
    case "wed":
        console.log("You entered: " + day)
        console.log("The following day is: thu")
        break;
    case "thu":
        console.log("You entered: " + day)
        console.log("The following day is: fri")
        break;
    case "fri":
        console.log("You entered: " + day)
        console.log("The following day is: sat")
        break;
    case "sat":
        console.log("You entered: " + day)
        console.log("The following day is: sun")
        break;
    default:
        console.log("invalid input !")
}
