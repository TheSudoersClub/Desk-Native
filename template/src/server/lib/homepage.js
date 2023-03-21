const fs = require("fs");
const path = require("path");

// read the homepage file
const homepage = async () => {
    try {

        // read the html file
        let data = fs.readFileSync(path.join(__dirname,'../../client/index.html'), 'utf8');

        // return the data
        return {
            statusCode: 200,
            data: data
        };

    } catch (error) {
        return {
            statusCode: 404,
            data: error
        };
    }

};

// export the function
module.exports = homepage;