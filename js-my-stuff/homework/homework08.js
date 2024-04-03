/* Task-1
Write a function named hasLowerCase() which takes a string argument and returns 
true if there is a lowercase letter and false if it there isn't. 

hasLowerCase("")            -> false
hasLowerCase("JAVASCRIPT")  -> false
hasLowerCase("hello")       -> true
hasLowerCase("125$")        -> false
hasLowerCase("   a   ")     -> true
*/
console.log("\n============Task-1============\n");

const hasLowerCase = (str) => str.split("").some((char) => char >= "a" && char <= "z");

console.log(hasLowerCase(""));
console.log(hasLowerCase("JAVASCRIPT"));
console.log(hasLowerCase("hello"));
console.log(hasLowerCase("125$"));
console.log();

/* Task-2
console.log('\n============Task-2============');
Write a function named noZero() which takes an array of numbers as argument and returns the array back with all zeros removed.

noZero([1])             -> [1]
noZero( [1, 1, 10]​)     -> [1, 1, 10]
noZero([0, 1, 10])      -> [1, 10]
noZero([0, 0, 0])       -> []
noZero([10, 100 0])     -> [10, 100]
*/
console.log("\n============Task-2============\n");
const noZero = (arr) => arr.filter((elem) => elem !== 0);
console.log(noZero([0, 0, 0]));

/* Task-3
console.log('\n============Task-3============');
Write a function named numberAndSquare() which takes an array of numbers as argument and returns 
a multidimensional array with all numbers squared. 

numberAndSquare([1, 2, 3])      -> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6])     -> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4])         -> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0])      -> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10])    -> [[0, 0], [1, 1], [-10, 100]]
*/
console.log("\n============Task-3============\n");
const numberAndSquare = (arr) => arr.map((elem) => [elem, elem ** 2]);
console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 0, 0]));
console.log(numberAndSquare([0, 1, -10]));

/* Task-4
console.log('\n============Task-4============');
Write a function named containsValue() which takes a string array and a string as arguments and returns 
a boolean value. Search the string variable inside of the array and return true if it exists in the array. 
If it doesn't exist, return false. 
    NOTE: Assume that array size is at least 1.
    NOTE: The method is case-sensitive.

containsValue(["abc", "foo", "javascript"], "hello")                -> false
containsValue(["abc", "def", "123"], "Abc")                         -> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")  -> true
*/
console.log("\n============Task-4============\n");
const containsValue = (arr, str) => arr.some(elem => elem.includes(str))
console.log(containsValue(["abc", "foo", "javascript"], "hello"))
console.log(containsValue(["abc", "def", "123"], "Abc"))
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"))

/* Task-5
console.log('\n============Task-5============');
Write a function named reverseSentence() which takes a string as argument and returns 
the words in reverse order.​ If there is no enough words reverse, return "There is not enough words!".

reverseSentence("Hello")                -> "There is not enough words!"
reverseSentence("Javascript is fun")    -> "Fun is javascript"
reverseSentence("This is a sentence")   -> "Sentence a is this"
*/
console.log("\n============Task-5============\n");
const reverseSentence = str => {
    const words = str.split(' ');

    if (words.length < 2) return 'There is not enough words!';

    const reversedWords = words.reverse().map(word => word.toLowerCase());

    reversedWords[0] = reversedWords[0][0].toUpperCase() + reversedWords[0].slice(1)

    return reversedWords.join(' ');
}

console.log(reverseSentence("Hello")); 
console.log(reverseSentence("Javascript is fun")); 
console.log(reverseSentence("This is a sentence")); 

/* Task-6
console.log('\n============Task-6============');
Write a function named removeStringSpecialsDigits() which takes a string as argument and returns 
a string without the special characters or digits.

removeStringSpecialsDigits("123Javascript #$%is fun")   -> "Javascript is fun" 
removeStringSpecialsDigits("Cypress")                   -> "Cypress"
removeStringSpecialsDigits("Automation123#$%")          -> "Automation"
*/
console.log("\n============Task-6============\n");
const removeStringSpecialsDigits = (str) => str.split('').filter(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char === ' ')).join('')

console.log(removeStringSpecialsDigits("123Javascript #$%is fun"))
console.log(removeStringSpecialsDigits("Cypress"))
console.log(removeStringSpecialsDigits("Automation123#$%"))

/* Task-7
console.log('\n============Task-7============');
Write a function named removeArraySpecialsDigits() which takes a string array as argument and return 
back without the special characters or digits.

removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])    -> ["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"])          -> ["Cypress", "", ""]
removeArraySpecialsDigits(["Automation", "123#$%tool"])         -> ["Automation", "tool"]
*/
console.log("\n============Task-7============\n");
const removeArraySpecialsDigits = arr => arr.map(elem => removeStringSpecialsDigits(elem))

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]))
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]))
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]))

/* Task-8 (try to make sure it works with multiple common strings)
console.log('\n============Task-8============');
Write a function named getCommons() which takes two string arrays as arguments and returns all the common words.

getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] )            -> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] )   -> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )           -> ["C#"]
*/
console.log("\n============Task-8============\n");

const getCommons = (ar1, ar2) => {
    const commonWords = [];
    const setAr2 = new Set(ar2);
    for (let elem of ar1) {
        if (setAr2.has(elem) && !commonWords.includes(elem)) {
            commonWords.push(elem);
        }
    }
    return commonWords;
}

// Test cases
console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"]))
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]))
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"]))


/* Task-9
console.log('\n============Task-9============');
Write a function named noXInVariables() which takes an array as argument and returns 
an array that all the x or X removed from the elements.
    NOTE: If the element is existing of x or X letters only, then completely remove the element.

noXInVariables(["abc", 123, "#$%"])         -> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"])         -> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"])           -> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"])     -> ["yyy", "ABC"]
*/
console.log("\n============Task-9============\n");
const noXInVariables = arr => {
    arr = arr.map(elem => typeof elem === 'string' ? elem.split('').filter(char => char.toLowerCase() !== 'x').join('') : elem)
    return arr.filter(elem => elem !== '')
}

console.log(noXInVariables(["x", 123, "#$%"]))
