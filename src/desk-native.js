#!/usr/bin/env node
"use strict";

 // gere the generator code
const createDeskNativeApp = require('./lib/create-app/create-app');
const args = process.argv.slice(2);
const appName = args[0];

createDeskNativeApp(appName);