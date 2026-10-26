let body=document.body;
let head_1=document.createElement("h1");
head_1.innerHTML="welcome";
body.append(head_1)

let stu=[  
   {  
      name:'arun',
      gender:'Male',
      physics:88,
      maths:87,
      english:78
   },
   {  
      name:'rajesh',
      gender:'Male',
      physics:96,
      maths:100,
      english:95
   },
   {  
      name:'moorthy',
      gender:'Male',
      physics:89,
      maths:90,
      english:70
   },
   {  
      name:'raja',
      gender:'Male',
      physics:30,
      maths:25,
      english:40
   },
   {  
      name:'usha',
      gender:'Female',
      physics:67,
      maths:45,
      english:78
   },
   {  
      name:'priya',
      gender:'Female',
      physics:56,
      maths:46,
      english:78
   },
   {  
      name:'Sundar',
      gender:'Male',
      physics:12,
      maths:67,
      english:67
   },
   {  
      name:'Kavitha',
      gender:'Female',
      physics:78,
      maths:71,
      english:67
   },
   {  
      name:'Dinesh',
      gender:'Male',
      physics:56,
      maths:45,
      english:67
   },
   {  
      name:'Hema',
      gender:'Female',
      physics:71,
      maths:90,
      english:23
   },
   {  
      name:'Gowri',
      gender:'Female',
      physics:100,
      maths:100,
      english:100
   },
   {  
      name:'Ram',
      gender:'Male',
      physics:78,
      maths:55,
      english:47
   },
   {  
      name:'Murugan',
      gender:'Male',
      physics:34,
      maths:89,
      english:78
   },
   {  
      name:'Jenifer',
      gender:'Female',
      physics:67,
      maths:88,
      english:90
   }
]
let card=document.querySelector(".card-body")

stu.map((item,index)=>{
    let head_4=document.createElement("h4")
    head_4.setAttribute("class","card_title");
    let para=document.createElement("p");
    para.setAttribute("class","card-text");
    head_4.innerHTML=item.name;
    para.innerHTML=item.gender;

    card.append(head_4,para)
})

let btn=document.getElementById("button");
btn.addEventListener("click",()=>{
    // alert("button clicked");
    card.style.display="none"
    body.classList.add("dark-mode")
})

function a(){
    // body.classList.remove("dark-mode")
    body.classList.toggle("dark-mode")
}

document.getElementById("dbl").addEventListener("dblclick",()=>{
    body.style.backgroundColor="red"
})
document.getElementById("dbl").addEventListener("mousedown",(e)=>{
    console.log(e.type)
})
document.getElementById("dbl").addEventListener("mouseup",(e)=>{
    console.log(e.type)
})
document.getElementById("dbl").addEventListener("mouseover",(e)=>{
    console.log(e.type)
    body.style.backgroundColor="wheat"
})
document.getElementById("dbl").addEventListener("mouseout",(e)=>{
    console.log(e.type)
    body.style.backgroundColor="green"
})

body.addEventListener("keydown",(e)=>{
    console.log(e.type);
    console.log(e.key)
})
body.addEventListener("keyup",(e)=>{
    console.log(e.type);
    console.log(e.key)
})
body.addEventListener("keypress",(e)=>{
    console.log(e.type);
    console.log(e.key)
})

