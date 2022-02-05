'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
/*const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
*/
// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*let arr=['a','b','c','d','e'];
console.log(arr.slice(2));//c,d,e

//splice
console.log(arr.splice(2));
console.log(arr);//originally changes the array//a,b
arr.splice(1,2)//1-index 2-how many item u wnat to delete
console.log(arr)//[a,d]

//reverse
arr=['a','b','c','d','e'];
const arr2=['j','i','h','g','f'];
console.log(arr2.reverse());
//concat
const letters=arr.concat(arr2);
console.log(letters);
console.log([...arr,...arr2]);
//join
console.log(letters.join('-'));
*/








/*
const arr=[23,44,54];
console.log(arr[0]);//23
console.log(arr.at[1]);//44

//getting last array element
console.log(arr[arr.length-1]);//54
console.log(arr.slice(-1)[0]);//54
console.log(arr.at(-2))//44
*/





/*
const movements=[200,450,-400,3000,-650,-130,70,1300];
//for const movement of movements
for (const movement of movements)
{
  if(movement>0)
  {
    console.log(`movement ${i+1}:you deposited ${movement}`);
  }
  else{
    console.log(`movement ${i+1}:you withdraw ${Math.abs(movement)}`);
  }
}
console.log('-----------------------foreach------------------------')
movements.forEach(function(mov,i,array)
{
   if(mov>0)
  {
    console.log(`movement ${i+1}:you deposited ${mov}`);
  }
  else{
    console.log(`movement ${i+1}:you withdraw ${Math.abs(mov)}`);
  } 
});
*/




/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value,key,map)
{
  console.log(`${key}:${value}`);
})

//set
const currenciesUnique=new Set(['USD','GBP','USD','EUR','EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value,key,map)
{

})*/
















const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
 const labelWelcome = document.querySelector('.welcome');
 const labelDate = document.querySelector('.date');
 const labelBalance = document.querySelector('.balance__value');
 const labelSumIn = document.querySelector('.summary__value--in');
 const labelSumOut = document.querySelector('.summary__value--out');
 const labelSumInterest = document.querySelector('.summary__value--interest');
 const labelTimer = document.querySelector('.timer');

 const containerApp = document.querySelector('.app');
 const containerMovements = document.querySelector('.movements');
 const btnLogin = document.querySelector('.login__btn');
 const btnTransfer = document.querySelector('.form__btn--transfer');
 const btnLoan = document.querySelector('.form__btn--loan');
 const btnClose = document.querySelector('.form__btn--close');
 const btnSort = document.querySelector('.btn--sort');

 const inputLoginUsername = document.querySelector('.login__input--user');
 const inputLoginPin = document.querySelector('.login__input--pin');
 const inputTransferTo = document.querySelector('.form__input--to');
 const inputTransferAmount = document.querySelector('.form__input--amount');
 const inputLoanAmount = document.querySelector('.form__input--loan-amount');
 const inputCloseUsername = document.querySelector('.form__input--user');
 const inputClosePin = document.querySelector('.form__input--pin');

 const displayMovements=function(movements)
 {
   containerMovements.innerHTML='';
   //.textcontent=0
    movements.foreach(function(mov,i)
    {
      const type=mov>0?'deposit':'withdrawal'
      const html=`
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${
            i+1
          }${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;
        containerMovements.inserAdjecentHtml('afterbegin',html)
    });
 };
 displayMovements(account1.movements);
 console.log(containerMovements.innerHTML);