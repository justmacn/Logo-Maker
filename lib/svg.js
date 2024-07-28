// require modules
const { writeFile } = require('fs/promises');

//create parent svg class
class SVG {
    constructor(text, textcolor, shape, shapeColor) {
        this.text = toUpperCase(text)
        this.textcolor = removeWhiteSpace(tolowerCase(textcolor))
        this.shape = tolowerCase(shape)
        this.shapeColor = removeWhiteSpace(tolowerCase(shapeColor))
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
        return writeFile(`../examples/${this.text}-${this.shape}.svg`, svg, err => {
            if (err) {
                console.error(err)
            }
        })
    }

    printConsole() {
        console.log(`Your ${this.shape} logo has been created succesfully`);
      }
}

// function to ensure color inputs are one word
function removeWhiteSpace(str) {
    return str.replace(/\s/g, '');
}

module.exports = SVG;

// const svgTest = new SVG(  // temp test of class and function
//     'MAC',
//     'blue',
//     'circle',
//     'orange'
// )

// svgTest.render()

// TODO: require and add fs promises to render function
// TODO: determine color keyword validation
// TODO: extend class to shapes.js
// TODO: pass in inquirer values, req. export modules