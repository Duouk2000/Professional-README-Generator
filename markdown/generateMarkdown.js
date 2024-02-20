// function to generate markdown for README
function generateMarkdown(data) {
    
    // Create a bulleted list for Installation and Contributors
    const contributorsList = data.contributors
    .split(',')
    .map(contributor => `- ${contributor.trim()}`)
    .join('\n');

    const installationList = data.installation
    .split(',')
    .map(step => `- ${step.trim()}`)
    .join('\n');
      
    return `# ${data.title}

![License: ${data.license}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-blue)

## Description
${data.description}

##

### Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installationList}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} License.

## Contributing 
${contributorsList}

## Tests
${data.test}

## Questions
My GitHub username is: [${data.username}](https://github.com/${data.username})\n
I can be contacted via the following Email address: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;