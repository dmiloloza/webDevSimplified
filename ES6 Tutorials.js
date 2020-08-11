//JavaScript ES6 Arrow Function Tutorial
function sum(a, b) {
    return a + b;
}

let sum2 = (a, b) => a + b

function isPositive(number) {
    return number >= 0;
}

let isPositive2 = number => number >= 0

function randomNumber() {
    return Math.random
}

let randomNumber2 = () => Math.random

//class
class Person {
    constructor(name) {
        this.name = name
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name);
        }, 1000)
    }

    printNameFunction() {
        setTimeout(function () {
            console.log('Function: ' + this.name);
        }, 2000)
    }
}

let person = new Person('Bob')

person.printNameArrow()
person.printNameFunction()

//8 Must Know JavaScript Array Methods

const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25},
]
//1.filter - new array
const filteredItems = items.filter((item) => {
    return item.price <= 50;
})
console.log(filteredItems)

//2.map - log price array
const itemNames = items.map((item) => {
    return item.price;
})
console.log(itemNames)

//3.find - object found
const foundItem = items.find((item) => {
    return item.name === 'Book';
})
console.log(foundItem)

//4.forEach - log price for each item
items.forEach((item) => {
    console.log(item.price)
})


//5.some - returns boolean
let hasInexpensiveItems = items.some((item) => {
    return item.price <= 50
})
console.log(hasInexpensiveItems)


//6.every - check every single item in array (true or false)
let hasInexpensiveItems1 = items.every((item) => {
    return item.price <= 200
})
console.log(hasInexpensiveItems1)

//7.reduce - cumulative price, start from 0
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(total)

//8.includes
const numArray = [1, 2, 3, 4, 5, 6, 7, 8]
const includesTwo = numArray.includes(2)
console.log(includesTwo)


//JavaScript Promises in 10 min

let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})
p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})

const userLeft = false;
const userWatchingCatMeme = true;

function test() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'user left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User watching cat memes',
                message: 'you sucks'
            })
        } else {
            resolve('Thumbs up!')
        }
    })
}

test().then((message) => {
    console.log('Success:' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})


//JS ES6 Modules
import User from "./user";
let user = new User('Bob', 30)
console.log(user);

