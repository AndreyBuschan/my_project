/* function myFn() {
  return myFn.length; 
}
console.log(myFn(13, 24, 56)); */


//
/* function calcfactorial(n) {
  let factorial = 1;
  let i = 0;

  while (i < n) {
    i++;
    factorial = factorial * i; 
  }

  return factorial;
}

console.log('calcfactorial', calcfactorial(10)); */

//
/* 
function toNumber(a, b, c) {
  return Number(`${a}${b}${c}`)
}
console.log('toNumber-->', toNumber(1, 2, 3)); */

//
/* function calcSquare(w, h) {
  if (arguments.length === 0) {
    return 'No arguments';
  }

  if (!h) {
    return w ** 2;
  }

  return w * h;
}
console.log(calcSquare(5, 6)); */

//
/* function checkIsWork(num) {
  let result = 0;

  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      result = result + i;
    }
  }

  if (result === num) { //Закоментить
    return true
  } else {
    return false;
  }

  return result === num ? true : false;
}

console.log(checkIsWork(6)); */

//
/* function checkIsPerfect(from, to) {
  for (let i = from; i <= to; i++){
    if (checkIsWork(i)) {
      console.log(i);
    }
  }
}

console.log(checkIsPerfect(5, 10000)); */




// rest/spread ((a, b, c, ...numbers) залишок/ (...numbers) поширення)

/* const showArds = (...nums) => {
  console.log(nums.length);
}
console.log(showArds(1, 2, 4, 6));



const findMinMax = (a, b, c, ...numbers) => {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return 'Min number is ${min}, Max number is ${max}.'
}

console.log(findMinMax (3, -1, 0, 5, 3, 6, 2, 67, 90, 34, 34, 77, 222, 90)); */



// CollBack

/* const isAllow = (age) => age < 21 ? false : true;

const showErrorMsg = () => {
  alert("Access denied")
}

const showSuccessMsg = () => {
  alert("Access granted")
}

const handleAccess = (age, checkAge, showError, showSuccess) => {
  if (checkAge(age)) {
    showSuccess();
  } else {
    showError()
  }
}

handleAccess(22, isAllow, showErrorMsg, showSuccessMsg); */