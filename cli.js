#!/usr/bin/env node
const argv = require("yargs").argv;
const { validType, validSizeInMB } = require("./cli.util");

const cliInputType = argv.type;
console.log("cliInputType: ", cliInputType);
const cliInputSize = argv.size;
console.log("cliInputSize: ", cliInputSize);

try {
  if (validType(cliInputType) && validSizeInMB(cliInputSize)) {
    console.log(`Generating a ${cliInputType} file of ${cliInputSize}MB...`);
  }
} catch (err) {
  console.log(err.message);
}
