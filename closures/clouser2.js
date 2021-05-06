function a(){
    function b(){
        for(let i=0;i<5;i++){
            setTimeout(()=>{
                console.log(i); 
            },i*1000);    
        }
    }
    b();
}
a();

// 1,2,3,4,5

// i(reference) ==> 0 ()==> newclousere (scope)
// i(reference) ==> 1 ()==> newclousere
// i(reference) ==> 2 ()==> newclousere
// i(reference) ==> 3 ()==> newclousere
// i(reference) ==> 4 ()==> newclousere


//prototype, object,momeization

//DOM() //ReactDOM

