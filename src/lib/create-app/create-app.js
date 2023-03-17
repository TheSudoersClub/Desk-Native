const path = require("path");

// file structure for the app
const createFileStructure = require("../file-structure/structure");

// desk-native template
// const generateTemplate = require("../template/template");

// package.json
const generatePackageJson = require("../packageJson/packages");


// create the desk-native-app (file structure)
async function createDeskNativeApp(appName) {

    // project directory
    const rootDir = path.join(process.cwd(), appName);

    // create the app file structure
    await createFileStructure(appName);

    // // generate the desk-native template
    // await generateTemplate(rootDir);

    // generate the package.json file
    await generatePackageJson(appName, rootDir);
}

// export function
module.exports = createDeskNativeApp;