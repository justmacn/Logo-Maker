// require the shapes classes and fs module
const { Circle, Square, Triangle } = require('../shapes.js')

// a testing suite to test the fucntionality of the Circle class construction 
describe('Shapes', () => {
    // a test to check circle logo is generated blue with white text
    describe('Circle', () => {
        it('should construct a blue circle logo with white text', () => {
            const cir = new Circle('TST', 'white', 'circle', 'blue')

            const result = cir.render();

            const check =  `
        <svg version="1.1" width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
            ${cir.xml}
            fill="${cir.shapeColor}" />
                <text x="150" y="125"
                font-size="60" text-anchor="middle"
                fill="${cir.textcolor}">${cir.text}</text>
        `

            expect(result).toBe(check)      
        })
    })

    // a test to check square logo is generated peach with green text
    describe('Circle', () => {
        it('should construct a blue circle logo with white text', () => {
            const cir = new Circle('TST', 'white', 'circle', 'blue')

            const result = cir.render();

            const check =  `
        <svg version="1.1" width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
            ${cir.xml}
            fill="${cir.shapeColor}" />
                <text x="150" y="125"
                font-size="60" text-anchor="middle"
                fill="${cir.textcolor}">${cir.text}</text>
        `

            expect(result).toBe(check)      
        })
    })
})