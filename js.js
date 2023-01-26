

let form = document.querySelector("#form");
   let playername = document.querySelector(".name"); 
 

 form.addEventListener('submit', function(e){

e.preventDefault();


let playernamevalue = playername.value; 

localStorage.setItem('first-name', playernamevalue); 


window.location.href = "game.html"; 



 })