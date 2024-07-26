// require modules
const fs = require('fs')

//create parent svg class
class SVG {
    constructor(text, textcolor, shape, shapeColor) {
        this.text = text
        this.textcolor = textcolor
        this.shape = shape
        this.shapeColor = shapeColor
    }

    renderLogo() {
        // declare svg markup as variable
        const svg = `
        <svg version="1.1" width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
            <${this.shape} cx="150" cy="100" r="80"
            fill="${this.shapeColor}" />
                <text x="150" y="125"
                font-size="60" text-anchor="middle"
                fill="${this.textcolor}">${this.text}</text>
        `;

        return fs.writeFile('../examples/test2.svg', svg, err => {
            if (err) {
                console.error(err)
            }
        })
    }
}

const svgTest = new SVG(  // temp test of class and function
    'MAC',
    'blue',
    'circle',
    'orange'
)

svgTest.renderLogo()

// TODO: require and add fs promises to render function
// TODO: determine color keyword validation
// TODO: extend class to shapes.js
// TODO: pass in inquirer values, req. export modules