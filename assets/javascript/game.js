var computer_random;
var lost = 0;
var win = 0;
var numbefore = 0;

var restAndStart = function () {

    $(".crystals").empty();
    let images =['http://thumbs.dreamstime.com/z/blue-gem-1312967.jpg',
    'https://cdn4.iconfinder.com/data/icons/free-crystal-icons/512/Emerald.png',
    'https://cdn3.vectorstock.com/i/1000x1000/32/97/crystal-gem-icon-for-game-ui-vector-16193297.jpg',
    'https://cdn2.iconfinder.com/data/icons/diamonds-1/128/DiamondBlue-512.png'];

    computer_random = Math.floor(Math.random() * 60) + 30;

    $("#result").html('computer_random: ' + computer_random);
  
    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random

        });
        crystal.css({
           "background-image":"url('" + images[i] + "')",
           "background-size":"cover"

        });


        $(".crystals").append(crystal);

    }
    $("#numbefore").html("Total score: " +  numbefore);
}

restAndStart();

$(document).on('click',".crystal", function () {
    var num = parseInt($(this).attr('data-random'));
    numbefore += num;
    $("#numbefore").html("Total score:" +  numbefore);
    console.log( numbefore);
    if ( numbefore >computer_random ) {
        lost++;
        $("#lost").html("you lost: " + lost);
        numbefore = 0;
        
        restAndStart();
       
    }
    else if ( numbefore === computer_random) {
        win++;
        $("#win").html("you win: " + win);
        numbefore = 0;
        
        restAndStart();
        
    }
});

