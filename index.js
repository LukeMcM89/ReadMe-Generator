const inquire = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
//const writeFileAsync = util.promisify(fs.writeFile);


const questions = () => {
    return inquire.prompt([{
        type: "input",
        message: "What would you like to name your project?",
        name: "Name"
    },
    {
        type: "input",
        message: "Enter a description of your project.",
        name: "Description"
    },
    {
        type: "input",
        message: "What are the installation requirements?",
        name: "Install"
    },
    {
        type: "input",
        message: "When is the project run?",
        name: "Usage"
    },
    {
        type: "list",
        message: "Select and then Enter the Open-Source license variant for your project.",
        name: "License",
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'Mozilla Public License2.0', 'N/A'],
    },
    {
        type: "input",
        message: "If this is a group project, what other individuals contributed?",
        name: "Contributors"
    },
    {
        type: "input",
        message: "Enter test instuctions.",
        name: "Test"
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
    },
    ])
        .then((response) => {
            writeToFile("userreadme.md", generateMarkdown(response));
        }
        );
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (error) => {
 return error ? console.error(error) : console.log("ReadMe Succesfully Generated!");
});
}

// TODO: Create a function to initialize app
function init() {
    questions ();
};

// Function call to initialize app
init();
