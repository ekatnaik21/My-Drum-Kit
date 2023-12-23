//no of drum keys
var noOfKeys = document.querySelectorAll(".drum").length;

//Detecting by click using innerHTML
for(var i=0; i < noOfKeys ; i++){
    //add event listner with querySelectorAll - this needs to have []
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        //this keyword gets the particular executing element
       var buttonInnerHTML = this.innerHTML;
       playSound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML) 

    });
}

//Detecting by keyboard press using keydown listner
document.addEventListener("keydown",function(event){
    playSound(event.key)
    buttonAnimation(event.key);
 });

 function playSound(sound)
 {
    switch(sound){
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            // var tom1= new Audio("sounds/tom-1.mp3")-follows the object with method creation rule- check notes
            tom1.play();
            break;
        
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;


        case "j":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(sound);

 }

}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add("pressed");

    setTimeout(function() {
       activeButton.classList.remove("pressed"); 
    },100);
}
