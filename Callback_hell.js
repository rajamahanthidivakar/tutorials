function step1(val,callback){
    callback(val+10,false);

}

function step2(val,callback){
    callback(val+10,false);

}

function step3(val,callback){
    callback(val+10,false);
}

step1(10,function(result1,error){
    if(!error){
        console.log("step1:",result1);
        step2(result1,function(result2,error){
            if(!error){
                console.log("step2:",result2);
                step3(result2,function(result3,error){
                    if(!error){
                        console.log("step3:",result3);
                        console.log('Final Result'+result3)
                    }

                })
            }
        })
    }
});