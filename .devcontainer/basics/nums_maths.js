const score=400
console.log(score);

const balance=new Number(1000);
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length); 
console.log(balance.toFixed(2));   

console.log(score.toPrecision(4));

//for reading hundreds 0 indian standard
const hund=100000000;
console.log(hund.toLocaleString('en-IN'));


//********Maths********
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

console.log(Math.round(4.6));
console.log(Math.round(4.4));

console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));

console.log(Math.floor(4.9));
console.log(Math.floor(4.1));
console.log(Math.floor(Math.random()*10)+1); //random number between 1 and 10

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min); //random number between 10 and 20 


//*********Date and Time**********
//DATE TYPEOF IS AN OBJECT IN JAVASCRIPT
const now=new Date();
console.log(now);
console.log(typeof now);
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
const dateOfBirth=new Date('1990-01-01');
console.log(dateOfBirth);

const newDate=new Date(2020, 0, 1); //month is 0 indexed
console.log(newDate);

const day=now.getDate();
const month=now.getMonth()+1; //month is 0 indexed
const year=now.getFullYear();
console.log(`Today's date is ${day}/${month}/${year}`);     


