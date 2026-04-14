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