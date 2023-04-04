const fs = require('fs');
const path = require('path');
const os = require('os');
const platform = os.platform();

async function generatePackageJson(APP_NAME, APP) {

    // write package.json file
    const packageJson = {
        name: APP_NAME,
        version: '1.0.0',
        description: '',
        main: 'src/server/server.js',
        scripts: {
            dev: "node __pack/bin/dev/dev.js",
            build: "node __pack/bin/build/build.js"
        },
        keywords: [],
        author: '',
        dependencies: {
            "express": "^4.18.2",
            "nodemon": "^2.0.21"
        },
        devDependencies: {
            "electron": "^23.1.4",
            "electron-packager": "^17.1.1",
            "electron-reload": "^2.0.0-alpha.1",
            "electron-reloader": "^1.2.3"
        }
    };


    // update the node_modules path for the windows
    if (platform === 'win32') {
        packageJson['scripts']['dev'] = "node __pack\\bin\\dev\\dev.js";
        packageJson['scripts']['build'] = "node __pack\\bin\\build\\build.js";
    }

    // write generated package.json file in the app
    fs.writeFileSync(
        path.join(APP, 'package.json'),
        JSON.stringify(packageJson, null, 2)
    );

}

// export the packageJson
module.exports = generatePackageJson;