let name1={
    firstName:"Divakar",
    lastName:"Rajamahanthi"
}
let printNames= function(state,country){
    console.log(this.firstName + this.lastName +' '+ state + ' '+country)
}

let name2={
    firstName:"John",
    lastName:"Abraham"
}
printNames.call(name1,'telangana','india');
// function borrowing 
printNames.call(name2,'andhra','japan');

printNames.apply(name2,['andhra','japan'])
// here call method retuns  a function
let namePrint=printNames.bind(name2);
// call the retuned function with params
namePrint('andhra','japan');



