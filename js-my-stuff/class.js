/* Task-2
console.log('\n============Task-2============');
Write a function named calculateTotalPrice2() which takes an object of some shopping items with their quantities as key-value pairs and
returns the total price of the given items based on the price list below.
    1 Apple is $2.00
    1 Orange is 3.29
    1 Mango is $4.99
    1 Pineapple $5.25
Note: There will be some discounts as below​.
There will be %50 discount for every second Apple
There will be 1 free Mango if customer gets 3. So, fourth one is free.

calculateTotalPrice2({ Apple: 3, Mango: 5 })                            -> 24.96
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })                 -> 45.81
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })             -> 0
calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })    -> 29.51
*/

const calculateTotalPrice2 = (order) => {
    let total = 0;
    const menu = {
        apple: 2.0,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25,
    };
    for (const item in order) {
        let price = menu[item]
        let amount =  order[item]
        if (item === 'apple') {
            for (let i = 1; i <= amount; i++) {
                if(i % 2  === 0) total += (price/2)
                else total += price 
            }
        }
        else if (item === 'mango') {
            for (let i = 1; i <= amount; i++) {
                if(i % 4  === 0) total += 0
                else total += price
            }
        }
        else total += price * amount
    }
    return total.toFixed(2);
};

console.log(calculateTotalPrice2({ apple: 3, mango: 5 }))
console.log(calculateTotalPrice2({ apple: 4, mango: 8, orange: 3 }) )
console.log(calculateTotalPrice2({ apple: 0, pineapple: 0, orange: 0 }))
console.log(calculateTotalPrice2({ apple: 4, pineapple: 1, orange: 1, mango:3 }))
