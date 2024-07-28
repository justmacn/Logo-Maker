// require SVG parent class
const SVG = require('./svg.js');

// extend the svg class to circle child
class Circle extends SVG {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
        this.xml = `<${this.shape} cx="150" cy="100" r="80"`
    }
}

// extend svg class to square, adding rect element
class Square extends SVG {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shapeColor)
        this.shape = function () {
            if (shape === 'square') {
                return 'rect'
            }
        }
        this.xml = `<${this.shape} x="10" y="10" width="150" height="150"`
    }
}

// extend the svg class to circle child
class Triangle extends SVG {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
        this.shape = function () {
            if (shape === 'triangle') {
                return 'polygon'
            }
        }
        this.xml = `<${this.shape} points="100,10 200,190 10,190"`
    }
}

module.exports = {Circle, Square, Triangle}