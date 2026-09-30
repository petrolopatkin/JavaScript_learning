// POST method in fetchAPI

async function sendUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                firstName: "Peter", 
                age: 18
            })
        })

        if (!response.ok){
            throw new Error("Cound not send data");
        }

        const data = await response.json();

        console.log(data.firstName);
        console.log(data.age);
        console.log(data.id);
    }

    catch(error){
        console.error(error)
    }
}

sendUser();

// Task 2
async function createProduct () {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                title: "Laptop",
                price: 1200,
                category: "Electronics"
            })
        })

        if(!response.ok){
            throw new Error("Cou;d not send data")
        }

        const data = await response.json();

        console.log(`Title: ${data.title}`)
        console.log(`Price: ${data.price}`)
        console.log(`Category: ${data.category}`)
    }

    catch(error){
        console.error(error)
    }
}

createProduct();

// GET + POST 
async function getPost(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")




        if(!response.ok){
            throw new Error("Could not fetch data")
        }

        const data = await response.json();

        const posts = data.slice(0, 5)

        console.log(posts)
    }

    catch(error){
        console.error(error)
    }
}



async function sendPost() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                title: "My first post",
                body: "Learning JavaScript APIs",
                userID: 1
            })
        })

        if(!response.ok){
            throw new Error("Could not send data")
        }

        const data = await response.json()

        console.log(`Created post: ${data.body}`)
        console.log(`ID: ${data.userId}`)
        console.log(`Created post: ${data.title}`)
    }

    catch(error){
        console.error(error)
    }
}

getPost();
sendPost();