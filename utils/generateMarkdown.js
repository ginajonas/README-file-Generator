// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation 
  ${data.installationInstructions}

  ## Usage
  ${data.usageInformation}

  ## License
  ![alt text](https://badgen.net/badge/license/${data.license})
  

  ## Contributing
  ${data.contributionGuidelines}

  ## Tests
  ${data.testInstructions}

  ## Questions
  Github: [${data.GitHubUsername}](https://github.com/${data.GitHubUsername})

  Email address: [${data.emailAddress}}](mailto:${data.emailAddress})
  
`;
}

module.exports = generateMarkdown;
