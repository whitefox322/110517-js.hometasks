var firstNumber = parseInt(prompt("Enter first number", "First number"));
var secondNumber = parseInt(prompt("Enter second number", "Second number"));

if (firstNumber > secondNumber) {
    for (var result = 0; firstNumber >= secondNumber; firstNumber--) {
        result = result + firstNumber;
    }
    alert(result);
}
else if (firstNumber < secondNumber) {
    for (result = 0; firstNumber <= secondNumber; firstNumber++) {
        result = result + firstNumber;
    }
    alert(result);
}
else {
    alert("Wrong numbers!");
}