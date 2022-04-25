const inquirer = require('inquirer');
const GenerateHTML = require('./utils/generateHTML.js')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')





const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's name",

            validate: nameInput => {
                if (nameInput){
                    return true;
                }
                else {
                    console.log("You must enter the team manager's name");
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team manager's employee ID",

            validate: nameInput => {
                if (nameInput){
                    return true;
                }
                else {
                    console.log("You must enter the team manager's employee ID");
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team manager's email address",

            validate: nameInput => {
                if (nameInput){
                    return true;
                }
                else {
                    console.log("You must enter the team manager's email address");
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "Please enter the team manager's office number",

            validate: nameInput => {
                if (nameInput){
                    return true;
                }
                else {
                    console.log("You must enter the team manager's office number");
                }
            }
        }
        
    ]);
};

const promptTeam = teamData => {
    if (!teamData.members){
         teamData.members = [];
    }

    return inquirer.prompt([

        {
            type: 'list',
            name: 'role',
            message: 'Please choose new team members title role.',
            choices: ['engineer', 'intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter employee's name",

            validate: nameInput => {
                if (nameInput){
                    return true;
                }
                else {
                    console.log("You must enter the employee's name");
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter employee's ID",

            validate: nameInput => {
                if (nameInput){
                    return true;
                }
                else {
                    console.log("You must enter the employee's ID");
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address",

            validate: nameInput => {
                if (nameInput){
                    return true;
                }
                else {
                    console.log("You must enter the employee's email address");
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's GitHub username",

            when: ({role}) => {
                if(role === "engineer") {
                    return true;
                }
                else {
                    return false
                }   
            },

            validate: nameInput => {
                if (nameInput){
                    return true;
                }
                else {
                    console.log("You must enter the engineer's GitHub username");
                }
            }

        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school name",

            when: ({role}) => {
                if(role === "intern") {
                    return true;
                }
                else {
                    return false
                }   
            },

            validate: nameInput => {
                if (nameInput){
                    return true;
                }
                else {
                    console.log("You must enter the employee's GitHub username");
                }
            }

        },
        {
            type: 'confirm',
            name: 'confirmAddTeamMember',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(employeeData => {
        teamData.members.push(employeeData)

        if(employeeData.confirmAddTeamMember) {
            return promptTeam(teamData);
        }
        else {
            return teamData
        }
    });
};

const createStaffObj = function(teamData){
    const teamArray = []

    console.log(teamData);
    const {name, id, email, officeNum, ...team} = teamData
    
    const teamMates = team.members
    


    const manager = new Manager(name, id, email, officeNum, "Manager");
    teamArray.push(manager);
    
    
    teamMates.forEach(member => {
       if (member.role === 'engineer'){
        const engineer = new Engineer(member.name, member.id, member.email, member.github, member.role);
        teamArray.push(engineer);
       }
       else {
        const intern = new Intern(member.name, member.id, member.email, member.school, member.role);
        teamArray.push(intern);
       }
    })
    
    const htmlTeamPage = GenerateHTML(teamArray)
    
}





promptUser()
    .then(promptTeam)
    .then(teamData => {
        createStaffObj(teamData);
    })

   
    


    