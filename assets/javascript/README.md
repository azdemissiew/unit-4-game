var random_result;
var lost;
var win;






// speduo code

//Random number for computer between 0-40 
// the four crystals get random number between 1-15 
// when we win or lost the crystals get a new number generate
// clicking any crystal it needs to add it with the previsley crystal clicking

// until it equal the  Random number
// if it is greater than the random result, we lost 
// if it is equal , then we increment a win counter

/*
  <div id="container">

    <div id="header">CrystalsCollector</div>
    <div id="content"> 
        <p>you will be given a random number at the start of the game</p>

    </div>
    <div id="minicontent">
        <div id="bigscore"> 

        </div>
        <div id="smallbox">
            win:<span id="winner"></span>
            loses:<span id="loser"> </span>
        </div>
    </div>
    <div id="crystals">
        <div id="octagon">
           
            <button id="box" onclick="" ><img src="assets/images/octagon.jpg" width="20"> </button>
        </div>
        <div id="diamond">
         
            <button onclick="" ><img src="assets/images/diamond.jpg" width="20"></button>
        </div>
        <div id="triangle">
        
            <button onclick="" ><img src="assets/images/triangle.jpg" width="20"></button>
        </div>
        
        <div id="circle">
           
            <button onclick="" ><img src="assets/images/circle.png" width="20"></button>
        </div>


    </div>
    <div id="totalscore"> your total score is:</div>
    <div id="thetotal"> 0</div>


 */
// creat a random numbers between 0-40
var gamerNumbers = [];
for (let index = 0; index < 40; index++) {
    gamerNumbers.push(Math.floor(Math.random()*40))
    
}
console.log(gamerNumbers)

// create a random numbers for crystals 0-15
var crystalNumber=Math.floor(Math.random()*15);
console.log(crystalNumber);

// sum the total number of crystal 

// need on click function for button with jquerry
$(document).ready(function (){
   
    
    
    
    $('#box').on('click', function() {
      computer = Math.floor(Math.random() * 4); 
      console.log("Computer Choice: " + gamerNumbers[0]);
      
  });
  $('#triangle').on('click', function() {
    computer = Math.floor(Math.random() * 4); 
    console.log("Computer Choice: " + gamerNumbers[1]);
    
});
$('#circle').on('click', function() {
    computer = Math.floor(Math.random() * 4); 
    console.log("Computer Choice: " + gamerNumbers[2]);
    
});
$('#box').on('click', function() {
    computer = Math.floor(Math.random() * 4); 
    console.log("Computer Choice: " + gamerNumbers[0]);
    
});
    
});


