const { Circle, Square, Triangle } = require('./shapes.js');

describe('SVG Classes', () => {
  describe('Circle', () => {
    test('renders correct SVG for circle', () => {
      const circle = new Circle(100, 100, "red", 50);
      const expectedSVG = '<circle cx="100" cy="100" r="50" fill="red" />';
      expect(circle.render()).toEqual(expectedSVG);
    });
  });

  describe('Square', () => {
    test('renders correct SVG for square', () => {
      const square = new Square(200, 200, "blue", 70);
      const expectedSVG = '<rect x="200" y="200" width="70" height="70" fill="blue" />';
      expect(square.render()).toEqual(expectedSVG);
    });
  });

  describe('Triangle', () => {
    test('renders correct SVG for triangle', () => {
      const triangle = new Triangle([[300, 300], [400, 400], [200, 400]], "green");
      const expectedSVG = '<polygon points="300,300 400,400 200,400" fill="green" />';
      expect(triangle.render()).toEqual(expectedSVG);
    });
  });
});