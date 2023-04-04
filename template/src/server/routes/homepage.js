const express = require("express");
const router = express.Router();
const path = require("path");

// homepage lib 
const homepage = require(path.join(__dirname,"../lib/homepage"));

// homepage route
router.get("/", async (req, res) => {

    // get the homepage data
    let {
        statusCode,
        data
    } = await homepage();

    res.status(statusCode).send(data);
});

// export the router;
module.exports = router;