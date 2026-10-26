let a="erode is one of the district in tamilnadu";
console.log(a);
console.log(typeof a);
console.log(a.length);
console.log(a[0]);
console.log(a[2]);
console.log(a.charAt(1));
console.log(a.charCodeAt(1));
console.log(a.at(3));
console.log(a.indexOf("district"));
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.trim());
console.log(a.trimStart());
console.log(a.trimEnd());
console.log(a.slice(0,5));
console.log(a.substring(0,5));
console.log(a.split(" ").reverse().join(" "));
console.log(a.replace("tamilnadu","TN"));
console.log(a.replaceAll(" ","-"));

//array methods
let b=[1,2,3,4,5,6,7,8,9];
console.log(b);
console.log(typeof b);
console.log(b.length);
console.log(b[0]);
console.log(b.at(3));
console.log(b.indexOf(5));
console.log(b.slice(0,3));
let secArr=[2,["html","css","js","react"],6];
console.log(secArr[1]);
console.log(secArr[1][2]);

//add element
b.push("hello");
b.shift("hi");
b.splice(2,4);
console.log("after using delete",b);

//object methods
let demo={
    name:"erode",
    district:"erode",
    state:"tamilnadu",
    qualification:["bsc",{
        year:2024,
        "college":"kpr",
    },"mca"],
}
console.log(demo);
console.log(demo["name"]);
console.log(demo["qualification"][1]);

let d="this is an js";
let e=[,5,6,7,8,9,0,3,4]
console.log(d);
console.log(typeof d);
console.log(d.length);
console.log(d[3]);
d=d+ " end";
console.log(d);

