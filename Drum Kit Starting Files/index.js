

for (var i=0 ; i< document.querySelectorAll(".drum").length ; i++){

  document.querySelectorAll('.drum')[i].addEventListener("click",function ()
  { var playsound = this.innerHTML;

    makesound(playsound);
    buttonAnimation(playsound)
  });
}




document.addEventListener("keypress", function(event){
  makesound(event.key)
  buttonAnimation(event.key)
});


function makesound(key){
  switch (key) {
  case 'w':
     var audio = new Audio('sounds/tom-1.mp3');
     audio.play();
     break;

  case 'a':
     var tom2 = new Audio('sounds/tom-2.mp3');
     tom2.play();
     break;

  case 's':
     var tom3 = new Audio('sounds/tom-3.mp3');
     tom3.play();
     break;

  case 'd':
     var tom4 = new Audio('sounds/tom-4.mp3');
     tom4.play();
     break;
  case 'j':
     var adio = new Audio('sounds/snare.mp3');
     adio.play();
     break;
  case 'k':
     var audo = new Audio('sounds/kick-bass.mp3');
     audo.play();
     break;
  case 'l':
     var auio = new Audio('sounds/crash.mp3');
     auio.play();
     break;
  default: console.log(playsound)

 }

}

function buttonAnimation(currentkey){
  var buttonkey = document.querySelector('.'+currentkey)
  buttonkey.classList.add('pressed');
  setTimeout(function(){
    buttonkey.classList.remove('pressed');
  },100)
}
