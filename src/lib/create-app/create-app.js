const path = require("path");

// file structure for the app
const createFileStructure = require("../file-structure/structure");

// download the default files from the github
const downloadFile = require("../template/template");

// package.json
const generatePackageJson = require("../packageJson/packages");

// file paths for the template files on github
const getTemplateFilesPath = require("../paths/template-files");

// path of the project dir
const getPath = require("../paths/directory-paths");


// create the desk-native-app (file structure)
async function createDeskNativeApp(appName) {

    // get the project dir paths
    const app = getPath(appName)

    // create the app file structure (template)
    await createFileStructure(appName);

    //  download the desk-native template files from the github
    await downloadFile(getTemplateFilesPath(app));

    // generate the package.json file
    await generatePackageJson(appName, app);
}

// export function
module.exports = createDeskNativeApp;