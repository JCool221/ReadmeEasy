// include fs.promises and inquirer
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
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
    switch (license) {
        case 'MIT':
            console.log('first');
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'GNU GPL':
            console.log('second');
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case 'Mozilla':
            console.log('third');
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        case 'Apache':
            console.log('fourth');
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    
};

//  function to write README file
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

${license} ${badge(license)}

<a name="Contact"></a>
## Contact

You can find me on Github at [${github}](https://github.com/${github}) 
or email me directly at [${email}](mailto:${email}?subject=[Github]Project%20Information.)

Created with ReadmeEasy 😏`;

// Function to initialize app
const init = () => {
    questions()
    .then((answers) => writeFile(`README.md`, writeToFile(answers)))
    .then((answers) => console.log('Successfully created Readme, Good job!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
