let score=33;
let d="334eds"
let valueInNumber=Number(score);
let num=Number(d);
console.log(typeof valueInNumber);
console.log(typeof num);
console.log(num);

    //notes:
//"33"=>33
//"334eds"=>NaN 
//true=>1 
//null =>0
//undefined=>NaN

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

    //notes:
//1=>true
//0=>false
//null=>false
//undefined=>false
//"string"=>true  
// ""=>false  


// ********OPERATIONS********
console.log("1"+2+2);
console.log(1+2+"2");

//we should not do this type of comparisoion only smae type of comaparison is allowed

console.log(1=="1"); //true
console.log(1==="1"); //false   
console.log(0==false); //true
console.log(0===false); //false 
console.log(null>0); //false
console.log(null==0); //false   
console.log(null>=0); //true because null is converted to 0 and then compared



// *********DATA TYPES;;*********

//Primitives=> number, string, boolean, null, undefined, symbol,bigint
//Non-Primitives=> objects, arrays, functions

const myFunc=function(){
    console.log("This is my function");
}
console.log(typeof myFunc);

let myObj={
    name:"Nidhi",
    age:33,
    city:"Indore"
}
console.log(typeof myObj);

let myArr=[1,2,3,4,5];
console.log(typeof myArr); //object


// *********STACK AND HEAP*********
// stack=>primitive data types are stored in stack and they are stored in contigous memory location and they are accessed directly
// heap=>non primitive data types are stored in heap and they are stored in non contigous memory location and they are accessed indirectly through reference

let myyoutubeChannel="Nidhi Kedia";
let anotherChannel=myyoutubeChannel;
anotherChannel="gungun" 
console.log(anotherChannel); //gungun
console.log(myyoutubeChannel); //Nidhi Kedia

//here anotherChannel is a copy of myyoutubeChannel and they are stored in different memory location so when we change anotherChannel it does not affect myyoutubeChannel and they are stored in stack and my original value is not changed because they are stored in different memory location


//Heap example
let myObj1={
    name:"Nidhi",
    age:33,
    city:"Indore"
}
let anotherObj=myObj1;
anotherObj.name="Gungun"
console.log(anotherObj.name); //Gungun
console.log(myObj1.name); //Gungun

//here anotherObj is a reference to myObj1 and they are stored in same memory location so when we change anotherObj it also changes myObj1 because they are stored in same memory location and they are stored in heap and my original value is changed because they are stored in same memory location