// BEST PRACTICE OF VARIABLES
// bad practice 
const nameValue = 'Safi';
const theProduct = 'Apple';

// Good Practice 
const name = 'Safikur Rahman';
const product = 'Apple';

// BEST PRACTICE OF ARRAY
// bad practice
const products = ['T-shirt','Shoes','Watches','Jeans','Bags'];
products.forEach(p=>{
    // doSomething(p);
})
// good practice 
const display = (product)=>console.log(product);
const products1 = ['T-shirt','Shoes','Watches','Jeans','Bags'];
products1.forEach(product=>{
    // display(product);
});

// bad practice of object example 

var productList = {
    productName:'Apple',
    productId:2,            // bad practice 
    productPrice:'$8'
};

var productList = {
    name :'Apple',
    id:2,       // Good practice
    price :'$13'
}

// BAD AND GOOD PRACTICE EXAMPLE OF FUNCTION NAMING 
// amar ekta function achay jei ta user k email patabo 
function email (){
    // send email of user  
    // This is bad practice
};

// Good Practice example 
function sendEmailToUser (){
    // good practice declaring function naming
}

// Argument parament function declaring
function getProducts (name,email,password,address){
    //bad practice
};

function getProducts({name,email,address,password}){
    // good practice 
}
