const {
    execSync
} = require('child_process');

const path = require("path");

// generate the app template
const copyDirectory = require('../template/generate-template');

// package.json
const generatePackageJson = require("../packageJson/packages");

// path of the project dir
const getPath = require("../paths/directory-paths");

// create the desk-native-app (file structure)
async function createDeskNativeApp(APP_NAME) {

    // get the project dir paths
    let APP = '';
    try {
        APP = getPath(APP_NAME)
    } catch (error) {
        console.log("Error: ", error);
        return;
    }

    // generate the app template dir
    try {
        await copyDirectory(path.join(__dirname, '../../../template'), APP_NAME);
    } catch (error) {
        console.log("Unable to generate template: ", error);
        return;
    }

    // generate the package.json file
    try {
        await generatePackageJson(APP_NAME, APP);
    } catch (error) {
        console.log("Unable to generate package.json: ", error);
        return;
    }

    // run npm install
    try {
        execSync(`cd ${APP_NAME} && npm install`, {
            stdio: 'inherit'
        });
    } catch (error) {
        console.log("Packages not installed: ", error);
        return;
    }

    // initialize git repo
    try {
        execSync(`cd ${APP_NAME} && git init && git add . && git commit -m "Initial Commit from create Desk-Native-App"`, {
            stdio: 'inherit'
        });
    } catch (error) {
        console.log("Unable to initialize git: ", error);
    }

    // success message
    console.log(`Desk Native App '${APP_NAME}' created successfully.`);
}

// export function
module.exports = createDeskNativeApp;