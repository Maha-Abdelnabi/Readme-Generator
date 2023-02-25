const inquirer = require("inquirer");
const fs = require("fs");


// title of  project and  Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
  // Project name
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  // Description of the project
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  // Installation Instructions
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },
  // Usage Information
  {
    type: "input",
    name: "usage",
    message: "How do you use this project? ",
  },
  // Contribution
  {
    type: "input",
    name: "contribution",
    message:
      "How should other developers contribute to this project?",
  },
  // Test Instructions
  {
    type: "input",
    name: "testing",
    message: "How do you test this project?",
  }
];