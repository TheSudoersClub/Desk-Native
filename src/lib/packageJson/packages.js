const fs = require('fs');
const path = require('path');

async function generatePackageJson(appname, app) {

    // write package.json file
    const packageJson = {
        name: appname,
        version: '1.0.0',
        description: '',
        main: 'src/server/server.js',
        scripts: {
            start: 'node src/server/server.js',
        },
        keywords: [],
        author: '',
        dependencies: {
            "express": "^4.18.2"
        }
    };

    // write generated package.json file in the app
    fs.writeFileSync(
        path.join(app.root, 'package.json'),
        JSON.stringify(packageJson, null, 2)
    );

}

// export the packageJson
module.exports = generatePackageJson;