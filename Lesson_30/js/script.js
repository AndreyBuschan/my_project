
const shoppingList = [{name: 'apple', price: 1, quantity: 3, bought: true}, 
  {name: 'orange', price: 2, quantity: 4, bought: false}, 
  {name: 'banana', price: 3, quantity: 5, bought: false},
  {name: 'apricot', price: 4, quantity: 6, bought: true}]

console.log(shoppingList);  

shoppingList.sort(function (a, b) {
  if (a.bought > b.bought) {
    return -1;
  }
  if (a.bought < b.bought) {
    return 1;
  }
  return 0;
  });

console.log(shoppingList.sort());  

function buyItem(element) {
  let basket = [];
  let total = basket.concat(element);

  return total
}
console.log(shoppingList[3]);


console.log(shoppingList.splice(3, 2));
