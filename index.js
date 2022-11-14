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
    ])
    
};

// test function
function badge(license) {
    console.log(license);
    let licenseBadge;
    switch (license) {
        case 'MIT':
        licenseBadge = 'MIT badge';
        console.log('first');
        break;
        case 'GNU GPL':
        licenseBadge = "GNU GPL badge";
        console.log('second');
        break;
        case 'Mozilla':
        licenseBadge = 'Mozilla badge';
        console.log('third');
        break;
        case 'Apache':
        licenseBadge = 'Apache badge';
        console.log('fourth');
    }
    
};

// TODO: Create a function to write README file
// created function to write README file
const writeToFile = ({title, description, installation, usage, contribution, testing, license, github, email}) =>
`<!DOCTYPE md>
# ${title}

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Testing](#testing)
* [License](#license)
* [Contact](#contact)

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

${license}${badge(license)}
$licenseBadge}

<a name="Contact"></a>
## Contact

You can find me at Github at [${github}](https://github.com/${github}) or email me directly at [${email}](mailto:${email}?subject=[Github]Project%20Information.)

Created with ReadmeEasy 😏`;

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => writeFile(`README.md`, writeToFile(answers)))
    .then((answers) => console.log('Successfully created Readme, Good job!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
