// If/Else statements in Javascript 

// Task 1
let age = -1;

if(age >= 18){
    console.log("You are an adult")
}
else if(age < 0){
    console.log("Your age cannot be less than a zero")
}
else{
    console.log("You are a minor")
}

//Task 2
// && is equal as AND operator
let score = 100;

if (score < 50){
    console.log("Fail")
}
else if (score >= 50 && score <= 69){
    console.log("Pass")
}
else if (score > 69 && score <= 89){
    console.log("Great")
}
else if (score > 89 && score <= 100){
    console.log("Excellent")
}
else if (score > 100){
    console.log("You can't have a score more than 100")
}
else{
    console.log("You don't have a score")
}

// Functions in JavaScript

// Task 1
function welcome() {
    console.log("Welcome to the JavaScript")
}

welcome();

// Task 2
function greet(name) {
    console.log(`Welcome to the JavaScript, ${name}`)
}

greet("Peter");

// Task 3
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

console.log(add(5, 7),
subtract(5, 7),
multiply(5, 7),
divide(5, 7))

// Task 4
function CheckAge(age){
    if (age >= 18){
        console.log("Adult")
    }
    else if (age < 0){
        console.log("Age cannot be less than zero")
    }
    else{
        console.log("Minor")
    }
}

CheckAge(18);

// Arrays in JavaScript

// Task 1
let fruits = ["Apple", "Banana", "Orange", "Mango"]

console.log(fruits)
console.log(fruits[0])
console.log(fruits[3])

// Task 2 
let fruitss = ["Apple", "Banana", "Orange", "Mango"]

fruitss.push("Peach")
fruitss.unshift("Kiwi")
fruitss.shift()
fruitss.pop()

// Task 3
let cars = ["BMW", "Mercedes", "Audi"]

console.log(cars)
cars.push("Ferrari");
console.log(cars)
cars.unshift("Chevrolet");
console.log(cars)
cars.pop();
console.log(cars)
cars.shift();
console.log(cars)

// Task 4
let vegetables = ["Tomato", "Cucumber", "Broccoli", "Potato", "Carrot"]

console.log(vegetables.length)
console.log(vegetables[vegetables.length - 1])
console.log(vegetables[vegetables.length - 5])

// Task 5 combined function and array
function showLastItem(array){
    console.log(array[array.length - 1])
}

showLastItem(fruitss)
showLastItem(cars)
showLastItem(vegetables)

// Task 6 return + array
function showFirstItem(array){
    return array[0]
}

console.log(showFirstItem(cars))
console.log(showFirstItem(vegetables))
console.log(showFirstItem(fruitss))