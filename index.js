
var num1 = roll(".img1");
var num2 = roll(".img2");
winner (num1,num2);

function winner(n1,n2){
if (n1 > n2){
    document.querySelector("h1").innerHTML= "Player 1 Wins!";
}
else if (n2 > n1){
    document.querySelector("h1").innerHTML= "Player 2 Wins!";

}
else{
    document.querySelector("h1").innerHTML= "Tie";

}
}


function roll(text){
    var num = Math.floor((Math.random() * 6) + 1);
    if (num === 1){
        document.querySelector(text).setAttribute("src", "./images/dice1.png");
        return num;
    }
    else if(num===2){
        document.querySelector(text).setAttribute("src", "./images/dice3.png");
        return num;
    }
    else if(num===3){
        document.querySelector(text).setAttribute("src", "./images/dice3.png");
        return num;
    }
    else if(num===4){
        document.querySelector(text).setAttribute("src", "./images/dice4.png");
        return num;
    }
    else if(num===5){
        document.querySelector(text).setAttribute("src", "./images/dice5.png");
        return num;
    }
    else if(num===6){
        document.querySelector(text).setAttribute("src", "./images/dice6.png");
        return num;
    }
}
