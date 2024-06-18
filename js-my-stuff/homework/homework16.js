console.log("\n============Task-1============\n");

const toInitials = str => str.trim().split(' ').map(n => n[0] + '.').join(' ');

console.log(toInitials("Joe Doe")); // "J. D."
console.log(toInitials("Alex Reyes")); // "A. R."
console.log(toInitials("Tom Cruise")); // "T. C."
console.log(toInitials("Bruce Willis")); // "B. W."
console.log(toInitials("Ja Le")); // "J. L."

console.log("\n============Task-2============\n");

const hasNumbers = str => str.split('').some((elem) => elem >= '0' && elem <= '9')

console.log(hasNumbers("John is 34 years old") )
console.log(hasNumbers("   a   ") )

console.log("\n============Task-3============\n");

const elementLength = arr => arr.map((elem) => elem.length)

console.log(elementLength( [ "Hello", "World" ] )); // [ 5, 5 ]
console.log(elementLength( [ "Apple", "Banana", "Orange", "Pear" ] )); // [ 5, 6, 6, 4 ]
console.log(elementLength( ["BMW", "Mercedes", "Audi" ] )); // [ 3, 8, 4 ]
console.log(elementLength( [ ] )); // [ ]
console.log(elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] )); // [ 10, 0, 6, 10 ]

console.log("\n============Task-4============\n");

const isArraySumEvenOrOdd = arr => arr.reduce((sum, elem) => sum + elem, 0) % 2 === 0 ? 'even' : 'odd'

console.log(isArraySumEvenOrOdd( [ ] ) )
console.log(isArraySumEvenOrOdd( [ 0,-1,-5 ] ))
console.log(isArraySumEvenOrOdd( [ 7,1, 8,1 ] ))
console.log(isArraySumEvenOrOdd( [ 0,0 ] )  )
console.log(isArraySumEvenOrOdd( [ 1,1,1,1,1 ] ))

console.log("\n============Task-5============\n");

const reverse = str => str.split('').reverse().join('');

console.log("\n============Task-6============\n");

const reverseWords = str => str.split(' ').map(word => word.split('').reverse().join('')).join(' ');


