const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

console.log("Welcome! please answet the following questions to generate README for your project!")


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
    message: "What is the description of the project?",
  },
  // Installation Instructions
  {
    type: "input",
    name: "installation",
    message: "How do you install the project?",
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
    message: "How should other developers contribute to this project?",
  },
  // Test Instructions
  {
    type: "input",
    name: "testing",
    message: "How do you test this project?",
  },
  // License Options
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project.",
    choices: [
      "MIT",
      "Unlicense",
      "Apache",
      "GNU",
      "BSD",
      "Mozilla",
    ],
  },
  // Github Username
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
   
  },
  // Email Address
  {
    type: "input",
    name: "email",
    message: "Enter your email address?",
  }
];

//function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Success! Information transferred to the README!");
    }
  });
}
// Function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();


