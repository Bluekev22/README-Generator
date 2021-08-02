// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');


// TODO: Create an array of questions for user input

const writeFileAsync = util.promisify(fs.writeFile);

function questions() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the project about? Please give a description.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What does the user need to install to run this application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is the app used? Please give instructions',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'How can someone make a contribution to this project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'How is this app tested?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license is being used?',
        choices: [
            "Apache 2.0",
            "MIT",
            "ISC",
            "GNU GPL v3",
            "Unlicensed"
        ],
      },
      {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
      },
    ]);
    
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  questions()
    .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
