var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click",function(){
   reset();
 });

for (var i=0; i<modeButtons.length;i++){
         modeButtons[i].addEventListener("click",function(){
         modeButtons[0].classList.remove("selected")
         modeButtons[1].classList.remove("selected")
         this.classList.add("selected");
         this.textContent ==="Easy" ? numSquares = 3 : numSquares = 6;
         reset();
    });
}

function reset(){
 colors = generateRandomColors(numSquares);
 pickedColor  = pickColor();
 colorDisplay.textContent = pickedColor;
 messageDisplay.textContent ="";
 resetButton.textContent = "New Colors";

 for (var i =0; i<squares.length; i++){
     if (colors[i]){
       squares[i].style.display = "block";
       squares[i].style.background = colors[i];
      }else{
        squares[i].style.display = "none";
      }
 }
 h1.style.background = "steelblue";
 }

for(var i = 0; i < squares.length; i++ )  {
    //initial colors to squares
    squares[i].style.background = colors[i];
    //add click listeners
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.background;
        
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.background=clickedColor;
            resetButton.textContent = "Play Again";
        }
        else {
           this.style.background = "#232323";
           messageDisplay.textContent = "Try Again";
        } 
    });
}

function changeColors(color){
   for(var i = 0; i < squares.length; i++ ){
       squares[i].style.background = color

 }
}

function pickColor(){
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){
   var arr = [];
   
   for (var i=0; i<num; i++){
       arr.push(randomColor());
   }
   return arr;
}


function randomColor(){
   var r=Math.floor(Math.random() * 256);
   var g=Math.floor(Math.random() * 256);
   var b=Math.floor(Math.random() * 256);
   return "rgb(" + r +", "+ g +", "+b+")";
}
