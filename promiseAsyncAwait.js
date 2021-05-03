const one = ()=>{
    return "I am one"
}
// need to add a promise
const two = ()=>{
    setTimeout(()=>{
        return "I am two"
    },3000);
    
}

const three = ()=>{
    return "I am Three"
}

const callMe = ()=>{
    let valOne=one();
    console.log(valOne);
    let valTwo=two();
    console.log(valTwo);
    let valThree=three();
    console.log(valThree);
}

callMe();