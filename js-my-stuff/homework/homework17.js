console.log("\n============Task-1============\n");

const findMedian = (arr1, arr2) => {
  const arr = [...arr1, ...arr2].sort((a, b) => a - b);
  const middle = Math.floor(arr.length / 2)

 return arr.length % 2 !== 0 ? arr[middle] : (arr[middle - 1] + arr[middle]) / 2;
}

console.log(findMedian([1, 3], [2]));
console.log(findMedian([1, 2], [3, 4]));
console.log(findMedian([4], [3]));
console.log(findMedian([4], []));
console.log(findMedian([0], [0,1]));
console.log(findMedian([3], [3]));

console.log("\n============Task-2============\n");

function calculateFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
      result *= i;
  }
  return result;
}


console.log(calculateFactorial(0));  
console.log(calculateFactorial(1));  
console.log(calculateFactorial(5)); 
console.log(calculateFactorial(6));  
console.log(calculateFactorial(10)); 
console.log(calculateFactorial(4));  

console.log("\n============Task-3============\n");

function calculateGCD(a, b) {

  while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }

  return a;
}

console.log(calculateGCD(8, 12)); 
console.log(calculateGCD(17, 5)); 
console.log(calculateGCD(48, 18));
console.log(calculateGCD(0, 5));  
console.log(calculateGCD(21, 14));
console.log(calculateGCD(60, 48)); 

console.log('\n============Task-4============');

const calculateLCM = (num1, num2) => (num1 * num2) / calculateGCD(num1, num2)

console.log(calculateLCM(8, 12));
console.log(calculateLCM(17, 5));
console.log(calculateLCM(48, 18));
console.log(calculateLCM(0, 5));
console.log(calculateLCM(21, 14));
console.log(calculateLCM(60, 48));
