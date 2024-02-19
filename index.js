// Import fs for file system operations
const fs = require('fs');

// Import inquirer for user input prompts
const inquirer = require('inquirer');

// Import generateMarkdown to create markdown content
const generateMarkdown = require("./generateMarkdown");

// Function to initialize the application
function init() {
    // Prompt the user with a series of questions using 'inquirer'
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter your installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe how this software will be used:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a License:',
            choices: ['GNU General Public License 3.0', 'MIT', 'Creative Commons Zero v1.0 Universal', 'The Unlicense'],
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'List your contributors here:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'List the testing instructions here:',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please input your email address:',
        },
    ])

    // After the user provides answers, handle the responses
    .then((answers) => {
        // Generate markdown content based on user answers
        const potentialFile = generateMarkdown(answers);
        // Write the generated markdown content to a file named 'README.md and place it in the results folder'
        fs.writeFile('./results/README.md' , potentialFile, (err) => {
            // Log any errors that occur during file writing
            console.log(err);
        })
    });
};

// Call the 'init' function
init();