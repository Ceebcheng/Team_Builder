const fs = require('fs');
const inquirer = require("inquirer");
const Manager = require('./Develop/lib/Manager');
const Intern = require('./Develop/lib/Intern');
const Engineer = require('./Develop/lib/Engineer');
const generateHTML = require('./Develop/src/page-template')

const squad = [];

const buildTeam = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Team Manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is your Team Manager's employee ID?",
            name: "managerID"
        },
        {
            type: "input",
            message: "What is your Team Manager's Email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is your Team Manager's Office number?",
            name: "managerNumber"
        },
    
    ])

.then((answers) => {
    console.log(answers);
    const managerObject = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerNumber);
    squad.push(managerObject);
    console.log(managerObject);
    
   
    fs.writeFile('test.html', managerObject, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Successfully created HTML");
    })
})
.catch(err => {
    console.log(err);
})

}

buildTeam();