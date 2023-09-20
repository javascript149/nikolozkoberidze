//1.
function calculator(num) {
    num = parseInt(num);
    return num * num;
} 
let num = prompt("Enter number")
alert (calculator(num))

//2.
let fahreheitCalculator = (temp) => {
    num = parseInt(temp)
    return  (temp * 9/5) + 32
}
let temp = prompt("Enter temperature in °C")
alert (fahreheitCalculator(temp))

//3.
function reverse(str) {
    return str.split("").reverse().join("")
}
let string = 'hello'
alert (reverse(string))

//4.
let vegetables = prompt("carrot or broccoli")
switch (vegetables) {
    case "carrot":
        alert ("hello")
        break;
    case "broccoli":
        alert ("welcome")
        break;
    default:
        alert ("neither")
        break;
}

//5.
let action = "move";

switch (action) {
    case "move":
        alert ("you're moving")
        break;
    case "jump":
        alert ("you're jumping")
        break;
    case "run":
        alert ("you're running")
        break;
    default:
        alert ("invalid action")
        break;
}