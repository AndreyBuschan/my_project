//Минимум

//№1
let a = 0.1;
let b = 0.2;
const addition = a + b;
console.log(addition);
alert (addition);

//№2
let string = '1'; 
let number = 2;
let sum = Number(string) + number;
console.log(sum);
alert(sum)

//№3
let flash = prompt ('Укажите обьем памяти Flash в Гб');
let file = 0.82;
console.log(Math.floor (flash/file));
alert(Math.floor (flash/file));

//Норма

//4
let sumMoney = prompt ('Укажите свою сумму денег');
let price = prompt ('Укажите стоимость шоколадки');
let amountСhocolates = Math.floor(sumMoney / price);
let change = sumMoney - (amountСhocolates * price);
console.log(amountСhocolates);
console.log(change);
alert(amountСhocolates);
alert(change);
alert(sumMoney%amountСhocolates)

//5
let threeDigitNumber = prompt ('Укажите трехзначное число');
alert(('' + threeDigitNumber).split('').reverse().join(''));

let threeDigitNumber2 = prompt ('Укажите трехзначное число');
let n = threeDigitNumber2 + '';
let result = n[n.length -1];
for(let i = n.length - 2; i >= 0; i--)
  result += n[i];
alert(result);