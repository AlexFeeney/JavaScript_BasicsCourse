//type conversion 

//let ageNew = window.prompt("How old are you?: "); 

//change age to int using the number function
//ageNew = Number(ageNew); 
//ageNew+=1;

//log variable and datatype
//console.log(ageNew, typeof ageNew); 


//try convert string into numbers
let xNew = "pizza";
let yNew = "pizza"; 
let zNew = "pizza"; 

//type cast
xNew = Number(xNew); 
yNew = String(yNew); 
zNew = Boolean(zNew);

console.log(xNew, typeof xNew); 
console.log(yNew, typeof yNew); 
console.log(zNew, typeof zNew);

//working with constants -- const

let pi = 3.14; 
let radius; 
let circumference; 

radius = window.prompt("Enter the raduis of the circle? "); 
radius = Number(radius); 

circumference = 2 * pi * radius; 
console.log(circumference); 