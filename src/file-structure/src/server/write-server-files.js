const fs = require('fs');
const path = require('path');

const writeServerFiles = async (serverDir) => {

    // write server files
    fs.writeFileSync(path.join(serverDir.rootDir, 'server.js'), '');
    fs.writeFileSync(path.join(serverDir.databaseDir.configDir, 'database.js'), '');
    fs.writeFileSync(path.join(serverDir.databaseDir.controllerDir, 'instance.js'), '');
    fs.writeFileSync(path.join(serverDir.libDir, 'homepage.js'), '');
    fs.writeFileSync(path.join(serverDir.routesDir, 'homepage.js'), '');
}

// export the function
module.exports = writeServerFiles;