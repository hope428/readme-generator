// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage information?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are the testing instructions?",
    name: "testing",
  },
  {
    type: 'input',
    message: 'What license does your project use?',
    name: 'license',
    choices: []
  },
  {
    type: 'input',
    message: 'Who worked on this project?',
    name: 'credits'
  },
  {
    type: 'input',
    message: 'What is your github username?',
    name: 'username'
  }, 
  {
    type: 'email',
    message: 'What is your email address?',
    name: 'email',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data)
    fs.writeFile(fileName, markdown, (err)=>{
        err ? console.log(err) : console.log("Success!")
    })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile('README.md', response));
}

// Function call to initialize app
init();
