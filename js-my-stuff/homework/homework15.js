console.log("\n============Task-1============\n");

const toCamelCase = (str) => {
  if (!str.trim().includes(' ')) return str
  return str.trim().split(' ').map((word, index) =>
    index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('');
};
console.log(toCamelCase("first name") )
console.log(toCamelCase("last     name") )
console.log(toCamelCase("   ZIP CODE") )
console.log(toCamelCase(`I Learn Java Script`)   )
console.log(toCamelCase(`helloWorld`)    )

console.log("\n============Task-2============\n");

const toSnakeCase = (str) => str.trim().split(' ').filter((elem) => elem !== '').join('_').toLowerCase()

console.log(toSnakeCase("first name") )
console.log(toSnakeCase("last    name") )
console.log(toSnakeCase("    I love Java Script") )
console.log(toSnakeCase("already_snake_case"))
console.log(toSnakeCase("hello")   )

console.log("\n============Task-3============\n");

const alternatingCases = (str) => {
  let arr = str.split('');
  let counter = true;
  
  arr.forEach((elem, index) => {
    if (elem.toLowerCase() >= 'a' && elem.toLowerCase() <= 'z') {
      if (counter) {
        arr[index] = elem.toUpperCase();
        counter = !counter;
      } else {
        arr[index] = elem.toLowerCase();
        counter = !counter;
      }
    }
  });
  
  return arr.join('');
}


console.log(alternatingCases("Hello") )
console.log(alternatingCases("basketball") )
console.log(alternatingCases("Tech Global") )
console.log(alternatingCases("") )
console.log(alternatingCases("123!@#aB") )

console.log("\n============Task-4============\n");

const isNeutral = (str1, str2) => {
  let result = [];
  
  str1.split('').forEach((char1, index) => {
    const char2 = str2[index];
    if (char1 === char2) {
      result.push(char1);
    } else {
      result.push('0');
    }
  });
  
  return result.join('');
}

console.log(isNeutral("-", "+"));             
console.log(isNeutral("-+", "-+"));           
console.log(isNeutral("-++-", "-+-+"));       
console.log(isNeutral("--++--", "++--++"));   
console.log(isNeutral("+++", "+++")); 

console.log("\n============Task-5============\n");

const isTrueOrFalse = str => {
  const strArr = str.toLowerCase().split(' ')
  return strArr.filter(elem => elem[0] >= 'a' && elem[0] <= 'm').length >= strArr.length / 2
}

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"))
console.log(isTrueOrFalse("Xylophones can obtain Xenon."))
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"))
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe"))
console.log(isTrueOrFalse("Got stuck in the Traffic"))

