//Минимум

//№1
// Function Declaration
/* function sum(a, b) {
  return a + b;
} */

// Function Expression
/* let sum = function(a, b) {
  return a + b;
} */

// Стрелочная функция (короткий способ написания функции)
'(a, b) => a + b;' //Function Declaration
'let sum = (a, b) => a + b;' // Function Expression

//№2
function myFn(j, k, l) {
  return myFn.length; 
}
console.log(myFn.length);

//№3
let a = +prompt ('Первое число');
let b = +prompt ('Второе число');

function myFn (a, b) {
  
  if (a < b){
    return '-1';
  } else if (a === b) {
    return '0';
  } else if (a > b) {
    return '1';
  } else {
    return 'error';
  }
}
console.log(myFn(a,b));

//4
let n = +prompt ('Факториал');
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log( factorial(n));

//5
let s = +prompt('Первое число');
let d = +prompt('Второе число');
let f = +prompt('Третье число');
let tripleNumber = (s,d,f) => +(''+s+d+f)
console.log(tripleNumber(s,d,f))

//6
let w = +prompt ('width');
let h = +prompt ('height');
function rectSurface(w, h) {
  if (h !== undefined) {
    return w ** 2;
  }
  return w * h;
}
console.log(rectS(w, h));


//Норма

//1
let number = +prompt ('Perfect number');
function is_perfect(number) {
let temp = 0;
  
  for (let i = 1; i <= number / 2; i++) {
  if (number % i === 0) {
    temp += i;
    }
  }
    
  if (temp === number && temp !== 0) {
  return 'Это идеальное число';
  } else {
  return 'Это не идеальное число';
  }  
}
console.log(is_perfect(number));

//2


