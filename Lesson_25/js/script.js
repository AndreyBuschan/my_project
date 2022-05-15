//console.log('Hello, World!');
//console.error('Error 404');
//console.warn('Warning');
const firstUserName = 'Andrey'; //lower Camel case
let first_user_name = 'Oleg'; //Snake case
var FirstUserName = 'Denis'; //Pascal case, Camel case
const FIRST_USER_NAME = 'VALERA'; 
/* let first-user-name = 'Sergey'; */ // kebab-case

console.log(firstUserName, first_user_name, FirstUserName, FIRST_USER_NAME);

/* let 1name = 'Oleg';
let first-name = 'Oleg'; 
let first name = 'Oleg';
const age = 17; 
let age = '18'; */ //неправильное использование имен

let name = prompt("NAME?");
alert(`Hello, ${name}!`);

const age = prompt('Сколько тебе лет?', 30);
alert(`Тебе ${age} лет!`);


let length = prompt('Длина стороны квадрата?', 6);
alert(`Периметр квадрата равен ${length*4}`);