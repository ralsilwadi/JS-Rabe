const num1 = UIModule.getNum1();
const operator = UIModule.getOperator();
const num2 = UIModule.getNum2();

switch (operator) {
  case '+':
    console.log(MATHModule.add(num1, num2));
    break;
  case '-':
    console.log(MATHModule.subtract(num1, num2));
    break;
  case '*':
    console.log(MATHModule.multiply(num1, num2));
    break;
  case '/':
    console.log(MATHModule.divide(num1, num2));
    break;
  default:
    console.log('Invalid Operator');
}
