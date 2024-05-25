console.log("\n============Task-1============");

const repeatingX = (str) => {
  let arr = str.toLowerCase().split("");
  return arr.some((elem, index) => elem === "x" && arr[index + 1] === "x");
};

const repeatingX2 = (str) => str.toLowerCase().split("").some((elem, index, arr) => elem === "x" && arr[index + 1] === "x");

console.log(repeatingX("xTechxGlobalx"));
console.log(repeatingX("Hello Xx World"));
console.log(repeatingX("x x"));
console.log(repeatingX(""));
console.log(repeatingX("xxxxx"));

console.log("\n============Task-2============");

const isPerfectSquare = (num) => num === 0 || num === 1 || Math.sqrt(num) % 1 === 0 ? true : false;

console.log(isPerfectSquare(25));
console.log(isPerfectSquare(24));
console.log(isPerfectSquare(0));
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(-1));
console.log(isPerfectSquare(144));

console.log("\n============Task-3============");

const convertTemperature = (num, str) => {
  switch (str) {
    case "Celsius":
      return (num * 9) / 5 + 32;
    case "Fahrenheit":
      return ((num - 32) * 5) / 9;
    default:
      return "Invalid Scale";
  }
};

console.log(convertTemperature(100, 'Celsius') )
console.log(convertTemperature(32, 'Fahrenheit') )
console.log(convertTemperature(0, 'Celsius') )
console.log(convertTemperature(212, 'Fahrenheit') )
console.log(convertTemperature(-40, 'Celsius') )
console.log(convertTemperature(-40, 'Fahrenheit') )

console.log("\n============Task-4============");

const sumOfEvenNumbers = arr => arr.reduce((sum, elem) => elem % 2 === 0 ? sum + elem : sum, 0)

console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ) )
console.log(sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ) )
console.log(sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ) )
console.log(sumOfEvenNumbers( [ ] ) )
console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ) )
console.log(sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] ) )

console.log("\n============Task-5============");

const capsOdds = arr => arr.map((elem, index) => index % 2 !== 0 ? elem.toUpperCase() : elem)

console.log(capsOdds(["Hello", "World"]) )
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]) )
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]) )
console.log(capsOdds([ ]) )
console.log(capsOdds(["John !@#$%", "^&*() Doe"]) )