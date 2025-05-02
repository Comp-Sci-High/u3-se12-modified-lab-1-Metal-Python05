// Step 1: Install Express via the terminal command: npm i express

// Step 2: Import the express module using 'require', name the variable express
const express = require("express")
// Step 3: Create an instance of express() and name the variable 'app'
const app = express()
// Step 4: Set up the server using 'app.listen'. 
// Set the port is set to 3000. 
app.listen(3000,() => {
    console.log("Server is running at http://localhost:3000");
})

api.get("/image")
// Step 5: Console log "Server is running!" inside the callback function. 

// Step 6: Open the server.

