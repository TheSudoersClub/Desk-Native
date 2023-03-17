// express for server
const express = require("express");
const app = express();

app.use((req, res, next) => {
    next();
});

// Serve static files
app.use(express.static('src/client'));


// get the homepage route
const homepage = require("./routes/homepage");

const main = require("../../__pack/main");

// server homepage on '/' endpoint
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