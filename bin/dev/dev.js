const {
  spawn
} = require('child_process');

const fs = require("fs");

const os = require('os');
const platform = os.platform();

// get the configurations for development
const devConfig = JSON.parse(fs.readFileSync("config/electron/window/config/dev.json"));

// command 
let command;

// set the command path based on os
if (platform === 'win32') {
  command = devConfig.reload ? "node_modules\\.bin\\nodemon --watch src\\server\\ --exec node_modules\\.bin\\electron . --dev" : "node_modules\\.bin\\electron . --dev"
} else {
  command = devConfig.reload ? "node_modules/.bin/nodemon --watch src/server/ --exec node_modules/.bin/electron . --dev" : "node_modules/.bin/electron . --dev"
}

// execute the resultant command
const child = spawn(command, {
  shell: true
});

// stream output from child process to console
child.stdout.on('data', (data) => {
  console.log(data.toString());
});

// log errors to console
child.stderr.on('data', (data) => {
  console.error(data.toString());
});

// log exit code to console
child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});