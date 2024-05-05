class Shape {
    constructor (color){
        this.color = color
    }
    render(){
        console.log('Rendering shape with' + this.color)
    }
}

class Circle extends Shape {
    constructor (x, y, color, radius) {
       super(color);
       this.x = x ;
       this.y = y ;
       this.radius = radius;
    }

    render() {
        console.log("Rendering circle at (" + this.x + ", " + this.y + ") with radius " + this.radius + " and color " + this.color);
        return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}" />`
    }
   

}

class Square extends Shape {
    constructor (x, y, color, sideLength) {
       super(color);
       this.x = x ;
       this.y = y ;
       this.sideLength = sideLength;
    }

    render() {
        console.log("Rendering square at (" + this.x + ", " + this.y + ") with a side length of " + this.radius + " and color " + this.color);
        return `<rect x="${this.x}" y="${this.y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`
    }
   

}

class Triangle extends Shape {
    constructor(points, color) {
      super(color);
      this.points = points;
    }
  
    render() {
      console.log("Rendering triangle with color " + this.color);
      const pointsString = this.points.map(point => point.join(",")).join(" ");
      return `<polygon points="${pointsString}" fill="${this.color}" />`;
    }
  }

  module.exports = { Circle, Square, Triangle };