const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')
// array of questions for user
const questions = [
  {
    type: 'input',
    message: 'What is your repository name?',
    name: 'title'
  },

  {
    type: 'input',
    message: 'Please provide a description of your project:',
    name: 'description'
  },
  
  {
    type: 'input',
    message: 'Please provide installation instructions:',
    name: 'installationInstructions'
  },
  {
    type: 'input',
    message: 'Please provide usage information:',
    name: 'usageInformation'
  },
  {
    type: 'input',
    message: 'Please provide contribution guidelines:',
    name: 'contributionGuidelines'
  },
  {
    type: 'input',
    message: 'Please provide test instructions:',
    name: 'testInstructions'
  },


  {
    type: 'list',
    message: 'What license would you like to use?',
    name: 'license',
    choices: ['Apache2.0','MIT','GNU', 'None']
    
  },
  {
    type: 'input',
    message: 'Please provide your GitHub username:',
    name: 'GitHubUsername'
  },
  {
    type: 'input',
    message: 'Please provide your email address:',
    name: 'emailAddress'
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err)
    }
  })
    
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then(function(answers){
      let fileContent = generateMarkdown(answers) 
      writeToFile("README.md",fileContent )     
    })
}

// function call to initialize program
init();



