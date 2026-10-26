let form=document.getElementById("form");
let name=document.getElementById("name");
let error=document.getElementById("error");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(!name.value){
        alert("all fields required")
        error.innerHTML="name fields required";
        error.style.color="red"
    }
    else{
        console.log(name.value)
    }
})

form.addEventListener("reset",()=>{
    if (confirm("are you leaving this?")){
        alert("form cleared")
    }
    else{
        console.log("done")
    }
})
name.addEventListener("change",()=>{
    error.innerHTML=""
})
name.addEventListener("focus",()=>{
    error.innerHTML=""
})
name.addEventListener("blur",()=>{
    if(!name.value){
        error.innerHTML="empty fields";
        error.style.color="red"
    }
    else{
        error.innerHTML="";
    }
})

let today=new Date().getTime();
console.log(today)
// console.log(today.getFullYear())
// console.log(today.getDate())
let future=new Date("2026-10-28").getTime()
console.log(future)
let remain=future-today
console.log(remain)
let days=Math.floor(remain/(24*60*60*1000));
console.log(days+":days")
let hrs=Math.floor(remain%(24*60*60*1000)/(60*60*1000));
console.log(hrs+":hrs");
let mins=Math.floor(remain%(60*60*1000)/(60*1000))
console.log(mins)



