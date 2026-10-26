console.log("hello worls, this is external script")
//data types in javascript
let user="gokul@gmail.com";
const password="123456";
let age=23;
const isalive=true;
const percentage=30n;
let sample;
console.log(typeof user);
console.log(typeof password);
console.log(typeof age);
console.log(typeof isalive);
console.log(typeof percentage);
console.log(typeof sample);
//
console.log(2+4);
console.log(2-4);
console.log(2*4);
console.log(2/4);
console.log("2"-"u");

//broser object model
//console.log(window);

// alert("hello, world");
// console.warn("alert message");

// let b=prompt("enter your name:");
// console.log(b);
// let c=confirm("are you sure?")
// console.log(c);

// let n1=prompt("enter first number");
// let n2=prompt("enter second number");
// console.log(n1+n2);
// console.log(Number(n1)+Number(n2));
// console.log(parseInt(n1)+parseInt(n2));
// console.log(parseFloat(n1)+parseFloat(n2));
// console.log(String(n1)+String(n2));

//operators in javascript 
//arithmetic operators +,-,*,/,%
//unary operators ++,--,typeof
let a=30;
a++; // a=a+1
++a; //a=a+1
console.log(a);
let b=9;
b--; //b=b-1
--b; //b=b-1
console.log(b);
//assignment operators =,+=,-=,*=,/=,%=
let c=10;
c+=6; //c=c+6
console.log(c);
c-=9; //c=c-9
console.log(c);
c*=2;//c=c*2
console.log(c);
c/=4;//c=c/4
console.log(c);
c%=3;//c=c%3
console.log(c);
//comparison operators ==,===,!=,!==,>,<,>=,<=
let d=10;
let e="10";
console.log(d==e);
console.log(d===e);
console.log(d!=e);
console.log(d!==e);
console.log(d>e);
console.log(d<e);
console.log(d>=e);
console.log(d<=e);
//logical operators &&,||,!
let f=10;
let g=20;
console.log(f>g && f<g);
console.log(f>g || f<g);
console.log(!(f>g));
//ternary operators
let h=100;
let i=20;
let result=(h>i)?"h is greater":"i is greater";
console.log(result);

//string template literals
console.log("H value is:"+h+"\nand I vluse is:"+i);  // /n is next line /t is tab
console.log(`H value is ${h} I value is ${i}`);
