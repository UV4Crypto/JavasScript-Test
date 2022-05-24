console.log("Primtive-Type");

var a = 10;
var b = a;
a = 15;
var c = a;
console.log(a, b, c);



console.log("Non-Primtive-Type");

var a = { key1: 1, key2: 2 };
var b = a;
a = { newKey1: 10, newKey2: 20 };
var c = a;
console.log(a, b, c);



console.log("Non-Primtive-Type");

var a = { key1: 1, key2: 2 };
var b = a;
a.key1 = 3;
console.log(a, b);
