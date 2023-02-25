const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  // Project name
  {
    type: "input",
    name: "title",
    message: "What is the title of the project? (Required)",
  
  },
  // Description of the project
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project (Required)",

  },
]