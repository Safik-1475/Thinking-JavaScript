// HIGHER ORDER FUNCTION EXAMPLES 

function higher (){
    return function(){
        console.log('Hello JavaScript');
    }
};

// higher()();

// EXAMPLES WITHOUT HIGHER ORDER FUNCTION 
const numbers = [1,3,4,9,30];
const result = [];

for (let i = 0; i< numbers.length; i++) {
    // console.log(i);
    result.push(numbers[i] * 2);
};
// console.log(result);

// HIGHER ORDER FUNCTION EXAMPLES

const numbers1 = [20,49,22,24];
const result1 = numbers1.map(item=>{
    return item *2
});
// console.log(result1);

//ANOTHER WITHOUT HIGHER ORDER FUNCTION

const players = [
    {
        name : 'Shakik',
        avg : 37.49,
    },
    {
        name : 'Tamim',
        avg : 38.32,
    },
    {
        name : 'Musfiq',
        avg : 37.39,
    },
    {
        name: 'Muhmudullah',
        avg : 35.80,
    },
];

const playersAvg = [];
for (let i = 0; i < players.length; i++) {
    // playersAvg.push(players[i])
    // console.log(i)
    if(players[i].avg <= 37){
        // console.log();
        playersAvg.push(players[i].avg)
    }
};

// console.log(playersAvg);

const playersAvg1 = players.filter(player=> player.avg <=37);
// console.log(playersAvg1); 

const technology  = ['HTML','CSS','JAVASCRIPT','BOOTSTRAP','TAILWIND CSS'];

function tech(arr,index){
    const newArray = [];
    
}
tech(technology)

