// require modules
const { writeFile } = require('fs/promises');

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
            ${this.xml}
            fill="${this.shapeColor}" />
                <text x="150" y="125"
                font-size="60" text-anchor="middle"
                fill="${this.textcolor}">${this.text}</text>
        `;
        // generate the svg file
        return svg
    }

    generate() {
        // write the svg markup to a file
        writeFile(`../dist/${this.shape}.svg`, render(), err => {
            if (err) {
                console.error(err)
            }
        })
    }

    printConsole() {
        console.log(`Your ${this.shape} logo has been created succesfully`);
      }
}

module.exports = SVG;

