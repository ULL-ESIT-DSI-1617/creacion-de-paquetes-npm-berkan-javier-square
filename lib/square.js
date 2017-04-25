/**
 * Class that represents a square. Inherits from Shape.
 * @type {Class}
 */
class Square extends Shape {
    /**
     * Constructor of the square class. Call the super method of the parent class.
     * @param  {Array} options Width and length of the shape.
     */
    constructor(options) {
        super(options)
    }
    /**
     * Function that calculates the square area.
     * @return {Number} Returns the calculated value of the area.
     */
    area() {
        return Math.pow(this.width, 2)
    }
}

Shape.Shapes.Square = Square;
module.exports = Square;