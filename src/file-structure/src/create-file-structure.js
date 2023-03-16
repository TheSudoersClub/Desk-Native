const fs = require("fs");


// create the app file structure
const createFileStructure = async (appDir, clientDir, serverDir) => {
    // root directories
    fs.mkdirSync(appDir.rootDir, {
        recursive: true
    });
    fs.mkdirSync(appDir.srcDir, {
        recursive: true
    });

    // client directories
    fs.mkdirSync(clientDir.rootDir, {
        recursive: true
    });
    fs.mkdirSync(clientDir.pagesDir, {
        recursive: true
    });
    fs.mkdirSync(clientDir.scriptsDir, {
        recursive: true
    });
    fs.mkdirSync(clientDir.stylesDir, {
        recursive: true
    });

    // server directories
    fs.mkdirSync(serverDir.rootDir, {
        recursive: true
    });
    fs.mkdirSync(serverDir.databaseDir.rootDir, {
        recursive: true
    });
    fs.mkdirSync(serverDir.databaseDir.configDir, {
        recursive: true
    });
    fs.mkdirSync(serverDir.databaseDir.controllerDir, {
        recursive: true
    });
    fs.mkdirSync(serverDir.libDir, {
        recursive: true
    });
    fs.mkdirSync(serverDir.routesDir, {
        recursive: true
    });
};

// export function
module.exports = createFileStructure;