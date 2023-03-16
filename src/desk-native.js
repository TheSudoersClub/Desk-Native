const yargs = require('yargs');
const {
    execSync
} = require('child_process');

// gere the generator code
const createDeskNativeApp = require('./file-structure/structure');

yargs.command('create desk-native-app <appname>', 'Create a new desk-native-app', (yargs) => {
    yargs.positional('appname', {
        describe: 'Name of the app',
        type: 'string',
    });
}, async (argv) => {
    const {
        appname
    } = argv;
    await createDeskNativeApp(appname);
    execSync(`cd ${appname} && npm install`, {
        stdio: 'inherit'
    });
    console.log('Desk Native App created successfully.');
});

yargs.parse();