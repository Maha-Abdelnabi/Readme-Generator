const licenseLinks = require("./licenseLink");

function generateMarkdown(data) {
  // set url for license badge
  data.licenseBadge = licenseLinks[data.license];

  // return markdown content
  return `# ${data.title}

 ## Description:
  ${data.description}


 ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#licensing)
  - [Contribution](#contribution)
  - [Testing](#testing)


  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.licensing}

  ## Contribution:
  This repository is licensed under the${data.contribution} license.

  ## Testing:
  ${data.testing}
`;
}

module.exports = generateMarkdown;
