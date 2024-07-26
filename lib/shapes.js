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

    renderLogo(){
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

        return svg;

    }
}

const svgTest = new SVG(
    'MAC',
    'blue',
    'circle',
    'orange'
)

fs.writeFile('../examples/test.svg', svgTest.renderLogo(), err => {
    if (err) {
      console.error(err)};
    })
