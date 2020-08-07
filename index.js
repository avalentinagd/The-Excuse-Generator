window.onload = function() {
    randomExcuse();
}

function randomNumber(){
    var num = Math.floor(Math.random() * 4);
    return num;
}

function randomExcuse(){

    let who = ["Leticia", "Angelica", "Andrea", "Marta"];
    let action = ["eat", "listen", "move", "sing"];
    let what = ["bacon", "music", "the pen", "a song"];
    let when = ["today", "tomorrow", "yesterday", "this morning"];

    var excuse = "";
    var randomWho = who[randomNumber()];
    var randomAction = action[randomNumber()];
    var randomWhat =  what[randomNumber()];
    var randomWhen = when[randomNumber()];
    
    excuse = excuse.concat(randomWho, " ", randomAction," ", randomWhat, " ", randomWhen); 
    document.write(excuse);
}