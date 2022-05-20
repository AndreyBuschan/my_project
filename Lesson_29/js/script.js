// Минимум

//1
const myCar = {
  type: "Toyota", 
  model: "Rav4", 
  year: 2019,
  averageSpeed: 50,
  tank: 50,
  consumption: 8,
  driver1: "Andrey"
}

//1.1
console.log( myCar );

//1.2
myCar['driver2'] = 'Anna';
// Если бы в задании было написано 'измените свойство объекта и добавьте туда водителя', 
// то выглядело бы это следующим образом: 
// myCar.driver1 = 'Andrey, Anna';

//1.3
function refueling() {
  let remainingFuel = 10;
  
    if (remainingFuel <= 10) {
      return (('Нужно заправить ') + (myCar.tank - remainingFuel))
    } else {
      "";
    }
  }
  
  console.log( refueling() );

//1.4
function timeMachine(distance) {
let time = distance / myCar.averageSpeed;

  if (time > 4) {
    return time + (Math.floor(time / 4));
  } else {
    return time;
  }
}

console.log( timeMachine(200) );
console.log( myCar.hasOwnProperty("driver1") );


/* function driverСheck() {
let name = myCar.driver1;

myCar.hasOwnProperty("driver1");
}

console.log( driverСheck("Andrey") ); */
