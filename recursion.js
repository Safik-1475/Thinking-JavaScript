/// RECURSION ?? 'WHEN FUNCTION SELF CALL IT'W CALL RECURSION' EXAMPLES;

// let myFunc = function(){
//     console.log(`Hello Recursion`);
//     myFunc();
// } 

// let total = 0;
// const n = 10;
// for(let i = 0; i <= n; i++){
//     // console.log(i);
//     // total = total + i;
//     // total += i;
// };
// console.log(total);

function sum (n){
    if(n===0){
        return 0;
    }else {
        return sum(n-1) + n
    }
};
console.log(sum(3));