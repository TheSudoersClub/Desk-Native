const { spawn } = require('child_process');

const fs = require("fs");
const path = require("path");

// get the configurations for development
const devConfig = JSON.parse(fs.readFileSync(path.join(__dirname, "../../config/window/dev.json")));

// command 
const command = devConfig.reload ? "node_modules/.bin/nodemon --watch src/server/ --exec node_modules/.bin/electron . --dev" : "node_modules/.bin/electron . --dev"

// execute the resultant command
const child = spawn(command, { shell: true });

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
