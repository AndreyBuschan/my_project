// Минимум

//1
const myCar = {
  type: "Toyota", 
  model: "Rav4", 
  year: 2019,
  averageSpeed: 50,
  tank: 50,
  consumption: 8,
  drivers: {
    name: "Andrey",
    hasAccess: true
  }
}

/* myCar.drivers('Anna', folse); */
/* console.log(myCar[6]); */
console.log(myCar.drivers.name);


//1.1
console.log( myCar );

//1.2
myCar['driver2'] = 'Anna';
myCar.drivers.name2 = "Anna";
myCar.drivers.hasAccess2 = true;
console.log(myCar.drivers);

//1.3
function refueling() {
  let remainingFuel = 10;
  
    if (remainingFuel <= 10) {
      return (('Нужно заправить ') + (myCar.tank - remainingFuel))
    } else {
      "";
    }
  }
  
  console.log(refueling());
  //
  myCar.function = refueling;
  console.log(myCar.function());

//1.4
function timeMachine(distance) {
let time = distance / myCar.averageSpeed;

  if (time > 4) {
    return time + (Math.floor(time / 4));
  } else {
    return time;
  }
}

console.log(timeMachine(200));
console.log(myCar.hasOwnProperty("drivers"));


timeMachine


//Норма

const time = {
  h: 12,
  m: 49,
  s: 44,
  showTime: function () {
    
  },
  changeBySeconds(seconds) {

  }
}

time.changeBySeconds(30);
time.showTime()

console.log(`${time.h}:${time.m}:${time.s}`);