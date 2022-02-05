'use strict';
//selelcting elements
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');

const diceEl=document.querySelector('.dice');
const btnnew=document.querySelector('.btn--new');
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');
//staring conditions
// score0El.textContent=0;
// score1El.textContent=0;
// diceEl.classList.add('hidden');

// const scores=[0,0];
// let currentscore=0;
// let activeplayer=0;
// let playing=true;
let scores,currentscore,activeplayer,playing;
const init=function()
{
    const scores=[0,0];
    let currentscore=0;
    let activeplayer=0;
    let playing=true;

    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();
const switchplayer=function()
{
    document.getElementById(`current--${activeplayer}`).textContent=0;
        currentscore=0;
        activeplayer=activeplayer===0?1:0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

//rolling dice funstionality
btnroll.addEventListener('click',function()
{
    if(playing)
    {
    //generating a random dice roll
    const dice=Math.trunc(Math.random()*6)+1;
    //display dice
    diceEl.classList.remove('hidden');
    //check for rolled 1:if true ,switch to next player
    diceEl.src=`dice-${dice}.png`;
    if(dice!==1)
    {
        //add dice to current score
        currentscore+=dice;
        document.getElementById(`current--${activeplayer}`).textContent=currentscore;
    }
    else
    {
        //switch to next player
        document.getElementById(`current--${activeplayer}`).textContent=0;//we made the switchplayer function for not repeting code
        currentscore=0;                                                    //
        activeplayer=activeplayer===0?1:0;                                  //
        player0El.classList.toggle('player--active');                       //
        player1El.classList.toggle('player--active');                       //
        
    }
}
});
btnhold.addEventListener('click',function()
{
    if(playing)
    {
    //add current score to active players score
    scores[activeplayer]+=currentscore
    //scores[1]=scores[1]+currentscore
    document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];
    //check if player score is >=100
    if(scores[activeplayer]>=100)
    {
        diceEl.classList.add('hidden');
        playing=false;
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    }
    else{
        switchplayer();
    }
    //finish the game


    //switch to the next player
    switchplayer();
    }
})
btnnew.addEventListener('click',init);
