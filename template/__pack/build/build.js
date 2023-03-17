const fs = require("fs");
const readline = require('readline');
const os = require('os');
const platform = os.platform();
const {
    exec
} = require('child_process');

// copy front-end dir to the build 
const copySrcDir = require("./copydir/copy");

// build config file 
const configFile = './__pack/config.json';

// electron path
let electronPath = '';

// configure the path with respect to os
if (platform === 'win32') {
    electronPath = 'node_modules\\.bin\\electron-packager'
}else{
    electronPath = 'node_modules/.bin/electron-packager'
}

// Check if config.json exists
if (fs.existsSync(configFile)) {
    // Read options from config.json
    const config = JSON.parse(fs.readFileSync(configFile));
    buildApp(config);
} else {
    // Prompt user for options and write to config.json
    const platforms = ['linux', 'win32', 'darwin'];
    const archs = ['ia32', 'x64', 'armv7l', 'arm64'];

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let platform = '';
    let arch = '';
    let iconPath = '';
    let overwrite = '';

    // Prompt user for platform
    rl.question(`Select platform(s) (comma separated): ${platforms.join(', ')}\n`, (input) => {
        const selectedPlatforms = input.split(',').map(p => p.trim()).filter(p => platforms.includes(p));
        if (selectedPlatforms.length === 0) {
            console.error('Invalid platform selection');
            process.exit(1);
        }
        platform = selectedPlatforms.join(',');

        // Prompt user for architecture
        rl.question(`Select architecture (comma separated): ${archs.join(', ')}\n`, (input) => {
            const selectedArchs = input.split(',').map(a => a.trim()).filter(a => archs.includes(a));
            if (selectedArchs.length === 0) {
                console.error('Invalid architecture selection');
                process.exit(1);
            }
            arch = selectedArchs.join(',');

            // Prompt user for icon path
            rl.question('Enter path to icon (leave empty to skip): ', (input) => {
                iconPath = input.trim();

                // Prompt user for overwrite option
                rl.question('Overwrite existing files? (yes or no): ', (input) => {
                    const inputLower = input.toLowerCase();
                    if (inputLower !== 'yes' && inputLower !== 'no') {
                        console.error('Invalid overwrite option');
                        process.exit(1);
                    }
                    overwrite = inputLower === 'yes' ? '--overwrite' : '';

                    const config = {
                        platform,
                        arch,
                        iconPath,
                        overwrite
                    };
                    // Write options to config.json
                    fs.writeFileSync(configFile, JSON.stringify(config));

                    // start building the app 
                    buildApp(config);
                });
            });
        });
    });
}


function buildApp(config) {
    //  create the build dir
    if (!fs.existsSync('./build')) {
        fs.mkdirSync('./build');
    }
    // Load package.json
    const packageJson = JSON.parse(fs.readFileSync('./package.json'));

    // Build command with user input
    const command = `${electronPath} . ${packageJson.name} --platform=${config.platform} --arch=${config.arch} ${config.overwrite} ${config.iconPath ? `--icon=${config.iconPath}` : ''} --out=./build/`;

    // Execute command
    console.log(`building app...`);
    exec(command, async (error, stdout, stderr) => {
        if (error) {
            console.error(`Command execution failed: ${error.message}`);
            process.exit(1);
        }
        // log the error if any
        console.error(stderr);

        // copy the front-end (client) code to the build app
        try {
            await copySrcDir("src/client", "build");
        } catch (error) {
            console.log(error);
            return
        }

        // log the success message
        console.log("App successfully build");

        process.exit(0);

    });
}