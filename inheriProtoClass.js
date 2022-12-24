function Person1 (name,age){
    this.name = name;
    this.age = age;
};

function Cricketer (type,country,name,age){
    Person1.call(this)
    this.type = type;
    this.country = country;
    this.name =name;
    this.age =age;
};

Person1.prototype = {
    run : function (){
        console.log(`${this.name} is also run right now`);
    }
};

Cricketer.prototype = Object.create(Person1.prototype);
Cricketer.prototype.constructor = Cricketer;

const naim = new Person1('Naim',2);
// console.log(naim.name);

//CONVERT CONSTRUCTOR FUNCTION T CLASS
class Person2 {
    constructor(name,age){
        this.name =name;
        this.age = age;
    }
    run(){
        console.log(`${this.name} is running now`);
    }
}

class Cricketer1 extends Person2{
    constructor(type,country,name,age){
        super(name,age)
        this.type = type;
        this.country = country;
        this.name =  name;
        this.age = age;
    }
    play(){
        console.log(`Naim is Playing Cricket`);
    }
};

const naimuddinnoman = new Person2('Naim uddin Noman',2);
naimuddinnoman.run();