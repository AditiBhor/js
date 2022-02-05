'use strict';
// const bookings=[];
// const createBooking=function(
//     flightnum,
//     numpassengers=1,
//     price=199 * numpassengers
//     )
// {
//     const booking={
//         flightnum,
//         numpassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('xyz',2,800);
// createBooking('aditi',5);

// const flight='LH234';
// const jonas={
//     name='Aditi Bhor',
//     passport=12345678
// }
// const checkIn=function(flightnum,passenger)
// {
//     flightnum='LH999';
//     passenger.name='mr'+passenger.name;
//     if(passenger.passport===12345678)
//     {
//         alert('checked in');
//     }
//     else{
//         alert('wrong passport!!');
//     }
// }
// checkIn(flight,jonas);
// console.log(flight);
// console.log(jonas);

// const newpassport=function(person)
// {
//     person.passport=Math.traunc(Math.random()*10000000); 
// }
// newpassport(jonas);
// checkIn(flight,jonas);






// const oneword=function(str)
// {
//     return str.replace(/ /g,'').toLowerCase();
// }
// const upperFirstWord=function(str)
// {
//     const [first,...other]=str.split(' ');
//     console.log([first,...other]);
//     return [first.toUpperCase(),...other].join(' ');

// }
// //higher-order function
// const transformer=function(str,fn)
// {
//     console.log(`original string: ${str}`);
//     console.log(`transform string:${fn(str)}`)
//     console.log(`transformed by:${fn.name}`)
// }
// //transformer('JavaScript is the best',upperFirstWord);
// transformer('JavaScript is the best',oneword);
// const high5=function()
// {
//     console.log('hello');
// }
// document.body.addEventListener('click',high5);








// const greet=function(greeting)
// {
//     return function(name)
//     {
//         console.log(`${greeting} ${name}`)
//     }
// }
// const greeterHey=greet('hey')
// greeterHey('jojan');
// greeterHey('steven');
// greet('hello')('jonas');

// //challenge
// const greetarr=greeting=>name=>console.log(`$
// ${greeting} ${name}`);
// greetarr('hi')('jonas');










// const lufthansa={
//     airline:'lufthansa',
//     iatacode:'LH',
//     bookings:[],
//     //book:function()
//     book(flightnum,name)
//     {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightnum}`);
//         this.bookings.push({flight:`${this.iatacode} ${flightnum}`,name});
//     },
// };
// lufthansa.book(234,'aditi');
// lufthansa.book(345,'bdyqg');
// console.log(lufthansa);

// const eurowings={
//     name:'eurowings',
//     iatacode:'EW',
//     bookings:[],
// };
// const book=lufthansa.book;
// //does not work
// //book(23,'sarah willoams');

// const swiss={
//     airline:'swiss',
//     iatacode:'LX',
//     bookings:[],
// }


// //call method
// book.call(eurowings,23,'sarah williams');
// console.log(eurowings);
// book.call(lufthansa,284,'aditi');
// console.log(lufthansa);

// //apply method
// const flightdata=[425,'georghe cooper'];
// book.apply(swiss,flightdata);//we dont use apply method
// console.log(swiss);

// book.call(swiss,...flightdata)//insteadwe use call with spread operator

// //bind method
// const bookEW=book.bind(eurowings);
// const bookLH=book.bind(lufthansa);
// const bookLX=book.bind(swiss);
// bookEW(23,'stevan');

// const bookEW23=book.bind(eurowings,23);//bookEW23 23 is set for enrowing as defalut
// bookEW23('jonas schem');

// //with event listener
// lufthansa.plans=300;
// lufthansa.buyplane=function()
// {
//     console.log(this);
//     this.plans++;
//     console.log(this.plans);
// };
//document.querySelector('.buy').addEventListener('click',lufthansa.buyplane.bind(lufthansa));



//partial application
// const addtax=(rate,value)=>value+value*rate;
// console.log(addtax(0.1,200));

// const addvat=addtax.bind(null,0.23);
// //addvat=value=>value+value*0.23;
// console.log(addvat(100));
// console.log(addvat(23));//console.log(23+23*0.23);

// const addtaxrate=function(rate)
// {
//     return function(value)
//     {
//         return value+value*rate;
//     };
// };
// const addvat2=addtaxrate(0.23);
// console.log(addvat2(100));



//coding challenge

// const poll={
//     question:'what is your fav programing lan?',
//     option:['0:js','1:py','2:r','3:c++'],
//     answer:new Array(4).fill(0),
//     registernewanswer()
//     {
//         const answer=prompt(`${this.option}\n${this.option.join('\n')}(write option number)`)
//         console.log(answer);
//         //register answer
//         typeof answer==='number'&&answer<this.answer.length && this.answer[answer]++;
//         console.log(this.answer);
//     },
//     displayresult(type='array')
//     {
//         if(type==='array')
//         {
//             console.log(this.answer);
//         }
//         else if(type==='string')
//         {
//             console.log(`${this.answer.join(', ')}`);
//         }
//     },
// };
// document.querySelector('.poll').addEventListener('click',poll.registernewanswer.bind(poll));//because this key word pointing to button which we dont want ....we want to point it tu poll object
// poll.displayresult.call({answers:[5,2,3]},'string'); 














// const runonce=function()
// {
//     console.log('this will never run again');
// };
// runonce();

// //immdiately invoked function expressions way-1
// (function()
// {
//   console.log('this will never run again');  
// })();
// //immdiately invoked function expressions  way-2
// (()=>console.log('this will never run again'))();







// const securebooking=function()
// {
//     let passenger=0;
//     return function()
//     {
//         passengercount++;
//         console.log(`${passengercount} passenger`);
//     }
// }
// const booker=securebooking();
// booker();
// booker();
// booker();
// console.dir(booker);






//exapmple 1
let f;
const g=function()
{
    const a=23;
    f=function()
    {
        console.log(a*2);
    }
}
g();
f();
console.log(f);

const h=function()
{
    const b=777;
    f=function()
    {
        console.log(b*2);
    };
};

g();
f();
console.log(f);

h();
f();
console.log(f);

//example 2

const boardpassengers=function(n,wait)
{
    const perGroup=n/3;
    setTimeout(function(){
        console.log(`we are now boarding all ${n} passenger`);
        console.log(`there are 3 groups,each with ${perGroup} passenger`);
    },wait*1000)
    console.log(`will start boarding in ${wait} second`);
};
boardpassengers(180,3)