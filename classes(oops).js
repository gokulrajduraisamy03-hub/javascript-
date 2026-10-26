class a{
    constructor(x,y){
        console.log(`consructor working ${x} ${y}`)
        this.x=x;
        this.y=y;
    }

    b(){
        console.log("b method working");
        console.log(this.x+this.y)
    }

    sum(){
        return this.x+this.y
    }

    c(){
        console.log(this.sum())
    }
}
let objA=new a(2,3);
objA.b()
objA.c()

class b extends a{
    constructor(x,y){
        console.log("B class");
        super(x,y);
    }
    b(test){
        console.log("additional b method"+test)
    }
}
let objB= new b(5,7);
objB.b(" demo");