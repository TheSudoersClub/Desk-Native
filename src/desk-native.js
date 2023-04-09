#!/usr/bin/env node
"use strict";

// the generator code
const createDeskNativeApp = require('./lib/create-app/create-app');
const args = process.argv.slice(2);
const APP_NAME = args[0];

// generate the Desk-Native app
createDeskNativeApp(APP_NAME);