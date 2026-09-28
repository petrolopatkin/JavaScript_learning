// arrow functions and callbacks in JavaScript

// Task 1
const processNumber = (number, callback) => {
    return callback(number);
}

function double(number) {
    return number * 2
}

console.log(processNumber(5, double));

// Task 2 callback + array
const numbers = [2, 5, 8, 11, 14, 17]

const processArray = (array, callback) => {
    return array.map(callback)
}

function triple(number){
    return number * 3
}

console.log(processArray(numbers, triple));

// Promises in JavaScript 

// Task 1
function someData(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data was uploaded successfully")
    }, 1500)
})} ;

someData().then((value) => console.log(value))

// Task 2 resolve + reject +.then() + .catch()
function getData() {
    return new Promise((resolve, reject) => {
        const success = false;

        if (success === true) {
            setTimeout(() => {
                resolve("Data was loaded successfully");
            }, 2000);
        } else {
            reject("Data wasn't loaded");
        }
    });
}

getData()
    .then((value) => console.log(value))
    .catch((error) => console.error(error));

// async/await in JavaScript

// Task 1
function getData() {
    return new Promise((resolve, reject) => {
        const success = true;

        if (success === true) {
            setTimeout(() => {
                resolve("Data was loaded successfully");
            }, 2000);
        } else {
            reject("Data wasn't loaded");
        }
    });
}

async function asyncData() {
    try{
        const dataResult = await getData();
        console.log(dataResult)
    }
    catch(error){
        console.error(error)
    }
    
}

asyncData();

// Task 2 
function userData (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                firstName: "Peter",
                age: 18,
                isStudent: true
            })
        },1500 )
    })
}

async function asyncUserData (){
    try{
        const userResult = await userData()
        console.log(userResult)
    }
    catch(error){
        console.error(error)
    }
}