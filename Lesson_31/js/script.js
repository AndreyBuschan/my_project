class Сircle {

  constructor(R, D) {
    this.R = R;
    this.D = D;
  }

  get radius() {
    return this.R;
  }

  set radius(R) {
    return R = Math.sqrt (S / Math.PI);
  }

  get diameter() {
    return this.D;
  }

  square(D) {
/*     alert (Math.PI * (R ** 2)); */
    console.log((D ** 2) / 4 * Math.PI);
  }

  length(R) {
    console.log(2 * Math.PI * R);
  }
}

let circle = new Сircle(5, 10);
console.log(circle.radius, circle.diameter, circle.square, circle.length);
circle.square(10);
circle.length(5);

