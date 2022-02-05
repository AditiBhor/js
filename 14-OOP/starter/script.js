'use strict';
/*const Person=function(firstname,birthyear)
{
    console.log(this);
    this.firstname=firstname;
    this.birthyear=birthyear;
} 
const jonas=new Person('jonas',1991);
console.log(jonas);
//1.new {}wmpty object is created
//2.function is called ,this={}
//3.{}is linked to prototype
//4.function automatically return{}
const matila=new Person('matila',2017);
const jack=new Person('jack',1975);
console.log(matila,jack);

console.log(jonas instanceof Person);


Person.hey=function()
{
    console.log('hey there');
    console.log(this);
};
Person.hey();



//prototypes
console.log(Person.prototype);
Person.prototype.calcAge=function()
{
    console.log(2037-this.birthyear);
}
matila.calcAge();
jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__===Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matila));
console.log(Person.prototype.isPrototypeOf(Person));


//.prototypeoflikedobject
Person.prototype.species='homo sapiens';
console.log(jonas.species,matila.species);

//way to check properties of objects
console.log(jonas.hasOwnProperty('firstname'));//true//has its own property
console.log(jonas.hasOwnProperty('species'));//false//jonas dont have species it just have access to it

console.log(jonas.__proto__);
//object.prototype(top of prototypechain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__)//null
console.dir(Person.prototype.constructor);
const arr=[1,2,3,4,4];
console.log(arr.__proto__)//it gives all the array methods that we uses on array
console.log(arr.__proto__===Array.prototype);//true
*/




/*
//codig challenge

const Car=function(make,speed)
{
    this.make=make;
    this.speed=speed;
};
Car.prototype.accelerate=function()
{
    this.speed+=10;
    console.log(`${this.make} is going at ${this.speed}
    `)
}
Car.prototype.brake=function()
{
    this.speed-=5;
    console.log(`${this.make} is going at ${this.speed}
    `)
}

const bmw=new Car('BMW',120);
const mercedes=new Car('MERCRDES',95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/







//ES6 classes
class Personcl{
    constructor(fullname,birthyear)
    {
        this.fullname=firstname;
        this.birthyear=birthyear;
    }
//Instance method
//method will be added to prototype property
calcAge()
{
    console.log(2022-this.birthyear);
}
greet()
{
     console.log(`hey${this.firstname}`);
}
get age()
{
    return 2020-this.birthyear;
}
//
set fullname(name)
{   
    console.log(name);
    if(name.includes(''))this._fullname=name;
    else alert('not a name');
}
get fullname()
{
    return this._fullname;
}

//static method
static hey()
{
    console.log('hey there');
    console.log(this);
}
}
const jessica=new Personcl('jessica',2000);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__===Personcl.prototype);
// Personcl.prototype.greet ==function()
// {
//     console.log(`hey${this.firstname}`);
// }
jessica.greet();
//1 classes are not hoisted
//2 classes are first-class citizens
//3 classes are exected in strict mode

const walter=new  Personcl('walter white',1965);
Personcl.hey();




/*//setter and getter
const account={
    owner='jonas',
    movements=[200,100,400,290],
    get latest()
    {
        return this.movements.slice(-1).pop();
    },
    set latest (mov){
            this.movements.push(mov);
    },
};
console.log(account.latest);
account.latest=50;
console.log(account.movements);//200,100,400,290,50
*/







/*const PersonProto={
    calcAge()
    {
        console.log(2020-this.birthyear);
    },
    init(firstname,birthyear)
    {
        this.firstname=firstname;
        this.birthyear=birthyear;
    },
};
const steven=Object.create(PersonProto);
console.log(steven);
steven.name='steven';
steven.birthyear=2000;
steven.calcAge();

console.log(steven.__proto__===PersonProto);

const sarah=Object.create(PersonProto);
sarah.init('sarah',2000);
sarah.calcAge();
*/







/*
//coding 
class CarCl{
    constructor(make,speed)
{
    this.make=make;
    this.speed=speed;
}
accelerate()
{
    this.speed+=10;
    console.log(`${this.make} is going at ${this.speed}
    `)
}
brake()
{
    this.speed-=5;
    console.log(`${this.make} is going at ${this.speed}
    `)
}
get speedUS()
{
    return this.speed/1.6;

}
set speedUS(speed)
{
    this.speed=speed*1.6;
}
}
const ford=new CarCl('ford',120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS=50;
console.log(ford)//make:ford speed:80 ehich is 50*1.6
*/













/*
//inheritance between classes:constructor functions
const Person=function(firstname,birthyear)
{
    this.firstname=firstname;
    this.birthyear=birthyear;
} 
Person.prototype.calcAge=function()
{
    console.log(2022-this.birthyear);
};

const Student=function(firstname,birthyear,course)
{
    Person.call(this,firstname,birthyear);
    this.course=course;
};
Student.prototype=Object.create(Person.prototype);

Student.prototype.introduce=function()
{
    console.log(`name:${firstname} i study ${this.course}`);
}
const mike=new Student('mike',2020,'computer science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

Student.prototype.constructor=Student;
console.dir(Student.prototype.constructor);
*/









/*
//coding challenge 3
const Car=function(make,speed)
{
    this.make=make;
    this.speed=speed;
};
Car.prototype.accelerate=function()
{
    this.speed+=10;
    console.log(`${this.make} is going at ${this.speed}
    `)
};
Car.prototype.brake=function()
{
    this.speed-=5;
    console.log(`${this.make} is going at ${this.speed}
    `)
};

const EV=function(make,speed,charge)
{
    Car.call(this,make,speed);
    this.charge=charge;
};
//link theprototype
EV.prototype=Object.create(Car.prototype);
EV.prototype.chargeBattery=function(chargeto)
{
    this.charge=chargeto;
}
EV.prototype.accelerate=function()
{
    this.speed+=20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} with charge of ${this.charge}`);
};
const tesla=new EV('tesla',120,23);
tesla.chargeBattery(90);
console.log(tesla);//charge:90
tesla.brake();
tesla.accelerate();//will invoke acceleratemethod from EV
*/









/*

class Personcl{
    constructor(fullname,birthyear)
    {
        this.fullname=firstname;
        this.birthyear=birthyear;
    }
//Instance method
//method will be added to prototype property
calcAge()
{
    console.log(2022-this.birthyear);
}
greet()
{
     console.log(`hey${this.firstname}`);
}
get age()
{
    return 2020-this.birthyear;
}
//
set fullname(name)
{   
    console.log(name);
    if(name.includes(''))this._fullname=name;
    else alert('not a name');
}
get fullname()
{
    return this._fullname;
}

//static method
static hey()
{
    console.log('hey there');
    console.log(this);
}
}

class StudentCl extends Personcl{
constructor(fullname,birthyear,course)
{
    //always needs to hapeen first
    super(fullname,birthyear);
    this.course=course;
}
introduce()
{
    console.log(`i am ${firstname}`);
}
calcAge()
{
    console.log(`i m ${2022-this.birthyear}years old,but as a student i feel more like ${2022-this.birthyear+10}`);
}
}
const martha=new StudentCl('martha',2020,'computer');
martha.introduce();
martha.calcAge();
*/














/*
const PersonProto={
    calcAge()
    {
        console.log(2022-this.birthyear);
    },
    init(firstname,birthyear)
    {
        this.firstname=firstname;
        this.birthyear=birthyear;
    },
};
const steven=Object.create(PersonProto);

const StudentProto=Object.create(PersonProto);
StudentProto.init=function(firstname,birthyear,course)
{
    PersonProto.init.call(this,firstname,birthyear);
    this.course=course;
};

StudentProto.introduce=function()
{
     console.log(`i am ${firstname}`);
}
const jay=Object.create(StudentProto);
jay.init('Jay',2010,'computer');
jay.introduce();
jay.calcAge();
*/








/*
class account{
    //1)public fields(instances)
    locale=navigator.language;
    #pin;

    //2)private field(instances)
    #movement=[];//# is for private
    constructor(owner,currency,pin)
    {
        this.owner=owner;
        this.currency=currency;
        this.#pin=pin;
       // this._movements=[];
        //this.locale=navigator.language;

        console.log(`thanks for openning an account,${owner}`);
    }
    //3)public method
    //public interface
    getMovements()
    {
        return this._movements;
    }
    deposit(val)
    {
        this._movements.push(val);
        return this;//this keyword makes method chainable
    }
    withdraw(val)
    {
        this.deposit(-val);
        return this;//this keyword makes method chainable
    }
    //4)private method
    _approveLoan(val)
    {
        return true;
    }
    requestLoan(val)
    {
        if(this.approveLoan(val))
        {
            this.deposit(val);
            console.log('loan approved');
            return this;//this keyword makes method chainable
        }
    }
}
const acc1=new account('jonas','EUR',1111);
acc1.deposit(240);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);


//chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(200);
*/











//coding challenge 4
class CarCl{
    constructor(make,speed)
{
    this.make=make;
    this.speed=speed;
}
accelerate()
{
    this.speed+=10;
    console.log(`${this.make} is going at ${this.speed}
    `)
}
brake()
{
    this.speed-=5;
    console.log(`${this.make} is going at ${this.speed}
    `)
    return this;
}
get speedUS()
{
    return this.speed/1.6;

}
set speedUS(speed)
{
    this.speed=speed*1.6;
}
}
class EVCL extends CarCl
{
constrctor(make,speed,charge)
{
    super(make,speed);
    this.charge=charge;
};

chargeBattery(chargeto)
{
    this.#charge=chargeto;
    return this;
}
accelerate()
{
    this.speed+=20;
    this.#charge--;
    console.log(`${this.make} is going at ${this.speed} with charge of ${this.charge}`);
    return this;    
};

}
const rivian=new EVCL('jonas',80,60);
console.log(rivian);
rivian.accelerate().accelerate().accelerate().brake().chargeBattery(60).accelerate();















