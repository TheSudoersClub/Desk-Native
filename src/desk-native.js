#!/usr/bin/env node

"use strict";

const prompts = require('prompts');

// the generator code
const createDeskNativeApp = require('./lib/create-app/create-app');

// helpers
const isValidProjectName = require('./lib/helpers/validate-name');

// check for the arguments
const args = process.argv.slice(2);
// get the first argument
const APP_NAME = args[0];

// validate the project name 
if (!isValidProjectName(APP_NAME)) {
    (async () => {
        const response = await prompts({
            type: 'text',
            name: 'projectName',
            message: 'Enter the project name:',
            validate: value => {
                if (!value) {
                    return 'Please enter a project name';
                }
                if (!isValidProjectName(value)) {
                    return 'The project name is invalid';
                }
                return true;
            }
        });

        // generate the Desk-Native app
        createDeskNativeApp(response.projectName);

    })();
} else {
    // generate the Desk-Native app
    createDeskNativeApp(APP_NAME);
}