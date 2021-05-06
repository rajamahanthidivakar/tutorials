function a(){
    var x=10;
    return function b(){
     console.log(x);   
    }
}

c=a();
console.log(c);


//callstack: 