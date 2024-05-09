console.log("\n============Task-1============\n");

const makeNegative = num => num > 0 ? -num : num

console.log(makeNegative(10) )
console.log(makeNegative( -7)     )
console.log(makeNegative( 0)       )
console.log(makeNegative(0.45)   )

console.log("\n============Task-2============\n");

const isSumEvenOrOdd = (num1, num2, num3) => (num1 + num2 + num3) % 2 === 0 ? 'even' : 'odd'

console.log(isSumEvenOrOdd(0, 1, 4) )
console.log(isSumEvenOrOdd(0, -1, -5)      )
console.log(isSumEvenOrOdd(0, 0, 0) )
console.log(isSumEvenOrOdd(7, 1, 9))
console.log(isSumEvenOrOdd(1, 1, 1)       )

console.log("\n============Task-3============\n");

const decimal2 = arr => arr.map(elem => Math.round(elem * 100) / 100)

console.log(decimal2( [94.356, 8.9752] )  )
console.log(decimal2( [76.62, 128.4, 84] ))
console.log(decimal2( [20987, 3.53245, 12.345, 32.9] ) )
console.log(decimal2( [ ] )  )
console.log(decimal2( [4.35623, 8.9742] ) )

console.log("\n============Task-4============\n");

const myPow = (num1, num2) => {
  let result = 1
  for (let i = 1; i <= num2; i++) {
    result *= num1
  }
  return result
}

console.log(myPow(3, 3) )
console.log(myPow(10, 1) )
console.log(myPow(100, 0) )
console.log(myPow(1, 1) )
console.log(myPow(4, 2)   )
console.log(myPow(0, 0))
console.log(myPow(5, 3) )

console.log("\n============Task-5============\n");

const findLongestWord = str => str.split(' ').reduce((word, elem) => elem.length > word.length ? elem : word, '')

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWord("This is a sample string for testing")  )
console.log(findLongestWord("One two ten") )
console.log(findLongestWord("") )
console.log(findLongestWord("      ") )
