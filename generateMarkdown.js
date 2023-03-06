const licenseLinks = require("./licenseLink.js");

 function generateMarkdown(data) {
  // set url for license badge
 data.licenseBadge = licenseLinks[data.license];

  // return markdown content
  return `# ${data.title}

${data.licenseBadge}

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
   This repository is licensed under the ${data.license} license.

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;

 }
module.exports = generateMarkdown;
