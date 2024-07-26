// require modules
const inquirer = require('inquirer');

// an array of prompt questions
const questions = [
    'Enter 3 characters for your logo text:',
    'Enter a text color:',
    'Select your logo shape:',
    'Enter a shape color:'
]

// function to run on initialize
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "text",
        },
        {
            type: "input",
            message: questions[1],
            name: "textColor",
        },
        {
            type: "list",
            message: questions[2],
            name: "shape",
            choices: [
                "Circle",
                "Triangle",
                "Square",
            ]
        },
        {
            type: "input",
            message: questions[3],
            name: "shapeColor",
        }
    ])
        .then((answers) => console.log(answers));
};

// call initialize function
init();