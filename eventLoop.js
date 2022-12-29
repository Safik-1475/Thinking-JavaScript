// const  second = ()=> console.log(`I'm Second arrow function`);
// const third = ()=>console.log(`I'm Third Arrow function`);
// const first =()=>{
//     console.log(`I'm first Arrow function`);
//     setTimeout(second,1000);
//     third();
// };
// first();

// const process = num =>{
//     console.log(num);
// }

// [12,34,2,35,39,50].forEach(i=>{
//     process(i);
// });

const fourth = ()=>console.log(`I'm fourth arrow function`);
const five = ()=>console.log(`I'm five arrow function`);
const six = ()=>{
     console.log(`I'm six arrow function`);
     setTimeout(five,1000);
     new Promise((resolve,reject)=>{
        resolve(`I'm right after fourth before five`)
     }).then((resolve)=>console.log(resolve));
     fourth();
}
six();