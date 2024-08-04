const num1 = prompt('num1: ')
const operator = prompt('operator: ')
const num2 = prompt('num2: ')


const math = (num1, operator, num2) {
switch (operator) {
  case '+':
    return num1 + num2
  case '-':
    return num1 - num2
  case '*':
    return num1 * num2
  case '/':
    return num1 / num2
}
}

console.log(math)