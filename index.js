const inquirer = require('inquirer');

inquirer
    .prompt([
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
    .then((response) => {
        console.log('User entered:');
        console.log(response);
    });
