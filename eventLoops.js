let one = ()=>{
    console.log('i am one');
}
let two = ()=>{
    setTimeout(()=>{
        console.log('i am coming');
    },3000);
    console.log('i am two');
}
let three = ()=>{
    console.log('i am three');
}

one();
three();
two();


// async and await , promises


