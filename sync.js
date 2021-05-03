console.log("First Line"); //1
console.log("Second Line") //2
setTimeout(calculate,1000); //4 async
console.log("Third Line"); //3

function calculate(){
    let sum=0;
    for(let i=0;i<10000000;i++){
        sum=sum+i;
    }
    console.log(sum);
}


sync // Async


callback, promises,async