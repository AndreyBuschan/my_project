const shoppingList = [{name: 'apple', price: 1, quantity: 3, bought: true}, 
  {name: 'orange', price: 2, quantity: 4, bought: false}, 
  {name: 'banana', price: 3, quantity: 5, bought: false},
  {name: 'apricot', price: 4, quantity: 6, bought: true}]


shoppingList.sort(function (a, b) {
  if (a.bought > b.bought) {
    return -1;
  }
  if (a.bought < b.bought) {
    return 1;
  }
  return 0;
  });

shoppingList.sort();  


function removeItem(shoppingList, name) {
  return name;
}

removeItem(shoppingList, 'banana');


