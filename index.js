// require modules
const inquirer = require('inquirer');

// an array of prompt questions
const questions = [
    'Enter up to 3 characters for your logo text:',
    'Enter a color keyword or #hex code for your text color:',
    'Select a shape for your logo:',
    'Enter a color keyowrd or #hex code for your shape color:'
]

// function to run on initialize
function init() {
    // this method will prompt the user for answers to help generate their logo
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "text",
            validate: (input) => {
                if (input.length > 3) {
                    return 'Only enter up to 3 characters'
                } else {
                    return true
                }
            }
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

        // this.text = toUpperCase(text)
        // this.textcolor = removeWhiteSpace(tolowerCase(textcolor))
        // this.shape = tolowerCase(shape)
        // this.shapeColor = removeWhiteSpace(tolowerCase(shapeColor))
};

// call initialize function
init();