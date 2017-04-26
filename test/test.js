var Square = require('../lib/square.js');
var should = require('should');

let square = new Square ({width: 100});

describe("classSquare", function() {
    it("Square should exist", function() {
        square.should.exist;
    });
    it("square should be a Square", function() {
      square.should.be.an.instanceof(Square);
    });
    it("square should be 100", function() {
        square.width.should.equal(100);
    });
    it("Area should be calculate", function(){
        square.getArea().should.equal(10000);
    });
});