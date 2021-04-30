Datatypes:
==========================
1. Primitive datatypes
2. Non primitive datatypes

JS is dynamically typed language.Why because u no need to spcify the type.This can be dynamically typed by JS engine.


primitive datatypes:

String, number,boolean,undefined,null

String: sequence of characters ex:"divakar" 
number:numeric values ex:10

boolean:true or false 

undefined: the value has not been set

null: the value has been set to empty

Non primitive datatypes:

object,array,regexp

object: {firstName:"divakar",secondName:"r"}

array:[10,20,30]

Scope and types of scope: scope is nothing but lifetime of an object and the visibility(accecabilityof function,variable,object)
==========================

1. local scope : with in the function
2. global scope : u can declare the variables out side of the fucntion

<script>
count =5;//GV
var a=1;//GV
function display(){
count+=5;
a+=1;
document.write("inside function global count:"+count+"<br>")
document.write("inside function global count:"+a+"<br>")
}
document.write("outside function global count:"+count+"<br>")
document.write("outside function global count:"+a+"<br>")
display();

</script>



<script>
var num1=10;
var num2=true
var num3=null
var num4;
document.write(num1+num2+num3+num4 +"<br>");
document.write(num4);

</script>


{
key:"",
key:10,
key:{key:"abc"}
key:function
key:array
key:array of objects
}

ES6
=====
adv
let 
const

var dis




scopes: 15mins

higher order functions, 
purefunctions
hoisting
closures







