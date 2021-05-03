// new Promise(resolve,reject) or promie.

// consumer, producer

function step1(val,error){
    return new Promise((resolve,reject)=>{
        if(error){
            resolve(val+10);
        }else{
            reject('some thing went wrong1');
        }

    });

}

function step2(val,error){
    return new Promise((resolve,reject)=>{
        if(!error){
            resolve(val+10);
        }else{
            reject('some thing went wrong');
        }

    });

}

function step3(val,error){
    return new Promise((resolve,reject)=>{
        if(!error){
            resolve(val+10);
        }else{
            reject('some thing went wrong');
        }

    });
}

step1(10,false)
    .then((result1)=>step2(result1,false))
    .then((result2)=>step3(result2,false))
    .then((result3)=>console.log(result3))
    .catch((error)=>console.log(error));



    
