//map(element,index,array) == > poition are same

const arr1=[2,3,4];
const arr2=[];
for(let i=0;i<arr2.length;i++){
arr2.push(arr1[i]+2);
}

console.log(arr2);



//example2:


const employee=[{name:"divakar"},{name:"sai"}]
const output=[];

for(let i=0;i<employee.length;i++){
    employee[i].profession="software engineer";
    output.push(employee[i]);
}


//example 3

const output=employee.map((emp)=>{
    emp.profession="software engineer";
    return emp;
});

// example 4

array.forEach(element => {
    
});

// example 5

forEach


// find
//it wiil return undefined if no value matched
//filter

// findIndex






