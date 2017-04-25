var Shape = require('../lib/square.js');
var should = require('should');

let square = new Square({
    width: 100,
    height: 50
});

describe("classSquare", function() {
    it("Square should exist", function() {
        square.should.exist;
    });
    it("square should be a Square", function() {
      square.should.be.an.instanceof(Shape);
    });
    it("square should be 100", function() {
        square.width.should.equal(100);
    });
    it("square should have height", function() {
        square.should.have.property('height');
    });
});