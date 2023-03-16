const path = require('path');

// get the file-structure generator file
const createFileStructure = require("./src/create-file-structure");

// get the packageJson generator function
const generatePackageJson = require('./src/packages/packages');

// get the client files generator 
const writeClientFiles = require('./src/client/write-client-files')

// get the client files generator 
const writeServerFiles = require('./src/server/write-server-files')


// create the desk-native-app (file structure)
async function createDeskNativeApp(appName) {
    const rootDir = path.join(process.cwd(), appName);

    // root paths
    const appDir = {
        rootDir: rootDir,
        srcDir: path.join(rootDir, 'src'),
    }


    // client dir path
    const clientDirPath = path.join(appDir.srcDir, 'client');

    // directories in clientDir
    const clientDir = {
        rootDir: clientDirPath,
        pagesDir: path.join(clientDirPath, 'pages'),
        scriptsDir: path.join(clientDirPath, 'scripts'),
        stylesDir: path.join(clientDirPath, 'styles'),
    };


    // server dir path
    const serverDirPath = path.join(appDir.srcDir, 'server');

    // server/database dir path
    const databaseDirPath = path.join(serverDirPath, 'database');

    // directories in serverDir 
    const serverDir = {
        rootDir: serverDirPath,
        databaseDir: {
            rootDir: databaseDirPath,
            configDir: path.join(databaseDirPath, 'config'),
            controllerDir: path.join(databaseDirPath, 'controller'),
        },
        libDir: path.join(serverDirPath, 'lib'),
        routesDir: path.join(serverDirPath, 'routes'),
    };


    // create directories if they don't exist
    await createFileStructure(appDir, clientDir, serverDir);

    // generate the package json file
    await generatePackageJson(appName, appDir);

    // write client files
    await writeClientFiles(clientDir);

    // write server files
    await writeServerFiles(serverDir);
}

// export function
module.exports = createDeskNativeApp;