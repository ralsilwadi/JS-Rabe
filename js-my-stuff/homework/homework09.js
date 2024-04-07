console.log("\n============Task-1============\n");

const fizzBuzz1 = (num) => num % 3 === 0 && num % 5 === 0 ? 'FizzBuzz' : num % 3 === 0 ? 'Fizz' : num % 5 === 0 ? 'Buzz' : num

console.log(fizzBuzz1(3));

console.log("\n============Task-2============\n");

const fizzBuzz2 = (num) => {
    let nums = []
    for (i = num; i >= 1; i--) {
        nums.unshift(i)
    }
    return nums.map(elem => fizzBuzz1(elem))
}

console.log(fizzBuzz2(15))

console.log("\n============Task-3============\n"); 

const findSumNumbers = (str) => str.split(/\D+/).reduce((sum, num) => sum += Number(num), 0)

console.log(findSumNumbers("abc$"));     
console.log(findSumNumbers("a1b4c  6#")); 
console.log(findSumNumbers("ab110c045d"));         
console.log(findSumNumbers("525")); 

/*
const findSumNumbers = (str) => {
    let currentNumber = '';
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!isNaN(parseInt(char))) {
            // If character is a digit, add it to the currentNumber
            currentNumber += char;
        } else {
            // If character is not a digit, add the currentNumber to sum
            if (currentNumber !== '') {
                sum += parseInt(currentNumber);
                currentNumber = ''; // Reset currentNumber for next number
            }
        }
    }

    // Add the last number if currentNumber is not empty
    if (currentNumber !== '') {
        sum += parseInt(currentNumber);
    }

    return sum;
};

const str = "abc123def456ghi789";
console.log(findSumNumbers(str)); // Output: 1368
*/

console.log("\n============Task-4============\n"); 

const findBiggestNumber = (str) => {
    let currentNumber = '';
    let nums = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!isNaN(parseInt(char))) currentNumber += char
        else if (currentNumber !== '') {
        nums.push(parseInt(currentNumber))
        currentNumber = ''
        }
    }

    if (currentNumber !== '') {
        nums.push(parseInt(currentNumber));
    }
    if (nums.length === 0) return 0
    return Math.max(...nums)
}

console.log(findBiggestNumber("abc$"))
console.log(findBiggestNumber("a1b4c  6#"))
console.log(findBiggestNumber("ab110c045d") )
console.log(findBiggestNumber("525") )
console.log(findBiggestNumber("3 for 10 dollars"))

console.log("\n============Task-5============\n"); 

function countOccurrencesOfCharacters(str) {
    if (str.length === 0) return ''

    let result = ''
    let count = 1
    let currentChar = str[0]

    for (let i = 1; i < str.length; i++) {
        const char = str[i];
        if (currentChar === char) {
            count++
        } else {
            result += count + currentChar;
            currentChar = char;
            count = 1
        }
    }
    result += count + currentChar;

    return result;
}


console.log(countOccurrencesOfCharacters("aaAAa"))

console.log("\n============Task-6============\n");

const fibonacciSeries1 = num => {
    result = [0, 1]
    for (let i = 2; i < num; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result
}

console.log(fibonacciSeries1(8))

console.log("\n============Task-7============\n");

const fibonacciSeries2 = num => num === 1 ? 0 : num === 2 ? 1 : fibonacciSeries2(num - 1) + fibonacciSeries2(num - 2)

console.log(fibonacciSeries2(9))

