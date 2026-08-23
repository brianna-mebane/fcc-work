const num = 7;

function factorialCalculator(baseNum) {
    let result = 1;

    for (let i = 1; i <= baseNum; i++) {
        result *= i;
    }

    return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);