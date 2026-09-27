// JSON in JavaScript

// Task 1 converting an object into a json string
const product = {
    name: "Laptop",
    price: 1000,
    category: "Electronics",
    inStock: true
}

const jsonProduct = JSON.stringify(product)

console.log(jsonProduct)
console.log(typeof jsonProduct)

// Task 2 converting a json string into an object

const jsonParse = JSON.parse(jsonProduct)

console.log(jsonParse)
console.log(typeof jsonParse)

// Task 3 JSON + arrays + objects + map()
const users = [{
    name: "Peter",
    age: 18
},
{
    name: "Anna",
    age: 19
},
{
    name: "John",
    age: 22
}
]

const jsonUsers = JSON.stringify(users)

console.log(jsonUsers)
console.log(typeof jsonUsers)

const jsonParseUsers = JSON.parse(jsonUsers)

console.log(jsonParseUsers)
console.log(typeof jsonParseUsers)

console.log(jsonParseUsers.map((user) => {return{
    name: user.name
}
})
)

// Error Handling in JavaScript

// Task 1 try/catch + JSON.parse() + Task 2 trying to catch a Syntax Error
const jsonData = '{"name": "Peter", "age": 18, "isStudent": true'

try{
    const jsonDataParse = JSON.parse(jsonData)

    console.log(jsonDataParse)

    console.log(jsonDataParse.name)
    console.log(jsonDataParse.age)
    console.log(jsonDataParse.isStudent)
}
catch(error){
    if (error instanceof SyntaxError){
        console.log("There is a mistake in your syntax")
    }
}

// Destructuring in JavaScript

// Task 1 destructuing an object
const userP = {
    firstname: "Peter",
    age: 18,
    city: "Presov",
    isStudent: true
}

const {firstname, age, city, isStudent} = userP

console.log(firstname)
console.log(age)
console.log(city)
console.log(isStudent)

// Task 2 array destructuring
const fruits = ["Apple", "Banana", "Mango", "Pineapple", "Orange"]

const [firstFruit, secondFruit, thirdFruit, ...elseFruits] = fruits

console.log(firstFruit)
console.log(secondFruit)
console.log(thirdFruit)
console.log(elseFruits)

// Task 3 function destructuring 
const people = [{
    firstname: "Peter",
    age: 18,
    city: "Presov"
},
{
    firstname: "Anna",
    age: 19,
    city: "Bratislava"
},
{
    firstname: "John",
    age: 25,
    city: "Kosice"
}
]

function showPerson ({firstname, age, city}) {
    console.log(`That is a person named ${firstname} who is ${age} years old from ${city}`)
}

showPerson(people[0])
showPerson(people[1])
showPerson(people[2])