const path = require("path");

// desk-native template
const generateTemplate = require("../template/template");

// package.json
const generatePackageJson = require("../packageJson/packages");


// create the desk-native-app (file structure)
async function createDeskNativeApp(appName) {

    // project directory
    const rootDir = path.join(process.cwd(), appName);

    // generate the desk-native template
    await generateTemplate(rootDir, appName);

    // generate the package.json file
    await generatePackageJson(appName, rootDir);

    console.log("Successfully generated app");
}

// export function
module.exports = createDeskNativeApp;