#! /usr/bin/env node
const process = require('process');
const ptree = require('./lib/index.cjs');

const params = process.argv.slice(2);
const targetDir = params[0] || './';

console.log(ptree.printFiles(targetDir));