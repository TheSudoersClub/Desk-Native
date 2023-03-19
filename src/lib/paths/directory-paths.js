const path = require("path");

// app template paths
const getPath = (APP_NAME) => {

    // project root path 
    const APP = path.join(process.cwd(), APP_NAME);

    return APP;

};

// export the function
module.exports = getPath;