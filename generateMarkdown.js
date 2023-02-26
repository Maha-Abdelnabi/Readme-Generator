const licenseLinks = require("./licenseLink");

function generateMarkdown(data) {
  // set url for license badge
  data.licenseBadge = licenseLinks[data.license];

  // return markdown content
  return `# ${data.title}

 ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)


  ## Description:
  ${data.description}

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
