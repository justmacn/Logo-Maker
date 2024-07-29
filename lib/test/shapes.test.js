// require the shapes classes and fs module
const { Circle, Square, Triangle } = require('../shapes.js')

// a testing suite to test the fucntionality of the Circle class construction 
describe('Shapes', () => {
    // a test to check circle logo is generated blue with white text
    describe('Circle', () => {
        it('should construct a blue circle logo with white text', () => {
            const cir = new Circle('CIR', 'white', 'circle', 'blue')

            const result = cir.render();

            const check =  `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${cir.shapePosition} fill="${cir.shapeColor}" />
            <text x="153" y="115" font-size="50" text-anchor="middle" fill="white">${cir.text}</text>
        </svg>
        `
            expect(result).toBe(check)      
        })
    })

    // a test to check square class is constructing proper xml
    describe('Square', () => {
        it('should convert square input to <rect>', () => {
            const cir = new Square('SQR', 'green', 'square', 'peach')

            const result = cir.shapePosition;

            const check = `<rect x="80" y="10" width="150" height="150"`

            expect(result).toEqual(check)      
        })
    })

    // a test to check triangle logo is constructing proper xml and rendering correctly
    describe('Triangle', () => {
        it('should return false for traingle shapeColor being different than input', () => {
            const cir = new Triangle('TRI', 'yellow', 'triangle', 'purple')

            const result = cir.render();

            const check =  `
        <svg version="1.1" width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,10 250,190 50,190"
            fill="${cir.shapeColor}" />
                <text x="153" y="155" font-size="50" 
                text-anchor="middle"
                fill="white">TRI</text>
        `

            expect(result === check).toBe(false)      
        })
    })
})