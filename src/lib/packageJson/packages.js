const fs = require('fs');
const path = require('path');

async function generatePackageJson(APP_NAME, APP) {

    // write package.json file
    const packageJson = {
        name: APP_NAME,
        version: '1.0.0',
        description: '',
        main: 'src/server/server.js',
        scripts: {
            start: "node_modules/.bin/nodemon --watch src/server/ --exec node_modules/.bin/electron .",
            build: "node __pack/build/build.js"

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
            "electron-reload": "^2.0.0-alpha.1"
        }
    };

    // write generated package.json file in the app
    fs.writeFileSync(
        path.join(APP, 'package.json'),
        JSON.stringify(packageJson, null, 2)
    );

}

// export the packageJson
module.exports = generatePackageJson;