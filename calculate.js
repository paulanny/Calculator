var num1 = parseFloat(prompt("Number1:"));
var oper = prompt("Operator:");
var num2 = parseFloat(prompt("Number2:"));

if (oper == "+") {
  alert(num1 + num2);
} else if (oper == "-") {
  alert(num1 - num2);
} else if (oper == "/") {
  alert(num1 / num2);
} else if (oper == "*") {
  alert(num1 * num2);
} else {
  alert("Invalid Operator");
}

if (isNaN(num1)) {
  alert("Number1 is invalid!, input a number");
}
if (isNaN(num2)) {
  alert("Number2 is invalid!, input a number");
}
