// fs module for reading the file
const fs = require("fs");


const homepage = async () => {
    try {

        // read the html file
        let data = fs.readFileSync('src/client/index.html', 'utf8');

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