const fs = require('fs');
const path = require('path');

const writeClientFiles = async (clientDir) => {
    // write client files
    fs.writeFileSync(path.join(clientDir.rootDir, 'index.html'), '');
    fs.writeFileSync(path.join(clientDir.pagesDir, 'page.html'), '');
    fs.writeFileSync(path.join(clientDir.scriptsDir, 'script.js'), '');
    fs.writeFileSync(path.join(clientDir.stylesDir, 'style.css'), '');
}

// export the function
module.exports = writeClientFiles;