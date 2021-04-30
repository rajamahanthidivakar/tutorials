// functional programming
// first class functions or purefunctions
// map,set , reducer

let add=(num)=>num+5;

function numbers(fn,n){
    return fn(n);
}
let result = numbers(add,5);
console.log(result);


// higher order function example

let numbers1 = [5,6,7]

let output=numbers1.map(add);
console.log(output);


// [25,25,25,25,20,20,20,20,26] unique values
//reducer
// arr=[{level:2,level1:3},{level:2,level1:3},{level:2,level1:3}]
//{level:6,level1:9}


