const fs = require('fs');
const path = require('path');
const os = require('os');
const platform = os.platform();

async function generateGitignore(APP) {

    // .gitignore file 
    const gitignore = `node_modules/`

    // write generated package.json file in the app
    fs.writeFileSync(path.join(APP, '.gitignore'), gitignore);

}

// export the packageJson
module.exports = generateGitignore;