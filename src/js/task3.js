for (var number = 1, result = 1; number <=100; number++) {
    if (number % 3 === 0) {
        result = result * number;
    }

    console.log(result);
}