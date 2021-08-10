let player0EL = document.querySelector('.player--0')
let player1EL = document.querySelector('.player--1')
let score0EL = document.querySelector('#score--0');
let score1EL = document.querySelector('#score--1'); // DOM element
let current0EL = document.querySelector('#current--0');
let current1EL = document.querySelector('#current--1');

let currentScore, activePlayer, scores, playing;// if defined in the function the value will be reset each time we call the function(click)

let diceEL = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

let switchPlayer = function () {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0; //if activePlayer is 0 then switch to 1, if not then switch from 1 to 0
    player0EL.classList.toggle('player--active')//add the class if don't have it, or remove it when it exists.(works like a switch)
    player1EL.classList.toggle('player--active')
}

let init = function () {
    scores = [0, 0];
    activePlayer = currentScore = score0EL.textContent = score1EL.textContent = current0EL.textContent = current1EL.textContent = 0;
    diceEL.classList.add('hidden');
    player0EL.classList.remove('player--winner')
    player1EL.classList.remove('player--winner')
    player0EL.classList.add('player--active')
    player1EL.classList.remove('player--active')
    playing = true;
}
init()

btnRoll.addEventListener('click', function () {
    if (playing) {
        let dice = Math.trunc(Math.random() * 6) + 1
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${dice}.png`; // not universal -- works only if the name of the pictures the format are united
        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;//dynamic selector
        } else {
            switchPlayer()
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        //scores[1] = scores[1] + currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner') // once it hits the 100 points, the player--winner class will be added. Then, .player--winner .name class will also follow the player--winner class to be added
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--activer')
            playing = false;
            diceEL.classList.add('hidden');
        }
        else {
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', init)