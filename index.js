const inquire = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);


const questions = [{
    type: "input",
    question: "What would you like to name your project?",
    name: "Name"
},
{
    type: "input",
    question: "Enter a description of your project.",
    name: "Description"
},
{
    type: "input",
    question: "What are the installation requirements?",
    name: "Install"
},
{
    type: "input",
    question: "When is the project run?",
    name: "Usage"
},
{
    type: "list",
    question: "Select and then Enter the Open-Source license variant for your project.",
    name: "License",
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'Mozilla Public License2.0'],
},
{
    type: "input",
    question: "If this is a group project, what other individuals contributed?",
    name: "Contributors"
},
{
    type: "input",
    question: "Enter an email address.",
    name: "Email"
},
{
    type: "input",
    question: "Enter your GitHub username.",
    name: "GitHub"
}
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        return error ? console.error(error) : console.log("lets see if this works");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((res) => {
        writeToFile("", generateMarkdown(res));
      });
 }


// Function call to initialize app
init();
