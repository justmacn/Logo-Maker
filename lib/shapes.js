// require SVG parent class
const SVG = require('./svg.js');

// extend the svg class to circle child
class Circle extends SVG {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
        this.shapePosition = `<${this.shape} cx="150" cy="100" r="80"`
        this.textPosition = `<text x="153" y="115" font-size="50"`
    }
}

// extend svg class to square, adding rect element
class Square extends SVG {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shapeColor)
        if (shape === 'square') {
                this.shape = 'rect' 
            }
        this.shapePosition = `<${this.shape} x="80" y="10" width="150" height="150"`
        this.textPosition = `<text x="158" y="100" font-size="50"`
    }
}

// extend the svg class to circle child
class Triangle extends SVG {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
        if (shape === 'triangle') {
                this.shape = 'polygon'
            }
        this.shapePosition = `<${this.shape} points="150,10 250,190 50,190"`
        this.textPosition = `<text x="153" y="150" font-size="50"`
    }
}

module.exports = {Circle, Square, Triangle}