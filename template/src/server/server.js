// express for server
const express = require("express");
const app = express();
const path = require("path");

// electron window config
const main = require(path.join(__dirname, "../../meta/main"));

app.use((req, res, next) => {
    next();
});

// Serve static files
app.use(express.static(path.join(__dirname, '../client')));

// get the homepage route
const homepage = require(path.join(__dirname, "routes/homepage"));

// serve homepage on '/' endpoint
app.use("/", homepage);


// start server listener onf prot 7777;
app.listen(7777, '127.0.0.1', () => {
    console.log("Server listening on port 7777");

    try {
        // display the electron app window once the app is ready
        main();
    } catch (error) {
        console.log("Can't open app window without build.");
    }

});