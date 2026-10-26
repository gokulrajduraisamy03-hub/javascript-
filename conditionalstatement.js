//conditional stament
let age=25;
if(true){
    console.log("true block")
}
else{
    console.log("else block")
}
if(age>=18){
    console.log("eligible")
}
else{
    console.log("not eligible")
}

if((age>=1)&&(age<=20)){
    console.log("eligible");
}
else if((age>=21)&&(age<=50)){
    console.log("not eligible");
    let weight=55;
    if(weight>=60){
        console.log("above 60")
    }
    else{
        console.log("below 60")
    }
}
else if((age>=51)&&(age<=100)){
    console.log("senoir")   
}
else{
    console.log("invalid entry")
}

let day=1;
switch(day){
    case 1:
        console.log("sunday")
        break;
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log("wednesday")
        break;
    default:
        console.log("invalid")
}
