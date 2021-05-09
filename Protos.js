var arr=["divakar","deepthi"]
let object = {
    name:"divakar",
    job:"farming",
    printData:function (){
        console.log(this.name +'doing'+ this.job)
    }
}

let object2={
    name:"john"
}

//object2.__proto__=object


function x(){

}

// __proto__ is an object and each and every object has a prototype in javascript


//1. arr.__proto__ (is Array.prototype)

//2.Array.prototype
//3.arr.__proto__._proto__(also has its own prototype, this is object prototype)
// 4.Object.prototype
//5.arr.__proto__.__proto__.__proto__

//================================================================
//object.__proto
//Object.prototype
//object.__proto__.__proto__

//==============================================================


//x.__proto__
//Function.prototype
//fun.__proto__.__proto__
//Object.prototype
