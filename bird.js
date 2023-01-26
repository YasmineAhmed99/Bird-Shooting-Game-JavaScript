

const increaseScore = () => {
    let score = document.querySelector("#scorecount").innerHTML;
    let scoreHTML = document.querySelector("#scorecount");
    let count = Number(score);
    scoreHTML.innerHTML = count - 10 ;
  };
  
  const increaseBird = () => {
    
    let score = document.querySelector("#birdscount").innerHTML;
   
    let scoreHTML = document.querySelector("#birdscount");
    
    let count = Number(score);
 
    scoreHTML.innerHTML = count + 1;
  };
  


let bluebird = document.querySelectorAll(".bluebird"); 




bluebird.forEach(function(e){

    e.addEventListener('click', function(event){

    event.target.style.display ="none"; 
increaseScore();
increaseBird();

    })
})


const increaseScore1 = () => {

  let score = document.querySelector("#scorecount").innerHTML;
  let scoreHTML = document.querySelector("#scorecount");
  let count = Number(score);
  scoreHTML.innerHTML = count + 10 ;
};

const increaseBird1 = () => {
  let score = document.querySelector("#birdscount").innerHTML;
  let scoreHTML = document.querySelector("#birdscount");
  let count = Number(score);
  scoreHTML.innerHTML = count + 1;
};



let blackbird = document.querySelectorAll(".blackbird"); 




blackbird.forEach(function(e){

  e.addEventListener('click', function(event){

  event.target.style.display ="none"; 
increaseScore1();
increaseBird1();

  })
})



const increaseScore2 = () => {
  let score = document.querySelector("#scorecount").innerHTML;
  let scoreHTML = document.querySelector("#scorecount");
  let count = Number(score);
  scoreHTML.innerHTML = count + 5 ;
};

const increaseBird2 = () => {
  
  let score = document.querySelector("#birdscount").innerHTML;
  let scoreHTML = document.querySelector("#birdscount");
  let count = Number(score);
  scoreHTML.innerHTML = count + 1;
};



let whitebird = document.querySelectorAll(".whitebird"); 




whitebird.forEach(function(e){

  e.addEventListener('click', function(event){

  event.target.style.display ="none"; 
increaseScore2();
increaseBird2();

  })
})

function showdiv(){

  document.getElementById("p2").innerHTML = scorecount.innerHTML.toString();

  if(scorecount.innerHTML>50){

    document.getElementById("p1").innerHTML = "YOU WIN";
   
   }else
   {
   
    document.getElementById("p1").innerHTML = "YOU LOSE";
   }


document.getElementById("showscore").style.visibility= "visible";


} 
setTimeout("showdiv()", 58000);

const moveRight=function(imageObject,left)
{
  let id=setInterval(function(){
    left+=5;

    if(left<(innerWidth-imageObject.width))
    {
      imageObject.style.left=left+"px";
    }
    else
    {
        clearInterval(id);
        imageObject.classList.add("flip");
        moveLeft(imageObject,left)
    }

  },100);

}

const moveLeft=function(imageObject,left)
{
  let id=setInterval(function(){
    left-=5;
    if(left>=0)
    imageObject.style.left=left+"px";
    else{
      clearInterval(id);
      imageObject.classList.remove("flip");
      moveRight(imageObject,left);
    }


  },100);
}


const moveRight2=function(imageObject,left)
{
  let id=setInterval(function(){
    left+=5;

    if(left<(innerWidth-imageObject.width))
    {
      imageObject.style.left=left+"px";
    }
    else
    {
        clearInterval(id);
        imageObject.classList.add("flip");
        moveLeft2(imageObject,left)
    }

  },50);

}

const moveLeft2=function(imageObject,left)
{
  let id=setInterval(function(){
    left-=5;
    if(left>=0)
    imageObject.style.left=left+"px";
    else{
      clearInterval(id);
      imageObject.classList.remove("flip");
      moveRight2(imageObject,left);
    }


  },50);
}


const moveRight3=function(imageObject,left)
{
  let id=setInterval(function(){
    left+=10;

    if(left<(innerWidth-imageObject.width))
    {
      imageObject.style.left=left+"px";
    }
    else
    {
        clearInterval(id);
        imageObject.classList.add("flip");
        moveLeft3(imageObject,left)
    }

  },80);

}

const moveLeft3=function(imageObject,left)
{
  let id=setInterval(function(){
    left-=10;
    if(left>=0)
    imageObject.style.left=left+"px";
    else{
      clearInterval(id);
      imageObject.classList.remove("flip");
      moveRight3(imageObject,left);
    }


  },80);
}

