// ============================================================
// PUT / PATCH / DELETE methods in APIs
// ============================================================


// ============================================================
// PUT method
// ============================================================

// PUT is used to replace an existing resource.

// PUT method syntax:
// PUT <request-target>["?"<query>] HTTP/1.1


// Example of PUT method from MDN:

// PUT /new.html HTTP/1.1
// Host: example.com
// Content-type: text/html
// Content-length: 16

// <p>New File</p>


// Possible successful response:

// HTTP/1.1 201 Created
// Content-Location: /new.html

// 201 Created means that the request resulted in
// a new resource being created.
// Other successful responses, such as 200 OK or 204 No Content,
// can also be used depending on the situation.



// ------------------------------------------------------------
// Practice with PUT method
// ------------------------------------------------------------

// HTTP request:

// PUT /users/15 HTTP/1.1
// Host: example.com
// Content-Type: application/json

// {
//     "name": "Peter Novak",
//     "email": "peter.novak@example.com",
//     "age": 18
// }


// JavaScript Fetch example:

fetch("/users/15", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Peter Novak",
        email: "peter.novak@example.com",
        age: 18
    })
});


// PUT idea:
// "Replace the resource with this representation."



// ============================================================
// PATCH method
// ============================================================

// PATCH is used to partially modify an existing resource.

// PATCH method syntax:
// PATCH <request-target>["?"<query>] HTTP/1.1


// Example of a resource:

// {
//   "firstName": "Example",
//   "LastName": "User",
//   "userId": 123,
//   "signupDate": "2024-09-09T21:48:58Z",
//   "status": "active",
//   "registeredDevice": {
//     "id": 1,
//     "name": "personal",
//     "manufacturer": {
//       "name": "Hardware corp"
//     }
//   }
// }


// Example of PATCH request:

// PATCH /users/123 HTTP/1.1
// Host: example.com
// Content-Type: application/json
// Content-Length: 27
// Authorization: Bearer ABC123

// {
//   "status": "suspended"
// }


// JavaScript Fetch example:

fetch("/users/123", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        status: "suspended"
    })
});


// PATCH idea:
// "Change only this part of the resource."



// ============================================================
// DELETE method
// ============================================================

// DELETE is used to delete a resource.

// DELETE method syntax:
// DELETE <request-target>["?"<query>] HTTP/1.1


// Example of DELETE method:

// DELETE /file.html HTTP/1.1
// Host: example.com


// JavaScript Fetch example:

fetch("/users/123", {
    method: "DELETE"
})
    .then((response) => {
        console.log(response.status);
    });


// Common successful response codes:
//
// 200 OK
// Request succeeded and the response may contain data.
//
// 202 Accepted
// Request was accepted, but the operation may be completed later.
//
// 204 No Content
// Request succeeded, but there is no response body.


// DELETE idea:
// "Delete this resource."