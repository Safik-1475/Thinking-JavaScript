// function peoples (name,age){
//     const person = Object.create(peoples.prototype);
//     person.name = name;
//     person.age = age;
//     return person;
// };

// peoples.prototype = {
//     eat() {
//         console.log(`Person is Eating` );
//     },
//     sleep(){
//         console.log(`Person is sleeping `);
//     },
// };
// const shakib = peoples('Shakib Al Hasan',30);
// shakib.eat();
// const tamim = peoples('Tamim Iqbal Khan',32);
// tamim.sleep();


// How works JavaScript object create lets see
// const captain = {
//     name : 'Shakib Al Hasan',
//     age :35,
//     profession : 'Cricketer',
// };

// const player = Object.create(captain);
// console.log(player.name);
// console.log(player.age);
// console.log(player.profession);


// const Information  = (name,profession)=>{
//     const personalInfo = Object.create(Information.prototype);
    
//     personalInfo.name = name;
//     personalInfo.profession = profession;

//     return personalInfo;

// };
// Information.prototype = {
//     name : 'Safikur Rahman',
//     age : 21,
//     professional : 'Frontend Engineer',
//     company : 'Amazon',
//     tech : [
//         'HTML',
//         'CSS',
//         'JAVASCRIPT',
//         'BOOTSTRAP',
//         'TAILWIND CSS',
//         'REACT JS'
//     ],
//     sleep(){
//         console.log('Safi sleep at 11 30 pm every night');
//     }
// };


// const safik = Information('Safikur Rahman','Frontend Engineer');
// safik.sleep();


function Info (name,age){
     this.name = name;
     this.age = age;
     
};
Info.prototype = {
    eat(){
        console.log('Shakib is eating');
    },
    sleep(){
        console.log(`Shakib is sleeping`);
    },
    play(){
        console.log(`Shakib is playing`);
    }
};

const shakib = new Info('Shakib',32);
shakib.eat();
const tamim = new Info('Tamim',34);

// CONVERT CLASS FUNCTION JAVASCRIPT 

class PersonalInfo {
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`Tamim is eating`);
    }
    play(){
        console.log(`Tamim is playing`);
    }
    sleep(){
        console.log(`Tamim is sleeping`);
    }
}
const tamim2 = new PersonalInfo('Tamim Iqbal',35);
tamim2.play();


function Information1 (name,age){
    const personInfo = Object.create(Information1.prototype);
    // personInfo.name = name;
    // personInfo.age = age;
    return personInfo;
}
Information1.prototype = {
    eat(){
        console.log(`Tamim is eating`);
    },
    play(){
        console.log(`Tamim is playing`);
    }
};

const tamim3 = Information1('Tamim',43);
tamim3.play();

// Hidden Object create and return 

function Information2(x,y){
    this.x = x;
    this.y = y;
}
Information2.prototype = {
    run(){
        console.log(`Rohim is run everyday`);
    },
    weakup(){
        console.log(`Said weakup at 6 am in the morning`);
    }
};

const rohim = new Information2();
rohim.run();
const said = new Information2();
said.weakup();


// class constructors

class Information3{
    constructor(nam,age){
        this.nam = nam;
        this.age = age;
    }
    Hamza(){
        console.log(`Hamza is a Footballer Of liverpool`);
    }
    HamzaCho(){
        console.log(`Hamza nationality of Bangladesh`);
    }
}
const hamza = new Information3();
hamza.Hamza();
const hamzaN = new Information3();
hamzaN.HamzaCho();

