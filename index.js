// TODO: Include packages needed for this application
// include fs.promises and inquirer
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
// TODO: Create an array of questions for user input
// generate prompts
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
            name: 'contribution',
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
            name: 'github',
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
const writeToFile = ({title, description, installation, usage, contribution, testing, license, github, email}) =>
 `<!DOCTYPE md>
 # ${title}

## Description
${description}

## Table of Contents
    1.[Installation](#Installation)
    2.[Usage](#Usage)
    3.[Contributing](#Contributing)
    4.[Testing](#Testing)
    5.[License](#License)
    6.[Contact](#Contact)

<a name="Installation"></a>
## Installation

${installation}

<a name="Usage"></a>
## Usage

${usage}

<a name="Contributing"></a>
## Contributing

${contribution}

<a name="Testing"></a>
## Testing

${testing}

<a name="License"></a>
## License

${license}

<a name="Contact"></a>
## Contact

You can find me at Github at ${github} or email directly at ${email}.`;

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => writeFile(`README.md`, writeToFile(answers)))
    .then((answers) => console.log('Successfully created Readme, Good job!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
