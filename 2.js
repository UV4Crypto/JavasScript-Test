// Write a code for a program that prints the sum of digits of a given number. You have to take the number as input from the user. 
// A sum of digits means that if you enter the number 4567, the output should be 4+5+6+7, which is 22.
// Here are some points that you need to take care of while writing this program:

// 1. You need to convert the input into a number, as a prompt will give you the input as the string data type. We solved this problem before using the parseInt() function.

// 2. You then need to access the individual element from the number. Can you think a way to do that? The modulus property might be quite helpful in this endeavour.

let num ;
num = " 59876 kk";
let n = parseInt(num); 
let sum = 0 ;
while(n>1){
    sum =sum + (n%10);
    n= parseInt(n/10);
   
}
console.log(n);
console.log(sum);
console.log("Sum of the digits of"+num +" = "+sum);