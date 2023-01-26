


document.querySelector(".result").innerHTML= localStorage.getItem('first-name');

function countdown() {
    var seconds = 59;
    function tick() {
      var counter = document.getElementById("counter");
      seconds--;
      counter.innerHTML =
        "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else {
       
        console.log(scorecount);
        if(scorecount.innerHTML>50){

          console.log("WIN")
         
         }else
         {
         
           console.log("LOSS")
         }


      }
    }
    tick();
  }
  countdown();

  let imageObject=document.images[0];

  moveRight(imageObject,0);

  let imageObject1=document.images[1];

  moveRight2(imageObject1,0);

  let imageObject2=document.images[2];
  moveRight(imageObject2,0);
  
  let imageObject3=document.images[4];

  moveRight3(imageObject3,0);

  let imageObject4=document.images[5];

  moveRight(imageObject4,0);

  let imageObject5=document.images[6];

  moveRight2(imageObject5,0);

  let imageObject6=document.images[3];

  moveRight3(imageObject6,0);

  let imageObject7=document.images[7];

  moveRight2(imageObject7,0);

  let imageObject8=document.images[8];

  moveRight(imageObject8,0);

  let imageObject10=document.images[9];

  moveRight3(imageObject10,0);