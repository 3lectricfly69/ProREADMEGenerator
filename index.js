const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type:'input',
            name: 'description',
            message: 'Describe the functionality of this project.',
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'What are the installation instructions that will be included for said user?',
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'Give an outline of the information data that is automatically collected through the use of your application.',
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Explain how others may contribute user-generated content to the project.',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Include instructions for the test here.',
        },
    ])
}
const generateREADME = ({title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions}) =>
`
Project title: ${title}

Description: 
${description}

Installation Instructions:
${installationInstructions}

Usage Information:
${usageInformation}

Contribution Guidelines:
${contributionGuidelines}

Test Instructions:
${testInstructions}

`;

const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

init();