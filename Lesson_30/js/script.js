
const shoppingList = [{name: 'apple', price: 1, quantity: 3, bought: true}, 
  {name: 'orange', price: 2, quantity: 4, bought: false}, 
  {name: 'banana', price: 3, quantity: 5, bought: false},
  {name: 'apricot', price: 4, quantity: 6, bought: true}]

//
shoppingList.sort(function (a, b) {
  if (a.bought > b.bought) {
    return 1;
    }
  if (a.bought < b.bought) {
    return -1;
  }
  return 0;
});

console.log(shoppingList.sort());  

//
function buyItem(shoppingList, name) {
  return shoppingList.map(function(el) {    // либо filter, но тогда покажет только один обьект и нужно удалить "else { return el }". 
    if (el.name === name) {
      return  {
        ...el,
        bought: el.bought = true,
        }
      } else {
        return el;
      }
  });
}  

console.log(buyItem(shoppingList, 'banana'));

//    
function filterByProducts(shoppingList, bought) {
  return shoppingList.filter(function(el) {
    return el.bought === false;
  });
}

console.log(filterByProducts(shoppingList, false));
