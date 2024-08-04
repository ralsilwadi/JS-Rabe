const UIModule = (function () {
  function getNum1() {
    return parseFloat(window.prompt('Enter the first number:'));
  }

  function getOperator() {
    return window.prompt('Enter an operator (+, -, *, /):');
  }

  function getNum2() {
    return parseFloat(window.prompt('Enter the second number:'));
  }

  return {
    getNum1,
    getOperator,
    getNum2
  };
})();
