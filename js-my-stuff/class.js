// const swapFirstLastWord = (str) => {
//   let strArr = str.trim().split(' ')
//   if (strArr.length < 2) return ''
//   let first = strArr[0]
//   let middle = strArr.slice(1,-1).join(' ')
//   let last = strArr.at(-1)
//   return strArr.length >= 3 ? `${last} ${middle} ${first}` : `${last} ${first}`
// }


// console.log(swapFirstLastWord("Hello World"));
// console.log(swapFirstLastWord("I like JavaScript"));
// console.log(swapFirstLastWord("foo bar foo bar"));
// console.log(swapFirstLastWord(""));
// console.log(swapFirstLastWord("    "));
// console.log(swapFirstLastWord("Hello"));
// console.log(swapFirstLastWord("Hello  "));


const factorial = num => {
  let result = 1
  for (let i = 2; i <= num; i++) {
    result *= i
  }
  return result
}


const removeExtraSpaces = str => str.trim().split(' ').filter((elem) => elem !== '').join(' ')

const firstDuplicate = arr => arr.find((elem) => arr.indexOf(elem) !== arr.lastIndexOf(elem)) ?? -1

const getDuplicates = arr => [...new Set(arr.filter((elem) => arr.indexOf(elem) !== arr.lastIndexOf(elem)))] ?? -1

const reverseStringWords = str => str.trim().split(' ').map((elem) => elem.split('').reverse().join('')).join(' ')

const add = (arr1, arr2) => {
  if (arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
  return arr1.map((elem, index) => elem += (arr2[index] || 0))
}

const fizzBuzz = num => {
  let result = []
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz')
    else if (i % 3 === 0) result.push('Fizz')
    else if (i % 5 === 0) result.push('Buzz')
    else result.push(i) 
  }
  return result
}


const isPalindrome = str => str.toLowerCase() === str.toLowerCase().split('').reverse().join('')

const removeDuplicates = arr => [...new Set(arr)]

const isPrime = num => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

const arrFactorial = arr => arr.map(factorial)

const findBiggestNumber = str => {
  let result = ''
  for (let char of str) {
    if (char >= '0' && char <= '9') result += char
    else result += ' '
  }
  result = result.split(' ')
  return Math.max(...result)
}


const findSumNumbers = str => {
  let result = ''
  for (let char of str) {
    if (char >= '0' && char <= '9') result += char
    else result += ' '
  }
  result = result.split(' ')
  return result.reduce((sum, elem) => sum + Number(elem) , 0)
}

const isPowerOf3 = num => {
  for (let i = 1; i <= num; i*=3) {
    if (num === i) return true
  }
  return false
}

const fibonacciSeries1 = num => {
  let result = [0, 1]
  for (i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2])
  }
  return result
}

const fibonacciSeries2 = num => {
  let result = [0, 1]
  for (i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2])
  }
  return result[result.length - 1]
}

const findUniques = (arr1, arr2) => [...new Set([...arr1, ...arr2])].filter((elem) => !(arr1.includes(elem) && arr2.includes(elem)))

const reverseNumber = num => {
  let revNum = 0
  while (num > 0) {
    const digit = num % 10
    revNum = (revNum * 10) + digit
    num = Math.floor(num / 10) 
  }
  return revNum
}

const isArmstrong = num => num === (num.toString().split('').reduce((arms, elem,_,arr) => arms + elem**arr.length , 0))

console.log(isArmstrong(153))
console.log(isArmstrong(1634))
console.log(isArmstrong(10))

const freqChart = str => str.toLowerCase().replace(' ', '').split('').reduce((chart, elem) => (chart[elem] || 0) + 1 , {})

console.log(freqChart('hello'))

// const isAnagram = (str1, str2)
