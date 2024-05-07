console.log("\n============Task-1============\n");

const countPalindrome = (str) => str.toLowerCase().trim().split(" ").reduce((count, elem) => elem !== "" && elem === elem.split("").reverse().join("") ? count + 1: count, 0);

console.log(countPalindrome("Mom and Dad"));
console.log(countPalindrome("See you at noon"));
console.log(countPalindrome("Kayak races attracts racecar drivers"));
console.log(countPalindrome(""));
console.log(countPalindrome("No palindrome here"));

console.log("\n============Task-2============\n");

const sum = (arr, bool) => arr.filter((elem, index) => (bool ? index % 2 === 0 : index % 2 !== 0)).reduce((sum, elem) => sum + elem, 0);

const sum2 = (arr, bool) => {
  let sum = 0;
  if (bool) {
    for (let i = 0; i < arr.length; i += 2) {
      sum += arr[i];
    }
  } else {
    for (let i = 1; i < arr.length; i += 2) {
      sum += arr[i];
    }
  }
  return sum;
};

console.log(sum([1, 5, 10], true));
console.log(sum([3, 7, 2, 5, 10], false));
console.log(sum([-1, 1, -2, 2], true));
console.log(sum([0, -1, 15, 1], false));
console.log(sum([1, 2, 3, 4, -4], true));

console.log("\n============Task-3============\n");

const nthChars = (str, num) => str.split("").filter((char, index) => (index + 1) % num === 0).join("");

const nthChars2 = (str, num) => {
  let result = "";
  let counter = 1;
  for (let char of str) {
    if (counter === num) {
      result += char;
      counter = 0;
    }
    counter += 1;
  }
  return result;
};

console.log(nthChars("Java", 2));
console.log(nthChars("JavaScript", 5));
console.log(nthChars("Java", 3));
console.log(nthChars("Hi", 4));
console.log(nthChars("0123456789", 2));

console.log("\n============Task-4============\n");

const freqChart = (str) => {
  return str.toLowerCase().split('').filter(elem => elem !== ' ').reduce((obj, char) => {
      obj[char] = (obj[char] || 0) + 1;
      return obj;
  }, {});
}

const canFormString = (str1, str2) => {
  const freqStr1 = freqChart(str1);
  const freqStr2 = freqChart(str2);

  for (const char in freqStr2) {
    if (char === ' ') continue
    if (freqStr2[char] > (freqStr1[char] || 0)) return false
  }
  return true;
}

console.log(canFormString("Hello", "Hi"));
console.log(canFormString("programming", "gaming"));
console.log(canFormString("halogen", "hello"));
console.log(canFormString("CONVERSATION", "voices rant on"));
console.log(canFormString("12", "123"));

console.log("\n============Task-5============\n");

const isAnagram = (str1, str2) => {
  const freqStr1 = freqChart(str1);
  const freqStr2 = freqChart(str2);
  
  if (Object.keys(freqStr1).length !== Object.keys(freqStr2).length) return false
  for (const char in freqStr1) {
    if (freqStr2[char] !== freqStr1[char]) return false
  }
  return true;
}

console.log(isAnagram("Apple", "Peach")  )
console.log(isAnagram("listen", "silent")  )
console.log(isAnagram("astronomer", "moon starer")  )
console.log(isAnagram("CINEMA", "iceman")  )
console.log(isAnagram("123", "1234") )

console.log("\n============Task-6============\n");

const count = (arr, bool) => {
  if (bool) return arr.reduce((count, elem) => elem % 2 === 0 ? count + 1 : count, 0)
  else return arr.reduce((count, elem) => elem % 2 !== 0 ? count + 1 : count, 0)
}

console.log(count([1, 5, 10], true) )
console.log(count([3, 7, 2, 5, 10], false) )
console.log(count([-1, 1, -2, 2], true) )
console.log(count([0, -1, 15, 1], false) )
console.log(count([1, 2, 3, 4, -4], true) )

console.log("\n============Task-7============\n");

const sumDigitsDouble = str => {
  const result = str.split('').reduce((sum, elem) => elem >= '0' && elem <= '9' ? sum + Number(elem) : sum, 0) * 2
  return result !== 0 ? result : -1
}
console.log(sumDigitsDouble("Javascript") )
console.log(sumDigitsDouble("23abc45")  )
console.log(sumDigitsDouble("Hi-23") )
console.log(sumDigitsDouble("ab12") )
console.log(sumDigitsDouble("n0numh3r3") )

console.log("\n============Task-8============\n");

const countOccurrence = (str1, str2) => {
  let result = Infinity
  let current = 0
  const freqStr1 = freqChart(str1);
  const freqStr2 = freqChart(str2);

  for (const char in freqStr2) {
    if (!freqStr1[char]) return 0;
    current = freqStr1[char] / freqStr2[char];
    result = Math.min(result, current);
  }
  return result < 1 ? 0 : result;
}

console.log(countOccurrence("Javascript", "Java") )
console.log(countOccurrence("Hello", "World") )
console.log(countOccurrence("Can I can a can", "anc")  )
console.log(countOccurrence("Hello", "l")  )
console.log(countOccurrence("IT conversations", "IT")  )

