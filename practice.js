function evenodd(num){
    if(num%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
evenodd(10)


function largest(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a + " is largest");
    } else if (b >= a && b >= c) {
        console.log(b + " is largest");
    } else {
        console.log(c + " is largest");
    }
}
largest(10, 25, 15);


function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}
multiplicationTable(5);



function reverseNumber(num) {
    let reverse = 0;
    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }
    console.log("Reverse =", reverse);
}
reverseNumber(1234);



function sumNatural(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    console.log("Sum =", sum);
}
sumNatural(5);


