var a;
var b;

function swap(a, b) {
   var c = a + b;
 
    a = c - a;
  
    b = c - b;

    console.log(a, b);  
}

var x = 1, y = 2;

console.log(x, y); // prints 1 2

swap(x,y); // prints 1 2