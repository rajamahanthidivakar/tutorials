1.Java script runs sync and single thread.
2. for variables default value is undefined.
3. hoisting will start from memory allocation
4. execution using callstack

Hoisting:
Declaration,(Hoisting)
assignment,
initialization(No Hoisting)/ both combination at a Time.

console.log(a);
var a=10;

console.log(a);
let a=10;

c();
function c(){
    console.log('');
}

d();
var d=function(){
    console.log('');
}