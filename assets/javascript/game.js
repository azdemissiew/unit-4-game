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


