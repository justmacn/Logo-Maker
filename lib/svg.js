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

    render() {
        // declare svg markup as variable
        const svg = `
        <svg version="1.1" width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
            ${this.shapePosition}
            fill="${this.shapeColor}" />
                ${this.textPosition}
                text-anchor="middle"
                fill="${this.textcolor}">${this.text}</text>
        `;
        // generate the svg file
        return svg
    }

    generate(data) {
        // write the svg markup to a file
        writeFile(`./dist/${this.text}-logo.svg`, data, err => {
            if (err) {
                console.error(colors.red(err))
            }
        })
    }

    printConsole() {
        console.log(colors.green(`Your logo has been created succesfully!`));
      }
}

module.exports = SVG;

