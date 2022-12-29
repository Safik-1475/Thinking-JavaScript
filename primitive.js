// simple example
// var a = 5;
// var b = a;
// var a = 7;
// console.log(a);
// console.log(b);

// PRIMITIVE VALUES LIST 
/*
    1.String, 
    2.Number, 
    3.Boolean,
    4.Null,
    5.Undefined,
    6.ES6(Symbol)
*/
// REFERENCE VALUES LIST
/*
    1. Object,
    2. Array,
    3. Function,
    4. Date
*/

// var a = ['Safi','Rafi'];
// var b = a;
// a.push('Naim Uddin Noman')
// console.log(a);
// console.log(b);


const language = {
    name :'JavaScript',
    estd : 1995,
    founder : 'Brendan Eich',
};
console.log(language);
const language2 = {...language};
console.log(language2);