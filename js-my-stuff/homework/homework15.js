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