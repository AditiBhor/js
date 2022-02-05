'use strict';
/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.score').textContent=10;
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/
let secretnumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
//using function to not to repeat display message code
const displaymessage=function(message)
{
    document.querySelector('.meassage').textContent=message;
}


document.querySelector('.number').textContent=secretnumber;
document.querySelector('.check').addEventListener('click',function(){
    const guess=number(document.querySelector('.guess').value);
    console.log(typeof guess);
    if(!guess)
    {
        displaymessage('🤕🤕no number');
        //document.querySelector('.message').textContent='🤕🤕no number';
    }
    //winner
    else if(guess===secretnumber)
    {
        document.querySelector('.number').textContent=secretnumber;
        displaymessage('correct secrtenumber!!🙌🙌');
        //document.querySelector('.message').textContent='correct secrtenumber!!🙌🙌';
        document.querySelector('.body').style.backgroundColor="#60b347";
        document.querySelector('.number').style.width='30rem';
        if(score>highscore)
        {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

    
    }
    //when guess is wrong
    else if(guess!==secretnumber)
    {
        if(score>1)
        {
        displaymessage(guess>secretnumber?'too High📉':'too Low📈');
        //document.querySelector('.message').textContent=guess>secretnumber?'too High📉':'too Low📈';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else
        {
            displaymessage('you lost the game!!😔');
            //document.querySelector('.message').textContent='you lost the game!!😔';
            document.querySelector('.score').textContent=0;
        }
    }
    // else if(guess>secretnumber)
    // {
    //     if(score>1)
    //     {
    //     document.querySelector('.message').textContent='too High📉';
    //     score--;
    //     document.querySelector('.score').textContent=score;
    //     }
    //     else
    //     {
    //         document.querySelector('.message').textContent='you lost the game!!😔';
    //         document.querySelector('.score').textContent=0;
    //     }
    // }
    // else if(guess<secretnumber)
    // {
    //     if(score>1)
    //     {
    //     document.querySelector('.message').textContent='too Low📈';
    //     score--;
    //     document.querySelector('.score').textContent=score;
    //     }
    //     else
    //     {
    //         document.querySelector('.message').textContent='you lost the game!!😔';
    //         document.querySelector('.score').textContent=0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click',function()
{
    score=20;
    secretnumber=Math.trunc(Math.random()*20)+1;
    displaymessage('start guessing..!!');
    //  document.querySelector('.message').textContent='start guessing..!!';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('.body').style.backgroundColor="#222";
    document.querySelector('.number').style.width='15rem';
})