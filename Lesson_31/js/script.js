class Сircle {

  constructor(radius) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = Math.sqrt(square / Math.PI);
  }

  getDiameter() {
    let diameter = this.radius * 2;
    return diameter;
  }

  square() {
    let square = Math.PI * (this.radius ** 2);
    return square;
  }

  length() {
    let length = 2 * Math.PI * this.radius;
    return length;
  }
}

let circle = new Сircle(5);

circle.getRadius()
circle.getDiameter()
circle.square()
circle.length()