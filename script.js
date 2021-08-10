'use strict';

let bd = document.querySelector("body")
let s1=document.querySelector('#score--0');
let s2=document.querySelector('#score--1');
let c1=document.querySelector('#current--0');
let c2=document.querySelector('#current--1');
let roll=document.querySelector('.btn--roll');
let dice=document.querySelector('.dice');
let hold=document.querySelector('.btn--hold');
let newGame=document.querySelector('.btn--new');
let p1=document.querySelector('.player--0');
let p2=document.querySelector('.player--1');
// alert("How to play the Pig Game: Each payer takes turns to roll the dice to get the score. The score fill be start at 0 points. Whoever hits 100 points wins the game!")
let score, lock;

let renew=function(){
    dice.classList.add('hidden')
    score=0;
    lock=false;
    p1.classList.remove('player--winner')
    p2.classList.remove('player--winner')
    p2.classList.remove('player--active')
    p1.classList.add('player--active')
    s1.textContent = s2.textContent = c1.textContent = c2.textContent = score;
}
renew()

bd.onload = function(){
    alert("How to play the Pig Game: Each payer takes turns to roll the dice to get the score. The score fill be start at 0 points. Whoever hits 100 points wins the game!");
    }

let rollDice=function(){
    if(!lock){
    let diceNum=Math.trunc(Math.random()*6)+1
    score+=diceNum; //score=1
    dice.classList.remove('hidden')

    switch (diceNum){
        case 1:
            dice.src='dice-1.png';
            score=0;
            if(p1.classList.contains('player--active')){
                c1.textContent = score;
                p1.classList.remove('player--active');
                p2.classList.add('player--active');
                alert('Player 1 hits #1! Switch to Player 2')
            }else{
                c2.textContent = score;
                p2.classList.remove('player--active');
                p1.classList.add('player--active');
                alert('Player 2 hits #1! Switch to Player 1')
            }
            break;
            case 2:
            dice.src='dice-2.png';
            break;
            case 3:
            dice.src='dice-3.png';
            break;
            case 4:
            dice.src='dice-4.png';
            break;
            case 5:
            dice.src='dice-5.png';
            break;
            case 6:
            dice.src='dice-6.png';
            break;
    }
    if(p1.classList.contains('player--active')){
        c1.textContent = score;
    }else{
        c2.textContent = score;
    }
}
}

let holdScore=function(){
    if(!lock){
    let point1 = Number(s1.textContent) //local
    let point2 = Number(s2.textContent)
    if(p1.classList.contains('player--active')){
        point1+=score
        s1.textContent = point1;
        p1.classList.remove('player--active')
        p2.classList.add('player--active')
        score=0
        alert('Player 1 saved Score!')
    }
    else{
        point2+=score
        s2.textContent = point2;
        p2.classList.remove('player--active')
        p1.classList.add('player--active')
        score=0
        alert('Player 2 saved Score!')
    }
    if(point1>=100){
        p1.classList.add('player--winner')
        dice.classList.add('hidden')
        alert('Player 1 Win!')
        lock=true
    }else if(point2>=100){
        p2.classList.add('player--winner')
        dice.classList.add('hidden')
        alert('Player 2 Win!')
        lock=true
    }  
}
}

roll.addEventListener('click', rollDice)
hold.addEventListener('click', holdScore)
newGame.addEventListener('click', renew)