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

console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]))