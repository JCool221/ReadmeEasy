// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Type a short description of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for this project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information.',
        },
        {
            type: 'input',
            name: 'contribution guidelines',
            message: 'Enter the contribution guidelines.',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'enter any test instructions',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does your project use?',
            choices: ['MIT', 'GNU GPL', 'Mozilla', 'Apache'],
        },
        {
            type: 'input',
            name: 'Github',
            Message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => console.log(answers.data))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
