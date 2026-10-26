//dom means document of method
const user="gokul"
const age=prompt("enter your age...")
let para_1=document.getElementById("para-1");
console.log(para_1);
// para_1.innerHTML="<u>hello welcome:<u/>"+user
// para_1.innerText="<u>hello welcome:<u/>"+user
para_1.textContent="<u>hello welcome:</u>"+user+age;
para_1.style.backgroundColor="red";
para_1.style.color="white";

let head_1=document.getElementsByClassName("head-1")
console.log(head_1)
head_1[0].innerHTML="<del>thanks to visit</del>"
head_1[0].style.color="red"
head_1[1].innerHTML="<h4>list tag</h4>"

let address=document.getElementsByTagName("address");
console.log(address)
address[0].innerHTML="<h2>first address tag</h2>"
address[0].style.color="green"
address[1].innerHTML="second address tag"

//quary selector
let id=document.querySelector(".demo")
id.innerHTML="demo test"
id.style.backgroundColor="red"

let input=document.querySelectorAll("input")
input[0].style.backgroundColor="wheat";
input[1].style.backgroundColor="white"
input[0].setAttribute("value","gokul")
input[0].setAttribute("required","true")
console.log(input[0].getAttribute("value"));
input[2].style.border="none"