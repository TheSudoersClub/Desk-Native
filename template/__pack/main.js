const {
    app,
    BrowserWindow
} = require('electron')

const main = () => {
    function createWindow() {
        // Create the browser window.
        let win = new BrowserWindow({
            width: 1000,
            height: 600,
            autoHideMenuBar: true,
            webPreferences: {
                nodeIntegration: true
            }
        })

        // and load the index.html of the app.
        win.loadURL('http://localhost:7777')
    }

    app.on('ready', createWindow)


}

// export main function
module.exports = main