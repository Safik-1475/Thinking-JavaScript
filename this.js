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
safikur.person();
safikur.father.person();