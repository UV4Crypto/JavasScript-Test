var book = {
    title:'XYX',
    2:"yuyu",
    "i-savailable":true
}
for(var key in book){
    console.log(key+"="+book[key]);
}

console.log('new example');

var itemsToBuy = {
    milk: {
        quantity : 5,
        price: 20
    },
    bread: {
        quantity : 2,
        price: 15
    },
potato: {
    quantity : 3,
    price: 10
}
}

var arr1 = [];
var arr2 = [];
// Print the array consisting of the names of the items here
for(var key in itemsToBuy ){arr1.push(key)} // Print the array consisting of the prices of the items here
console.log(arr1);
for (var key in itemsToBuy){
var arr = key.price;
arr2.push(arr)}
console.log(arr2);