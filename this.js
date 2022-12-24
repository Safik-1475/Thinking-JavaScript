// IMPLICIT BINDING 
const safi = {
    name : 'Safikur Rahman',
    age : 21,
    professinal : 'Frontend Engineer',
    profession : function(){
        console.log(this.professinal);
    },
};

// safi.profession();

const printPlayers = function(obj){
    obj.player = function(){
        console.log(`Name : ${this.name}, Profession : ${this.profession}, Age :  ${this.age}, Type :  ${this.type}`);
    };
};

const shakib = {
    name : 'Shakib All Hasan',
    age: 34,
    profession : 'Cricketer',
    type: 'All Rounder '
};

const tamim = {
    name : 'Tamim Iqbal',
    age :35,
    profession : 'Cricketer',
    type : 'Opener Batter',
};

// printPlayers(shakib);
// printPlayers(tamim);
// shakib.player();
// tamim.player();

const Person = function(name,age){
    return {
        name : name ,
        age : age,
        person: function(){
            console.log(`My name is ${this.name} I'm ${this.age} years old`);
        },
        father : {
            name : 'Hamza Amir',
            age : 48,
            person: function (){
                console.log(`Name : ${this.name}, Age : ${this.age} `);
            }
        }
    }
};
const safikur = Person('Safikur Rahman',21);
// console.log(safikur);
// safikur.person();
// safikur.father.person();

// EXPLICIT BINDING EXAMPLES 

const firstPerson = function(age,html,css,js,rect){
    console.log(`Name : ${this.name} Profession : ${this.profession}, Salary : ${this.salary}, Age : ${age} ${html}, ${css}, ${js}, ${rect}`);
}

const firstPersonObj = {
    name : 'Safikur Rahman',
    profession : 'Frontend Engineer',
    salary : '$1600 Per Month',
}
// firstPerson.call(firstPersonObj, 21,'HTML','CSS');
// firstPerson.apply(firstPersonObj,[21,'HTML','CSS','JAVASCRIPT','REACT JS']);

const html = 'Hyper Text Markup Languages';
const css = 'Cascading Style sheet';
const js = 'JavaScript is Programming Language';

const newFunc = firstPerson.bind(firstPersonObj,html,css,js);
// newFunc();

// NEW BINDING 
const SecondPerson = function(name,age){
    this.name = name;
    this.age = age;
    console.log(`${name} is ${age} year old`);
}
const swe = new SecondPerson('Safikur Rahman',21);
// console.log(swe);

// WINDOWN BINDING
const WindowBinding = function(){
    console.log(this.name);
};

const windowObj = {
    name : 'Safikur Rahman Mojammel',
    age : 21,
}
WindowBinding.call(windowObj);