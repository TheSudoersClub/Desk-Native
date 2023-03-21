const {
    app,
    BrowserWindow
} = require('electron')

// electron reloader for reloading the electron app when the user changes the files 
try {
    require('electron-reloader')(module)
} catch (err) {}

const main = () => {
    function createWindow() {
        // Create the browser window.
        let win = new BrowserWindow({
            width: 1000,
            height: 600,
            autoHideMenuBar: true,
            webPreferences: {
                nodeIntegration: true,
                devTools: true, // set this field "false" is you want to disable devTools for the app.
            }
        })

        // and load the index.html of the app.
        win.loadURL('http://localhost:7777')
    }

    app.on('ready', createWindow)
}

// export main function
module.exports = main