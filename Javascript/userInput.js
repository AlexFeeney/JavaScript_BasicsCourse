//
let username; 

//username = window.prompt("What's your username "); 
//console.log(username); 

//pull user inut value from html element. 
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myTextInput").value; 
    console.log(username); 

}

