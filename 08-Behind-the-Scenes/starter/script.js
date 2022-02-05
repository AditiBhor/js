'use strict';
/*
function calcage(birthyear)
{
    const age=2022-birthyear;
    function printage()
    {

        const output=`${firstname} you are ${age},born in ${birthyear}`;
        console.log(output); 
        if(birthyear>=1981 && birthyear<=1996)
         {
            var millenial=true;
            const str=`oh ,and your a millenial,${firstname}`;
            console.log(str);
        }
        console.log(millenial);
    }
    printage();
    return age;
}
const firstname='aditi';
calcage(2000);
*/




// console.log(me);
// console.log(job);
// console.log(year);

// var me='jonas';
// let job='teacher';
// const year='2000';







// console.log(this);
// const calcage=function(birthyear)
// {
//     console.log(2022-birthyear)
//     console.log(this);
// } 





//primitive types
let lastname='willims';
let oldlastname=lastname;
lastname='davis';
console.log(lastname,oldlastname);
//reference types
const jessica={
    firstname:'jessica',
    lastname:'willims',
    age:27,
};
const merriedjessica=jessica;
merriedjessica.lastname='davis';
console.log('before marriage:',jessica);
console.log('After marriage:',merriedjessica);
//copying objects
const jessica2={
    firstname:'jessica',
    lastname:'willims',
    age:27,
    family:['joy','zuzu']
};
const jessicacopy=Object.assign({},jessica2);
jessicacopy.lastname='davis';
console.log('before marriage:',jessica2);
console.log('After marriage:',jessicacopy);
jessicacopy.family.push('mary');
console.log('before marriage:',jessica2);//we dont want mary in this object
console.log('After marriage:',jessicacopy);
