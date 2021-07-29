const fs = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [ {
    type: "input",
    question: "What would you like to name your project?",
    name: "name"
},
    {
        type: "input",
        question: "Enter a description of your project.",
        name: "description"
    },
    {
        type: "input",
        question:"What are the installation requirements?",
        name: "install"
    },
    {
        type: 'input',
        question: "When is the project run?",
        name: "usage"
    },
    {
        type: "input",
        question: "Select and then Enter the Open-Source license variant for your project.",
        name: "license",
        choices: [MIT, Apache 2.0, Mozilla Public License2.0,]

    }]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
