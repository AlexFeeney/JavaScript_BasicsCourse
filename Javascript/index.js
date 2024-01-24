//outputing to log
console.log(`Testing JavaScript Log!!`);


//create an alert box
//window.alert(`This is an alert`);

//second alert
//window.alert(`This is the second alert`);

/*
this is 
a
multi line commnet
*/


//get the webpage
document.getElementById("myh3").textContent = `Inserting from javascript`;

//get paragraph element
document.getElementById("myP").textContent = `inserting from javascript2`;


//create variable declaration
let x; 
let y; 

//assignment
x = 100; 
y = 200; 

//sum the variables. 
console.log(x + y);

//datatypes
let name = "Alex"; 
let age = 23;
let price = 10.99; 
//example boolean variable
let boolTest = true; 
console.log(age); 
console.log(price); 

//eqivalent to print f, inserting variables using ${}
console.log(`The age is ${age} the price is ${price}`)

//print datatype
console.log(typeof name);
console.log(typeof age);
console.log(typeof price); 
console.log(typeof boolTest);


//insert variable into html document
document.getElementById("myP").textContent = `this is a name variable from javascript var == ${name}`; 


//operands

let students = 30; 
console.log(students); 

//add one to variable
students+=1; 
console.log(students); 

//multiple studets by 2 
students*=2; 
console.log(students); 
//expontents
students = students ** 2; 
console.log(students); 