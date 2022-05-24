var book = {
    title:'XYX',
    2:"yuyu",
    "i-savailable":true
}
console.log(book.title);
console.log(book[2]);
console.log(book["i-savailable"]);
console.log(book);
// console.log(book.i-savailable);


var book1 = {
    title:'XYX',
    2:"yuyu",
    "i-savailable":true,
    kitab : {
        name:"yyyy",
        class:2

    }
}
console.log(book1.kitab.name);
console.log(book1['kitab']['name']);
