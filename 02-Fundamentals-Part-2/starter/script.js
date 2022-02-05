// 'use strict';
// let hasDriversLicense=false;
// const passTest=true;
// if(passTest)hasDriversLicense=true;
// if(hasDriversLicense)console.log('i can drive')


// function logger()
// {
//     console.log('my name is nothing');
// }
// logger();

// function processor(apple,oranges) {
//     console.log(apple,oranges);
//     const juice=`juice with ${apple} apples and ${oranges}oranges`;
//     return juice;
// }
// let s=processor(3,8);
// console.log(s);


// function calagel(birthyear)
// {
//     return 2037-birthyear;
// }
// const agel=calagel(1991);
// console.log(agel);

// const agec=function (birthyear)
// {
//     return 2037-birthyear;
// }

// const agec1=birthyear=>2037-birthyear;
// const age=agec1(1991);
// console.log(age);

// const years=(birthyear,firstname)=>
// {
//     const age=2037-birthyear;
//     const retire=65-age;
//     if(retire>0)
//     {
//     return `${firstname} retires in ${retire}years`;
//     }
//     else{
//         console.log(`${firstname} has already retired`);
//     }
// }
// console.log(years(1991,"Aditi"));
// console.log(years(0,"xyz"));



// function cut(fruit)
// {
//     return fruit*4;
// }
//  function processor(apple,oranges) {
//      const applepiece=cut(apple);
//      const orangepiece=cut(oranges);
    
//     // console.log(apple,oranges);
//      const juice=`juice with ${applepiece} apples and ${orangepiece}oranges`;
//      return juice;
// }
// console.log(processor(2,3));


// const calAverage=(a,b,c)=>(a+b+c)/3;
//  let scoreD=calAverage(22,33,44);
//  let scoreK=calAverage(11,33,44);

// console.log(scoreD,scoreK);
// const checkwinner=function(avgD,avgK)
// {
//     if(avgD>=2*avgK)
//     {
//         console.log(`Dolphine win ${avgD} vs. ${avgK}`);
//     }
//     else if(avgK>=2*avgD)
//     {
//         console.log(`Dolphine win ${avgK} vs. ${avgD}`);
//     }
//     else
//     {
//         console.log('No team wins..');
//     }
// }
// checkwinner(scoreD,scoreK);
// checkwinner(567,111);

// scoreD=calAverage(23,33,44);
//  scoreK=calAverage(0,10,4);
// console.log(scoreD,scoreK);
// checkwinner(scoreD,scoreK);


// const friends=['asjsh','ydhxfiywdfg','jvxjhyf'];
// let year=new Array(1991,1992,1993,1994);
// console.log(year[1]);
// console.log(year.length);

// const firstname='aditi';
// const jonas=[firstname,'bhor',20-10];
// const calcage=function(birthyear)
// {
//     return 2037-birthyear;
// }
// const age=calcage(year[0]);
// console.log(age);



// const friends=['asjsh','ydhxfiywdfg','jvxjhyf'];
// //add elements
// const newlength=friends.push('jay');
// friends.unshift('john');
// console.log(friends);

// //remove elements
// friends.pop();
// const popped=friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('jay'));


// const calctip=function(bill)
// {
//     return bill>=50 &&bill<=300?bill*0.15:bill*0.2;
// }
// const bills=[223,65,54];
// const tips=[calctip(bills[0],calctip(bills[1]),calctip(bills[2]))];
// console.log(bills,tips);








// const jonas={
//     first:'aditi',
//     last:'bhor',
//     age:'2037-1991',
//     job:'engineer',
//     friends:['joy','xyx','xud']
// };
//  console.log(jonas.first);
// console.log(jonas['job']);
//  const namekey='name';
//  console.log(jonas['first'+namekey]);
// const interested=prompt('what do u want');
// console.log(jonas[interested]);

// if(jonas[interested])
// {
//     console.log(jonas[interested]);
// }
// else{
//     console.log('wrong input');
// }
// jonas.location='landon';
// jonas['instagram']='@aditibhor';
// console.log(jonas);
//console.log(`${jonas.friends} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);








// const jonas={
//      first:'aditi',
//      last:'bhor',
//      birthyear:2000,
//      job:'engineer',
//      friends:['joy','xyx','xud'],
//      hasDriverLicense:true,
//  calcage:function(birthyear)
//  {
//     this.age=2022-birthyear;
//     return this.age;
//   },
//   getsummary:function()
//   {
//       return `${this.first} is a ${this.calcage()}-year old ${jonas.job},and he has ${this.hasDriverLicense? 'a':'no'}driver's license`
//   }
// };
// console.log(jonas.calcage(2000));
// console.log(jonas.age)
// console.log(jonas.age)
// console.log(jonas.age)
// console.log(jonas.getsummary());








// const mark={
//     name:'mark john',
//     mass:78,
//     height:1.69,
//     calcBMI:function()
//     {
//         this.bmi=this.mass/this.height**2;
//         return this.bmi;
//     }
// };
// const john={
//     name:'john john',
//     mass:92,
//     height:1.95,
//     calcBMI:function()
//     {
//         this.bmi=this.mass/this.height**2;
//         return this.bmi;
//     }
// };
// mark.calcBMI();
// john.calcBMI();

// if(mark.bmi>john.bmi)
// {
//     console.log('mark is bigger then john' );
// }
// else
// {
//     console.log('john is bigger then mark' );
// }





// for(let rep=1;rep<=10;rep++)
// {
// console.log(`lifting weights repetition ${rep}`);
// }




// const jonasArray=[
//     'jonas',
//     'john',
//     2022-2000,
//     'engineer',
//     ['hi','hello'],
//     true
// ];
// const types=[

// ];
// for(let i=0;i<jonasArray.length;i++)
// {
//     console.log(jonasArray[i],typeof jonasArray[i]);
//     //types[i]=typeof jonasArray[i];
//     types.push(typeof jonasArray[i]);
// }
// console.log(types);
// const years=[2000,1991,1987,1967];
// const age=[];
// for(let i=0;i<years.length;i++){
//     age.push(2022-years[i]);
// }
// console.log(age);
// //continue and break
// console.log('-----------only string------------');
// for(let i=0;i<jonasArray.length;i++)
// {
//     if(typeof jonasArray[i]!=='string')
//     continue;
//     console.log(jonasArray[i],typeof jonasArray[i]);
// }
// console.log('-----------break with number------------');
// for(let i=0;i<jonasArray.length;i++)
// {
//     if(typeof jonasArray[i]=='number')
//     break;
//     console.log(jonasArray[i],typeof jonasArray[i]);
// }





// const jonasArray=[
//      'jonas',
//      'john',
//      2022-2000,
//      'engineer',
//      ['hi','hello'],
//      true
//  ];
//  for(let i=jonasArray.length-1;i>=0;i--)
//  {
//      console.log(i,jonasArray[i]);
//  }
//  for(let exercise=1;exercise<=3;i++)
//  {
//     console.log(`----------starting exercise ${exercise}-------------`);
    
//  }
//  for(let rep=1;rep<=3;rep++)
//  {
//     console.log(`lifting weight repetition${rep}`);
    
//  }









// let dice=Math.trunc(Math.random()*6)+1;

// while(dice!==6)
// {
//  console.log(`you rolled a ${dice}`);
//  dice=Math.trunc(Math.random()*6)+1;   
// }



const calctip=function(bill)
{
    return bill>=50&& bill<=300?bill *0.15:bill*0.2;

}
const bills=[11,22,33,44,55,209,938,927];
const tips=[];
const totals=[];

for(let i=0;i<bills.length;i++)
{
    const tip=calctip(bills[i]);
    tips.push(tip);
    totals.push(tip+bills[i]);
}
console.log(bills,tips,totals);
const calcavg=function(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    console.log(sum);
    return sum/arr.length;
}
console.log(calcavg([2,3,7]));