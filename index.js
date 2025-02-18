// require modules
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes.js');
const colors = require('colors/safe');

// an array of prompt questions
const questions = [
    'Enter 3 characters for your logo text:',
    'Enter a text color (keyword or #hex):',
    'Select a shape for your logo:',
    'Enter a shape color (keyword or #hex):'
]

// function to run on initialize
function init() {
    // this method will prompt the user for answers to help generate their logo
    inquirer.prompt([
        {
            type: "input",
            message: colors.magenta(questions[0]),
            name: "text",
            validate: (input) => {
                if (input.length > 3) {
                    return 'Only enter up to 3 characters'
                } else {
                    return true
                }}
        },
        {
            type: "input",
            message: colors.magenta(questions[1]),
            name: "textColor",
        },
        {
            type: "list",
            message: colors.magenta(questions[2]),
            name: "shape",
            choices: [
                "Circle",
                "Square",
                "Triangle",
            ]
        },
        {
            type: "input",
            message: colors.magenta(questions[3]),
            name: "shapeColor",
        }
    ]).then((answers) => {
            // convert user inputs to proper format for class construction
            let text = answers.text
            let textcolor = removeWhiteSpace(answers.textColor.toLowerCase().trim())
            let shape = answers.shape.toLowerCase().trim()
            let shapeColor = removeWhiteSpace(answers.shapeColor.toLowerCase().trim())

            // switch statement to construct class based on shape input
            switch (shape) {
                case 'circle':
                    return logo = new Circle(text, textcolor, shape, shapeColor);
                case 'square':
                    return logo = new Square(text, textcolor, shape, shapeColor);
                case 'triangle':
                    return logo = new Triangle(text, textcolor, shape, shapeColor);
            }
        }).then((logo) => {
            // call the render prototype function to return svg element
            svgData = logo.render()
            // generate the logo and write to svg file
            logo.generate(svgData)
            // log a success message
            logo.printConsole()
        }).catch((error) => {
            console.log(colors.red(error));
            console.log(colors.pink('Oops! Something went wrong'))
        });
};

// function to ensure color inputs are one word
function removeWhiteSpace(str) {
    return str.replace(/\s/g, '');
}

// call initialize function
init();