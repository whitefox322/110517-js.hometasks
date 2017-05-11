do {
    var firstNumber = parseInt(prompt("Enter the first number", "First number"));
    var secondNumber = parseInt(prompt("Enter the second number", "Second number"));
    var action = prompt("Choose the action", "+,-,*,/");

    switch (action) {
        case "+": {
            var result = firstNumber + secondNumber;
            break;
        }

        case "-": {
            result = firstNumber - secondNumber;
            break;
        }

        case "*": {
            result = firstNumber * secondNumber;
            break;
        }

        case "/": {
            result = firstNumber / secondNumber;
            break;
        }

        default: {
            result = "Wrong action!";
            break;
        }
    }

    alert(result);
    var question = confirm("Do you wanna continue?");
} while (question);