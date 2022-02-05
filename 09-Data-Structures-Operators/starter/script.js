 //'use strict';
// const weekdays=['mon','tue','wed','thu','fri','sat','sun'];
// const openingHours= {
//     [weekdays[3]]:{
//       open: 12,
//       close: 22,
//     },
//     [weekdays[4]]: {
//       open: 11,
//       close: 23,
//     },
//     [`day-${2+4}`]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   };


// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   //ES6 enhanded object literals
//  // openingHours,
//   //   openingHours: {
//   //   thu: {
//   //     open: 12,
//   //     close: 22,
//   //   },
//   //   fri: {
//   //     open: 11,
//   //     close: 23,
//   //   },
//   //   sat: {
//   //     open: 0, // Open 24 hours
//   //     close: 24,
//   //   },
//   // },
//   order:function(starterIndex,mainIndex)
//    {
//      return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
//    },
//    orderDelivery:function(obj)
//    {
//       console.log(obj);
//    },
//    orderpasta:function(ing1,ing2,ing3)
//    {
//       console.log(`here is your declious pasta with ${ing1},${ing2}${ing3}`)
//    },
//    orderpizza:function(mainin,...otherin)
//    {
//       console.log(mainin);
//       console.log(otherin);
//    }
// };

// const airline='HDhsisffd';
// const plane='A320';
// // console.log(plane[0]);
// // console.log(plane[1]);
// // console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);
// console.log(airline.indexOf('H'));
// console.log(airline.lastIndexOf('d'));
// console.log(airline.indexOf('HDhs'));
// console.log(airline.slice(3));
// console.log(airline.slice(3,7));//sisf
// console.log(airline.slice(-2));//fd
// console.log(airline.slice(airline.lastIndexOf(' ')+1));
// const checkMiddleSeat=function(seat)
// {
//   const s=seat.slice(-1);
//   if(s==='B'||s==='E')
//     console.log('middle');
//   else
//     console.log('lucky');
// };
// checkMiddleSeat('22B');
// checkMiddleSeat('33E');
// const email='hello@gmail.com';
// const loginEmail='    hello@gmail.com';
// const normalizedEmail=loginEmail.toLowerCase().trim();
// console.log(airline.replaceAll('HD','hd'));


//////////////////////////////////////////
// //map iteration
// const question=new Map(['question','best language?'],[1,'c'],[2,'java'],[3,'javascript'],['correct',3],[true,'correct'],[false,'try-again']);
// console.log(question);
// //convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap=new Map(Object.entries(openingHours));
// console.log(hoursMap);
// //Quiz app
// console.log(question.get('question'));
// for(const [key,value] of question)
// {
//   if(typeof key==='number')
//   {
//       console.log(`answer ${key}:${value}`);
//   }  
// }
// const answer=Number(prompt('your answer is:'));
// console.log(answer);
// console.log(question.get(question.get('correct')===answer));
// //Maps
// const rest=new Map();
// rest.set('name','Aditi');
// rest.set(1,'idaly');
// console.log(rest.set(2,'bmhc'));
// rest
//   .set('gsysv',['name','Aditi',1,'idaly'])
//   .set('open',11)
//   .set('closed',23)
//   .set(true,'we are open')
//   .set(false,'we are closed');
// console.log(rest.get('name'));
// const time=21;
// console.log(rest.get(time>rest.get('open')&& time <rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2);

// rest.set([1,2],rest)

////////////////////////////////////////////////
//Sets
// const ordersSet=new Set(['pasta','pizza'])
// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('bread'));
// console.log(ordersSet);
// ordersSet.delete('pizza');
// console.log(ordersSet);
// for( const order of ordersSet)
//   console.log(ordersSet);
// //example
// const staff=['waiter','chef','manager'];
// const staffUnique=[...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['waiter','chef','manager']).size);
// console.log(new Set('aditi').size);

// //property values
// const properties=Object.keys(openingHours);
// console.log(properties);

// let openStr=`we are open on ${properties.length}days:`;

// for(const day of properties)
// {
//   openStr+=`${day},`;
// }
// console.log(openStr);
// //property values
// const  value=Object.values(openingHours);
// console.log(value);
// //entire object
// Object.entries=Object.entries(openingHours);
// console.log(entries);

// for(const [day,{open,close}] of entries)
// {
//   console.log(`on ${day} we open at ${open} and close at ${close}`);
// }
// /////////////////////////////////////////////////////
// //without optional chaining
// if(restaurant.openingHours&&restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);

// //with optional chaining
//   console.log(restaurant.openingHours.mon?.open);
// //example
// const days=['mon','tue','wed','thu','fri','sat','sun'];
// for(const day of days)
// {
//   const open=restaurant.openingHours[day]?.open??closed;
//   console.log(`on ${day}, we open at ${open}`);
// }
// //method
// console.log(restaurant.order?.(0,1)??'method doesnt exist');
// console.log(restaurant.orderrisotto?.(0,1)??'method doesnt exist');
// //array
// //const user=[{name:'aditi',email:'hello@jonas.io'}];
// const users=[];
// console.log(user[0]?.name??'user array empty');
// if(users.length>0)console.log(users[0].name);
// else console.log('user array empty');
// //looping array:the for-of loop
// const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
// for(const item of menu)
// console.log(item);

// for(const item of menu.entries())
// {
//   console.log(item);
// }








// const rest1={
//   name:'capri',
//   numguests:20,
// };
// const rest2={
//   name:'la pizza',
//   owner:'xyz name',
// };

// rest2.numguests=rest1.numguests||10;

// restaurant.orderDelivery({
//   time:'22',
//   adress:'sdc fgv eer0',
//   mainIndex:2,
//   starterIndex:2
// });

// //use any data type ,return any data type, short circuiting
// //('----------------or-------------');
// //return true even if 1 is true
// console.log(3||'aditi');
// console.log(''||'aditi');
// console.log(true||0);
// console.log(undefined||null);

// //console.log('----------------And-------------');
// console.log(0 &&'aditi');//return true when all are true
// console.log(7 &&'aditi');
// //Nullish :null and undefined (not 0 or '')
// const guest=restaurant.newmenu??10;


// //1) destructuring

// //spread -because on right side of =
// const arr=[1,2,...[3,4]];
// //rest -because on left side of =
// const[a,b,...others]=[1,2,3,4,5];
// console.log(a,b,others);

// const[pizza, ,risotto,...otherfood]=[
//  ...restaurant.mainMenu,
//  ...restaurant.starterMenu,
// ];
// console.log(pizza,risotto,otherfood);

// //object
// const{sat,...weekdays}=restaurant.openingHours;
// console.log(weekdays);//all except sat 

// //2)function
// const add=function(...numbers)
// {
//     let sum=0;
//     for(let i=0;i<numbers.length;i++)
//     {
//       sum+=numbers[i];
//     }
//     console.log(sum);
// };
// add(2,5,6);
// add(3,4,5,6,6,7);

// const x=[23,5,7];
// add(...x);

// restaurant.orderpizza('mashroom','onion','olives');


// //spread operator function
// const arr=[7,8,9];
// const badnewarr=[1,2,arr[0],arr[1],arr[2]];
// console.log(badnewarr);

// const newarr=[1,2,...arr];
// console.log(newarr);

// const newmenu=[...restaurant.mainMenu,'pavbhaji'];
// console.log(newmenu);
// //copy array
// const mainmenucopy=[...restaurant.mainMenu];
// //join 2 array
// const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(menu);

// //iterables:array,strings,maps,sets,not objects
// const str='aditi';
// const letters=[...str,'','s'];
// console.log(letters);//a,d,i,t,i, ,s

// //spread operator of function 
// const ingredients=[
//   prompt("let's make pasta! ingredient1?"),
//   prompt("ingredient2"),
//   prompt("ingredient3")
// ];
// console.log(ingredients);
// restaurant.orderpasta(...ingredients);

// //objects
// const newres={foundedIn:1998,...restaurant,founder:'pavbhaji',};
// const rescopy={...restaurant};
// rescopy.name='xyzzz';
// console.log(rescopy.name);
// console.log(restaurant.name);

// const {name,openingHours,categories}=restaurant;
// console.log(name,openingHours,categories);
// const{
//   name:restaurantname,
//   openingHours:hours,
//   categories:tags,
// }=restaurant;
// //default values
// console.log(restaurantname,hours,tags);
// const{menu=[],starterMenu:starters=[]}=restaurant;
// console.log(menu,starters);

// //mutating variables
// let a=111;
// let b=999;
// const obj={a:23,b:7,c:14};
// ({a,b})=obj;
// console.log(a,b)//23 7

// //nested objecta
// const{
//   fri:{open:o,close:c}
//   }=openingHours;
// console.log(o,c);
// ////////////////////////////////////////
// // const arr=[2,3,4];
// // const [x,y,z]=arr;


// // let[main, ,secondary]=restaurant.categories;
// // console.log(main,secondary);

// // //switching with temp variable
// // //  const temp=main;
// // //  main=secondary;
// // //  secondary=main;
// // //  console.log(main,secondary);
// // //switching without temp variable

// // [main,secondary]=[secondary,main];
// // console.log(main,secondary);

// // const [starter,maincourse]=restaurant.order(2,0);
// // console.log(starter,maincourse);

// // const nested=[2,4[5,6]];
// // // const[i,,j]=nested;
// // // console.log(i,j);

// // const [i,,[j,k]]=nested;
// // console.log(i,j,k)


// //code challenge

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // //1.
// // const [players1,players2]=game.players;
// // console.log(players1,players2);
// // //2
// // const [gk,...fieldplayers]=players1;
// // console.log(gk,fieldplayers);
// // //3
// // const allPlayers=[...players1,...players2];
// // console.log(allPlayers);
// // //4
// // const players1Final=[...players1,'thiago','coutinho','periscic'];
// // //5
// // const {odds:{team1,x:draw,team2}}=game;
// // console.log(team1,draw,team2);
// // //6
// // const printGoals=function(...player)
// // {
// //   console.log(`${player.length}goals were scored`);
// // };
// // printGoals(...game.scored);
// // //7
// // team1<team2 && console.log('team1');
// // team1>team2 && console.log('team2')



// //coding challenge 2
// //1.
// for(const [i,player] of game.scored.entries())//for accessing array
// console.log(`goal ${i+1}:${player}`);
// //2.
// const odds=Object.values(game.odds);
// let average=0;
// for(const odd of odds)average=average+odd;
// average=average/odds.length;
// console.log(average);
// //3
// for(const[team,odd] of Object.entries(game.odds))//for accessing object
// {
//   console.log(team,odd);
//   const teamstr=team==='x'?'draw':`victory ${game[team]}`;
//   console.log(`odd of ${team}`)
// }

//coding challeagnge 3
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// //1
// const events=[...new Set(gameEvents.values())];
// //2
// gameEvents.delete(64);
// //3
// console.log(`an event happed , on average , every ${90/gameEvents.size} minutes`);
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }


//coding challenge 4
 const flights =
   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCode=str=>str.slice(0,3).toUpperCase();
   for(const flight of flights.split('+'))
{
  const [type,from,to,time]=flight.split(';');
  const output=`${type.startsWith('_delayed')?'emoji':' '}${type.replaceAll('_',' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':','h')})`.padStart(36);

}
  