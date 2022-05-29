class Сircle {

  constructor(R, D) {
    this.R = R;
    this.D = D;
  }

  get radius() {
    return this.R;
  }

  set radius(R) {
    this.R = Math.sqrt (S / Math.PI);
  }

  get diameter() {
    return this.D;
  }

  square(D) {
    return Math.PI * (this.R ** 2);
  }

  length(R) {
    return 2 * Math.PI * this.R;
  }
}

let circle = new Сircle(5, 10);
console.log(circle.radius, circle.diameter, circle.square, circle.length);
