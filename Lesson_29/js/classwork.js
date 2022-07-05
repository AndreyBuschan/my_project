/* for (let key in myCar) {
  console.log('key', key);
  console.log('value', myCar[key]);
} */




/* const cart = {

  additem: function (product, price) {

    if (product in this) {
      return this[product] = price + this[product]
    }
    this[product] = price;
  }
} 

cart.additem(`table`, 300);
cart.additem(`tv`, 1000);
cart.additem(`table`, 400);

console.log(cart);
*/



/* const cart = {
  table: 700,
  tv: 1000,

  additem: function (product, price) {
    this[product] = price;
  },

  calcSum: function () {
    let sum = 0;

    for (let key in this) {
      if(typeof this[key] === 'number'){
        sum += this[key];
      }
    }

    return this.totalSum = sum;
  }
}

cart.additem(`table`, 300);
cart.additem(`tv`, 1000);
cart.additem(`table`, 400); */
/* cart.calcSum() */
/* cart.totalSum; */

/* console.log(cart); */



const car = {
  type: "Toyota", 
  model: "Rav4", 
  year: 2019,
  averageSpeed: 50,
  tank: 50,
  consumption: 8,
  showInfo: function() {
    return `Car model ${this.model}, car year - ${this.year}`;
  },
  refuel: function(amount) {
    this.fuelAmount = amount;
  },
  addDriver: function(driver) {
    this.driver = driver;
  },
  clacTime: function(distance, driverName) {
    if (this.driver === driverName && this.driver.hasAccess) {
      console.log('Yeah! Go! Go!');

      const restFuelAmount = 0;

      if (restFuelAmount >= this.fuelAmount){
        const time = 0;

        return time;
      } else {
        return 'Plz refuel car'
      }

    } else {
      return 'No';
    }
  }
}

car.addDriver({name: 'Oleg', hasAccess: false});
console.log('car', car);

// Массыв ДЗ
const shoppungList = [{name: 'apple', price: 345, quantity: 3, bought: true}, {name: 'orange'}]

function removeItem(arr) {
  ...
}

removeItem(soppingList, 'banana');