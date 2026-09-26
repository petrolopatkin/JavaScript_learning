// Objects in JavaScript

// Task 1
const person = {
    name: "Peter",
    age: 18,
    city: "Presov"
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.city)

// Task 2
const person2 = {
    name: "Anna",
    age: 19,
    city: "Bratislava",
    isStudent: true
}

console.log(person2)

// Task 3 
const car = {
    brand: "BMW",
    model: "M3",
    year: 2024
}

console.log(car['brand'])
console.log(car['model'])
console.log(car['year'])

// Task 4 combined Object + Function + Array
const users = [
    {
        name: "Peter",
        age: 18,
        isStudent: true
},
{
        name: "Anna",
        age: 19,
        isStudent: true
},
{
        name: "John",
        age: 22,
        isStudent: false
},
{
        name: "Mark",
        age: 17,
        isStudent: true
}
]

function getAdultStudents(users) {
    const result = []

    for(const user of users){
        if(user.age >= 18 && user.isStudent === true){
            console.log(`${user.name} is useable`)
        }
        else{
            console.log(`${user.name} is unusable`)
        }
    }
    return result
}

console.log(getAdultStudents(users))

// Array methods in JavaScript 
// forEach method
let letters = ["A", "B", "C", "D", "E"]

letters.forEach(letter => {
    console.log(letter)
}) 

// includes method
let prices = [111, 222, 333, 444, 555, 666, 777]

console.log(prices.includes(333))

// some method
const users2 = [
    {
        name: "Peter",
        age: 18,
        isStudent: true
},
{
        name: "Anna",
        age: 19,
        isStudent: true
},
{
        name: "John",
        age: 22,
        isStudent: false
},
{
        name: "Mark",
        age: 17,
        isStudent: true
}
]

console.log(
    users2.some((user2) => user2.name === "Anna")
)

// every method
const users3 = [
    {
        name: "Peter",
        age: 18,
        isStudent: true
},
{
        name: "Anna",
        age: 19,
        isStudent: true
},
{
        name: "John",
        age: 22,
        isStudent: false
},
{
        name: "Mark",
        age: 17,
        isStudent: true
},
{
        name: "Anna",
        age: 25,
        isStudent: false
}
]

console.log(
    users3.every((user3) => user3.age >= 18)
)

// find method

console.log(
    users3.find((user3) => user3.name === "Anna")
)

// filter method

console.log(
    users3.filter((user3) => user3.name === "Anna")
)

// map method

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 30 },
    { name: "Keyboard", price: 70 },
    { name: "Monitor", price: 300 }
]

console.log(
    products.map((product) => {return {
        name: product.name,
        price: product.price * 0.9
    }
} )
)