// for(let i=0;i<3;i++){
//     console.log(i)
// }

// for(let i=5;i>=0;i--){
//     console.log(`decrement ${i}`)
// }

// for (let i=0;i<=4;i++){
//     console.log(`nested i-${i}`)
//     for (let j=0;j<i;j++){
//     console.log(`nested j-${j}`)
//     }
// }

let ar=["html","css","js","node","mangodb","mysql","c","c++",{name:"erode"}];
for(let i=0;i<ar.length;i++){
    console.log(ar[i].name || ar[i])
}

for(let i in ar){
    console.log(i)
} 

for (let i of ar){
    console.log(i)
}

ar.forEach((value,index)=>{
    console.log(`for each demo "${value}" position "${index}"`)
})

let a=ar.map((value,index)=>{
    return value+index;
})
console.log(a)

