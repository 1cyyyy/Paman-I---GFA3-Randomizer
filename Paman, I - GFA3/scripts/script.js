
function random() {
    var one = parseInt(Math.random()*20)+1;
    document.getElementById("res1").innerHTML = one;

    var two = parseInt(Math.random()*20)+1;
    document.getElementById("res2").innerHTML = two;

    var three = parseInt(Math.random()*20)+1;
    document.getElementById("res3").innerHTML = three;

    if (one >= two && one >= three) {
        document.getElementById("result").innerHTML = "Genre: Pop (" + one + ")";
    }
    if (two >= one && two >= three) {
        document.getElementById("result").innerHTML = "Genre: Rock (" + two + ")";
    }
    if (three >= one && three >= two){
        document.getElementById("result").innerHTML = "Genre: Hip-hop (" + three + ")"
    }
    if (one == two && one >= three) {
        document.getElementById("result").innerHTML = "Genre: Pop, Rock (" + one + ")";
    }
    if (one >= two && one == three) {
        document.getElementById("result").innerHTML = "Genre: Pop, Hip-hop (" + one + ")";
    }
    if (two >= one && two == three) {
        document.getElementById("result").innerHTML = "Genre: Rock, Hip-hop (" + two + ")";
    }
    if (one == two && one == three) {
        document.getElementById("result").innerHTML = "Genre: Pop, Rock, Hip-hop (" + one + ")";
    }

    var mins = two*three;
    var hr = Math.floor(mins / 60);
    var Hmin = mins - hr * 60;

    var letters = "AABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var Gletter = letters.charAt(one);
    document.getElementById("letter").innerHTML = "Starts with the letter: " + Gletter;

    document.getElementById("min").innerHTML = "Duration: (" + mins + "mins): " + hr + "hr " + Hmin + "min";
}

