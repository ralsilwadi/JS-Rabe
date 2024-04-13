console.log("\n============Task-1============\n");

const calculateTotalPrice1 = (order) => {
    let total = 0;
    const menu = {
        apple: 2.0,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25,
    };
    for (const amount in order) {
        total += menu[amount] * order[amount];
    }
    return total.toFixed(2);
};
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 }));
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }) )

console.log("\n============Task-2============\n");

const calculateTotalPrice2 = (order) => {
    let total = 0;
    const menu = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    };
    for (const item in order) {
        if (item == "apple") {
            for (let appleCount = 1; appleCount <= order[item]; appleCount++) {
                if (appleCount % 2 === 0) total += menu[item] / 2
                else total += menu[item]
            }
        } else if (item == "mango") {
            for (let mangoCount = 1; mangoCount <= order[item]; mangoCount++) {
                if (mangoCount % 4 === 0)  total += 0
                else total += menu[item]
            }
        } else total += menu[item] * order[item];
    }
    return total.toFixed(2);
};

console.log(calculateTotalPrice2({ apple: 3, mango: 5 }))
console.log(calculateTotalPrice2({ apple: 4, mango: 8, orange: 3 }) )
console.log(calculateTotalPrice2({ apple: 0, pineapple: 0, orange: 0 }))
console.log(calculateTotalPrice2({ apple: 4, pineapple: 1, orange: 1, mango:3 }))

console.log("\n============Task-3============\n");

const nthWord = (str, num) => str.split(' ').filter((elem, index) => index === (num - 1)).join()

console.log(nthWord("QA stands for Quality Assurance", 4))
console.log(nthWord("", 1))

console.log("\n============Task-4============\n");

const isArmstrong = num => num === (num.toString().split('').reduce((arms, elem) => arms + elem**num.toString().length , 0))

console.log(isArmstrong(153))
console.log(isArmstrong(1634))

console.log("\n============Task-5============\n");

const reverseNumber = num => {
    let revNum = 0
    while (num > 0) {
        const digit = num % 10
        revNum = (revNum*10) + digit
        num = Math.floor(num / 10)
    }
    return revNum
}

console.log(reverseNumber(13371))

console.log("\n============Task-6============\n");

const doubleOrTriple = (arr, num) => arr.map(elem => elem * (num ? 2 : 3))

console.log(doubleOrTriple([1, 5, 10], true))
console.log(doubleOrTriple([3, 7, 2], false) )
console.log(doubleOrTriple([-1, 0, 1], true))

console.log("\n============Task-7============\n");

const splitString = (str, num) => {
    if (str.length < num || str.length % num !== 0) return ''
    let result = ''
    for (let i in str) {
        if ((Number(i) + 1) % num === 0) result += str[i] + ' ';
        else result += str[i];
    }
    return result
}

console.log(splitString("JavaScript", 5))
console.log(splitString("Java", 2))
console.log(splitString("Automation", 3))
console.log(splitString("Hello", 6))
console.log(splitString("12", 1) )

