'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnclosemodal=document.querySelector('.close-model');
const btnopenmodal=document.querySelectorAll('.show-model');
const openmodal=function()
{
    modal.classList.remove('hidden');//here hidden is the property which we are removing so we are not using '.hidden'
    overlay.classList.remove('hidden');
}
//we are making code mode readable DRY.so we aren writing function for the sentences which are repetative
const closemodel=function()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
//using function
for(let i=0;i<btnopenmodal,length;i++)
 btnopenmodal[i].addEventListener('click',openmodal);

//without using function for reference 
// for(let i=0;i<btnopenmodal,length;i++)
// {
//     btnopenmodal[i].addEventListener('click',function()
//     {
//         modal.classList.remove('hidden');//here hidden is the property which we are removing so we are not using '.hidden'
//         overlay.classList.remove('hidden');
//     });
// }

btnclosemodal.addEventListener('click',closemodel);//used function
// {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })
overlay.addEventListener('click',function()//not used function //let it be for reference
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

document.addEventListener('keydown',function(e)
{
    console.log(e);//gives array which shows which key is pressed and many more information
    console.log(e.key)//gives exact key which is pressed
    if(e.key==='Escape'&& !modal.classList.contains('hidden'))
    {
            closemodel();   
    }
});