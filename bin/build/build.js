// Import necessary modules
const fs = require('fs');
const prompts = require('prompts');
const os = require('os');
const platform = os.platform();
const {
    exec
} = require('child_process');

// build config file 
const configFile = 'config/electron/build/config.json';

// electron path
let electronPath = '';

// configure the path with respect to os
if (platform === 'win32') {
    electronPath = 'node_modules\\.bin\\electron-packager'
} else {
    electronPath = 'node_modules/.bin/electron-packager'
}

// Check if config.json exists
if (fs.existsSync(configFile)) {
    // Read options from config.json
    const config = JSON.parse(fs.readFileSync(configFile));
    buildApp(config);
} else {


    // Define the available options
    const platforms = [{
            title: 'Linux',
            value: 'linux'
        },
        {
            title: 'Windows',
            value: 'win32'
        },
        {
            title: 'macOS',
            value: 'darwin'
        }
    ];

    const archs = [{
            title: 'ia32',
            value: 'ia32'
        },
        {
            title: 'x64',
            value: 'x64'
        },
        {
            title: 'ARMv7',
            value: 'armv7l'
        },
        {
            title: 'ARM64',
            value: 'arm64'
        }
    ];

    async function promptUserForOptions() {
        // Prompt user for platform
        const platformResponse = await prompts({
            type: 'multiselect',
            name: 'platform',
            message: 'Select platform(s)',
            choices: platforms
        });

        // Prompt user for architecture
        const archResponse = await prompts({
            type: 'multiselect',
            name: 'arch',
            message: 'Select architecture(s)',
            choices: archs
        });

        // Prompt user for icon path
        const iconPathResponse = await prompts({
            type: 'text',
            name: 'iconPath',
            message: 'Enter path to icon (leave empty to skip)'
        });

        // Prompt user for overwrite option
        const overwriteResponse = await prompts({
            type: 'toggle',
            name: 'overwrite',
            message: 'Overwrite existing files?',
            initial: true,
            active: 'yes',
            inactive: 'no'
        });

        // Combine the responses into a config object
        const config = {
            platform: platformResponse.platform.join(','),
            arch: archResponse.arch.join(','),
            iconPath: iconPathResponse.iconPath.trim(),
            overwrite: overwriteResponse.overwrite ? '--overwrite' : ''
        };

        // Create the config/build dir if it does not exist
        if (!fs.existsSync('config/electron/build')) {
            fs.mkdirSync('config/electron/build');
        }

        // Write options to config.json
        fs.writeFileSync(configFile, JSON.stringify(config));

        // Start building the app
        buildApp(config);
    }

    // Call the prompt function
    promptUserForOptions();
}


function buildApp(config) {
    //  create the build dir
    if (!fs.existsSync('./build')) {
        fs.mkdirSync('./build');
    }
    // Load package.json
    const packageJson = JSON.parse(fs.readFileSync('package.json'));

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

        // log the success message
        console.log("App successfully build");

        process.exit(0);

    });
}