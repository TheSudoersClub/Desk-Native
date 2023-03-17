const yargs = require('yargs');
const {
    execSync
} = require('child_process');

// gere the generator code
const createDeskNativeApp = require('./lib/create-app/create-app');

yargs.command('create desk-native-app <appname>', 'Create a new desk-native-app', (yargs) => {
    yargs.positional('appname', {
        describe: 'Name of the app',
        type: 'string',
    });
}, async (argv) => {
    const {
        appname
    } = argv;
    // generate the Desk-Native app
    await createDeskNativeApp(appname);

    // run npm install
    execSync(`cd ${appname} && npm install`, {
        stdio: 'inherit'
    });

    // initialize git repo
    execSync(`cd ${appname} && git init && git add . && git commit -m "Initial commit from create Desk-Native-App`, {
        stdio: 'inherit'
    });

    console.log('Desk Native App created successfully.');
});

yargs.parse();