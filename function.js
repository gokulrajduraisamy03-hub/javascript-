function a() {
    console.log("function working")
    let ar = ["html", "css", "js", "node", "mangodb", "mysql", "c", "c++", { name: "erode" }];

    for (let i = 0; i < ar.length; i++) {
        console.log(ar[i].name || ar[i])
    } 
}
a()

let num1=300;
function test(){
    let num2=100;
    console.log(num1+num2);
}
console.log(num1)

test()

const sum=(x,y)=>{
    console.log("function starting!!!")
    console.log(x+y)
    // return x+y
    console.log("function ended...")
}
// sum(2,4)
console.log(sum(5,8))
console.log(sum(num2=300,num1=100));

const demo=setInterval(function(){
    console.log(sum(3,4));
},2500)

const out=setTimeout(function(){
    console.log(sum(3,4))
},1200)

if(true){
    clearInterval(demo);
    clearTimeout(out)
}
