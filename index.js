const fs = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [ {
    type: "input",
    queston: "What would you like to name your project?"
    name: "name"
},
    {
        type: "input",
        question: ""
        name: ""
    }]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
