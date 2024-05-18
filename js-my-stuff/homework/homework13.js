
/* Task-1
Write a function named countVC() which takes a string argument and returns an object with the count of vowels and consonants.
countVC("Hello")​             		    -> {vowels: 2, consonants: 3}
countVC("Programming")​ 	            -> {vowels: 3, consonants: 8}
countVC("123AbC")​                  	-> {vowels: 1, consonants: 2}
countVC("123!@#xyz")​                	-> {vowels: 0, consonants: 3}
countVC("")​                         	-> {vowels: 0, consonants: 0}
*/
console.log('\n============Task-1============');

const countVC = str => {
  str = str.toLowerCase()
 let counts = {vowels: 0, consonants: 0}
  for (let char of str) {
    if (char >= 'a' && char <= 'z') {
      if ('aeiou'.includes(char)) counts.vowels++
      else counts.consonants++
    }
  }
return counts
}
console.log(countVC("Hello"))
console.log(countVC("Programming"))
console.log(countVC("123AbC"))
console.log(countVC("123!@#xyz"))
console.log(countVC(""))


/* Task-2
Write a function named countChars() which takes a string argument and returns an object with the count of letters, numbers, and specials.
  NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do not count towards any category
countChars("Hello")​                       	 -> {letters: 5}
countChars("Programming 123")​ 	             -> {letters: 11, numbers: 3}
countChars("123AbC!@#")​             	       -> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")​             	     -> {numbers: 10}
countChars("     ")​                         -> {}
countChars("")​                              -> {}
*/
console.log('\n============Task-2============');

const countChars = str => {
  str = str.toLowerCase()
  let result = {letters: 0, numbers: 0, specials: 0}
   for (const char of str) {
    if (char === ' ') continue
    if (char >= 'a' && char <= 'z') result.letters++ 
    else if (char >= '0' && char <= '9') result.numbers++
    else result.specials++
   }

   for (let elem in result) {
    if (result[elem] === 0) delete result[elem];
   }

 return result
}
console.log(countChars("Hello"))
console.log(countChars("Programming 123"))
console.log(countChars("123AbC!@#"))
console.log(countChars("0987654321"))
console.log(countChars("     "))
console.log(countChars(""))


/* Task-3
Write a function named maxOccurrences() which takes a string argument and returns 
the character that appears the most number of times in the string.
  NOTE: If there is a tie, return the first one that appears in the string. This task is case sensitive. 
  Ignore spaces. If the string is empty or consist of spaces only, then return an empty string.
maxOccurrences("Hello")​           -> "l"
maxOccurrences("Occurrences") 	  -> "c"
maxOccurrences("    ab    ")​    	 -> "al"
maxOccurrences("12   3   21")   	-> "1"
maxOccurrences("      ")   ​ 	     -> ""
maxOccurrences("")   		          -> ""

*/
console.log('\n============Task-3============');
const freqChart = (str) => {
  return str.toLowerCase().split('').filter(elem => elem !== ' ').reduce((obj, char) => {
      obj[char] = (obj[char] || 0) + 1;
      return obj;
  }, {});
  
}
const maxOccurrences = str => {
  const freq = freqChart(str) 
  let max = 0;
  let result
  for (const key in freq) {
    if (freq[key] > max) {
      max = freq[key];
      result = key
    }
  }

  return result || '';
}


console.log(maxOccurrences("Hello"))
console.log(maxOccurrences("Occurrences"))
console.log(maxOccurrences("    ab    "))
console.log(maxOccurrences("12   3   21"))
console.log(maxOccurrences("      "))
console.log(maxOccurrences(""))


/* Task-4
console.log('\n============Task-4============');
Write a function named starOut() which takes a string argument and returns 
it back with every star removed as well as the right and left of the star.
  NOTE: If there are 2 stars next to each other than remove the next non star
  So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
starOut("ab*cd") 	    -> "ad"
starOut("ab**cd") 	  -> "ad"
starOut("xm*sm*sy") 	-> "xy"
starOut("abc")   ​	   -> "abc"
starOut("***")   	    -> ""
starOut("   ")   ​ 	   -> "   "
starOut("")   	      -> ""
*/

/* Task-5
console.log('\n============Task-5============');
Write a function named romanToInt() which takes a string roman numeral as its arguments and return 
the roman numeral converted to the number. A roman numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 112
NOTE: 
Symbol       Value
I               1
V               5
X               10
L               50
C               100
D               500
M               1000
romanToInt("I") 		            -> 1
romanToInt("IV") 		            -> 4
romanToInt("CXII") 		          -> 112
romanToInt("MMM") 		          -> 3000
romanToInt("MMMDCCCLXXXVIII")  	-> 3888
romanToInt("MDCLXVI")  	        ​-> 1666
*/