//simple function declaration
// function add(x,y){
//     return x+y;
// }


//Function with assignment
// const add=function(x,y){
//     return x+y
// }


//function in ES6 using single paramer
// const display=num=>num;

//function is ES6 multiple parameter
// const add=(x,y)=>x+y;

//ES6 function more activities in a function
const add=(x,y)=>{
    const sum=x+y;
    const diff = x-y;
    return sum * diff;
}


const result = add(7,5);
console.log(result)