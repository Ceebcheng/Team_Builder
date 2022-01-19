const fs = require('fs');
const inquirer = require("inquirer");

var test = []
//create array for different stuff, 
inquirer.prompt([
    {
        type: "input",
        message: "What is your Team Manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is your Team Manager's employee ID?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is your Team Manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is your Team Manager's name?",
        name: "managerName"
    },

])