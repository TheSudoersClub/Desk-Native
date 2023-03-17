const fs = require("fs");

// get paths 
const getPath = require("../paths/directory-paths");

// create the app files structure (structure the directories)
const createFileStructure = async (appName) => {

    // get the app paths
    const app = getPath(appName);

    // create the file structure for the app

    // root directories
    fs.mkdirSync(app.root, {
        recursive: true
    });
    fs.mkdirSync(app.__pack.root, {
        recursive: true
    });
    fs.mkdirSync(app.__pack.build.root, {
        recursive: true
    });
    fs.mkdirSync(app.__pack.build.copydir, {
        recursive: true
    });

    fs.mkdirSync(app.src.root, {
        recursive: true
    });

    // client directories
    fs.mkdirSync(app.src.client.root, {
        recursive: true
    });
    fs.mkdirSync(app.src.client.pages, {
        recursive: true
    });
    fs.mkdirSync(app.src.client.scripts, {
        recursive: true
    });
    fs.mkdirSync(app.src.client.styles, {
        recursive: true
    });

    // server directories
    fs.mkdirSync(app.src.server.root, {
        recursive: true
    });
    fs.mkdirSync(app.src.server.lib, {
        recursive: true
    });
    fs.mkdirSync(app.src.server.routes, {
        recursive: true
    });
};

// export function
module.exports = createFileStructure;