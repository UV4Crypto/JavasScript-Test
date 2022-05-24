var cart;
cart = ["Bag", "Shoes", "jeans", "shirt", "watch"];

console.log(cart);
cart.push("tai");
console.log(cart);
cart.unshift("chain");
console.log(cart);
cart.pop();
console.log(cart);
cart.shift();
console.log(cart);

var yearArr;
yearArr = [];
for (i = 0; i < 5; i++) {
  yearArr.push(2000 + i);
}
// Create an array named yearArr with values 2000 to 2004 as numbers
console.log(yearArr);
