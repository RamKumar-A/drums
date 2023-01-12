//this is comments


var noOfClicks = document.querySelectorAll(".band").length

for (i = 0; i < noOfClicks;i++){
  document.querySelectorAll(".band")[i].addEventListener("click",handle)
}

function handle() {

  var buttonInnerHtml = this.innerHTML;
  
  switch (buttonInnerHtml) {
    case "W":
      var tom1 = new Audio("./sounds/tom-1.mp3")
      tom1.play()
      break;
     case "S":
      var tom2 = new Audio("./sounds/tom-2.mp3")
      tom2.play()
      break;
     case "A":
      var tom3 = new Audio("./sounds/tom-3.mp3")
      tom3.play()
      break;
     case "D":
      var tom4 = new Audio("./sounds/tom-4.mp3")
      tom4.play()
      break;
     case "J":
      var crash = new Audio("./sounds/crash.mp3")
      crash.play()
      break;
    case "K":
    var snare = new Audio("./sounds/snare.mp3")
      snare.play()
      break;
    case "L":
    var kick = new Audio("./sounds/kick-bass.mp3")
      kick.play()
      break;
    default:
  
  }
}