// require modules
const { writeFile } = require('fs');
const colors = require('colors/safe');

//create parent svg class
class SVG {
    constructor(text, textcolor, shape, shapeColor) {
        this.text = text
        this.textcolor = textcolor
        this.shape = shape
        this.shapeColor = shapeColor
    }

    // function to return the svg element
    render() {
        // declare svg markup as variable
        const svg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.shapePosition} fill="${this.shapeColor}" />
            ${this.textPosition} text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
        </svg>
        `;
        // generate the svg file
        return svg
    }

    // function to generate the svg as a logo
    generate(data) {
        // write the svg markup to a file
        writeFile(`./dist/${this.text}-logo.svg`, data, err => {
            if (err) {
                console.error(colors.red(err))
            }
        })
    }

    // function to give user a success message upon logo generation
    printConsole() {
        console.log(colors.green(`Your logo has been generated succesfully!`));
    }
}

// export class to extend children in shapes.js
module.exports = SVG;

