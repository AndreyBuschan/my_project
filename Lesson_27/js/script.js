//Минимум

//№1
  const age = prompt ('Укажите свой возраст');

    const message = (age <= 11) ? 'Вы еще ребенок' :
      (age <= 17) ? 'Вы подросток' :
      (age <= 59) ? 'Вы взрослый' :
      'Вы пенсионер';

  alert(message);

//№2
const number = prompt ('Укажите цифру от 0-9, знак на клаве');

    const F = (number == 1) ? '!' :
      (number == 2) ? '@' :
      (number == 3) ? '#' :
      (number == 4) ? '$' :
      (number == 5) ? '%' :
      (number == 6) ? '^' :
      (number == 7) ? '&' :
      (number == 8) ? '*' :
      (number == 9) ? '(' :
      'Follow the White Rabbit' ;

  alert(F); 

//№3
let a = Number(prompt("Укажите начало диапазона (сумма всех чисел диапазона)",""));
let n = Number(prompt("Укажите конец диапазона",""));

let sum = 0;
  while (a <= n) {       
    sum += a;  
    a++;
  }
 
alert(sum)

//4
  let firstNumber = +prompt ('Делители 2 чисел. Укажите число №1');
  let secondNumber = +prompt ('Укажите число №2');

    if ((typeof firstNumber !== 'number') || (typeof secondNumber !== 'number')) 
      alert (false);
    firstNumber = Math.abs(firstNumber);
    secondNumber = Math.abs(secondNumber);
    while(secondNumber) {
      let t = secondNumber;
      secondNumber = firstNumber % secondNumber;
      firstNumber = t;
    }

  alert (firstNumber);
  console.log(firstNumber);


//5
const num1 = +prompt ('Все делители числа. Укажите число');
let count = 1;
const dilnuku = [];

  while (count <= num1) {
    const res = num1 % count;
    if (res === 0) {
      dilnuku.push(count);
    }
    count++;
  }

alert(dilnuku);
console.log(dilnuku);

//Норма

//1
const x = prompt ('Укажите пятизначное число и узнаете про палиндром');
alert (x === x.split('').reverse().join(''));

//2
const amount = prompt ('Укажите сумму покупки и узнайте свою скидку');

  const sale = (amount < 200) ? (amount * 0) :
    (amount < 300) ? (amount * 0.03) :
    (amount < 500) ? (amount * 0.05) :
    (amount * 0.07) ;

alert(Math.floor (sale));

