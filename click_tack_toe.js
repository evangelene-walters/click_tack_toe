var counter = 0;
var moocow;
function init () {
    $("#middle div").click(clickedCell);
}

function clickedCell() {
    moocow = this;

    if(counter % 2 === 0) {
        $(this).html('X');
        $("#player_2").addClass("player_turn");
        $("#player_1").removeClass("player_turn");
    } else {
        $(this).html('O');
        $("#player_1").addClass("player_turn");
        $("#player_2").removeClass("player_turn");
    }
    counter++;
}

$(document).ready(init);

