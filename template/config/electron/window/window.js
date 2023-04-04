const {
    app,
    BrowserWindow
} = require('electron')

const fs = require("fs");
const path = require("path");

// electron reloader for reloading the electron app when the user changes the files 
try {
    require('electron-reloader')(module)
} catch (err) {}

const window = () => {

    // window config for development
    async function createDevWindow() {

        // window config json file for the development
        const devConfig = JSON.parse(fs.readFileSync(path.join(__dirname, "config/dev.json")));

        // Create the browser window.
        let win = new BrowserWindow(devConfig);

        // and load the index.html of the app.
        win.loadURL('http://localhost:7777')
    }

    // window configure for production
    async function createBuildWindow() {

        // Window config json file for the production
        const buildConfig = JSON.parse(fs.readFileSync(path.join(__dirname, "config/build.json")));

        // Create the browser window.
        let win = new BrowserWindow(buildConfig);

        // and load the index.html of the app.
        win.loadURL('http://localhost:7777')
    }

    // execute the window based of arguments
    app.on('ready', async () => {
        // Access the command-line arguments using process.argv
        const args = process.argv.slice(2);

        // check if the app is run in dev
        if (args.includes("--dev")) {
            await createDevWindow();
        }

        // if app if running in production
        else {
            await createBuildWindow();
        }

    });

}

// export window function
module.exports = window