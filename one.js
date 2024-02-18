console.log(checkForStudent=== checkForTechr) //false// **JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.
"use strict"; //treat all js code as newer version
//  *************************data types***************************
/* 
primitive data types: 
1. number = 2 to power 53  
2. bigInt 
3. boolean  
4. string 
5. null => standalone value  and null is a object 
6. undefined 
7. symbol => unique 

Reference (Non -primitive data types) 
 1.Array 
 2.Objects
 3.Functions
  



*/
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false

//*************************conversion*************************

let score = "33abc";

let changeInNUmber = Number(score);
console.log(typeof changeInNUmber);
console.log(changeInNUmber);

//"33" => 33
//"33abc" => NaN (Not a Number)
// true => 1 false=>0

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 => true ; 0 => false ; "" => false ; "reifnv" =>true

//**********************Operations*****************************

let value = 3;
let negValue = -value;
console.log(negValue);
console.log("2" + "2"); //22
console.log(((4 % 3) * 2 * 5) % 3); // 1

// ******************************Comparison *********************

console.log(null > 0); //false
console.log(null == 0); // flase
console.log(null >= 0); //true
console.log("2" == 2); //true
console.log("2" === 2); //false
console.log(2 > 2); //false

/* 
 The reason is that an equality check == and comparisions > < >= <= works differently .  
 Comparisions  convert null into a number ,treating it as 0. 
 That's why (3) null >=0 is true (1) null >0 is false 
 */

/*
 ----------------------------Memory--------------------------- 
 1.Stack  uses  (Primitive data type) -copy 
 2.Heap   uses (Non-primitive data type)  -refrence 

 */
// +++++++++++++++++++++++Example of staCK++++++++++++++++++++++++
let myName = "rishang";
let againMyName = myName;
myName = "hero";
console.log(myName); //hero
console.log(againMyName); // it create a copy so value not changed
// +++++++++++++++++++++++Example of heap ++++++++++++++++++++++++

let userONe = {
  email: "rishang@gmail.com",
};
let userTwo = userONe;

userTwo.email = "gabru@gmail.com";
console.log(userONe); // refrence was same so value changed
console.log(userTwo);

//%%%%%%%%%%%%%%%%%%%%%%%%%% String %%%%%%%%%%%%%%%%%%%%%%%%%%%%

const name = "rishang";
const age = 20;

// console.log(name + age );  outdated method
//  New method
console.log(` my name is ${name} and age is ${age}`);

// another declaration method
const gameName = new String("gabru");
console.log(gameName[1]); //accessing key value
console.log(gameName.toUpperCase()); //but  original value not changed
console.log(gameName.charAt(4)); //accessing  by index location
console.log(gameName.indexOf("b")); //accessong   index number  by passing string

// ********************* Numbers and Maths ***********************

const scores = 400; //simple method
const balance = new Number(3); //strict method
console.log(balance.toFixed(2)); //like this 300.00 because we give (2)

const newNumber = new Number("a");
console.log(newNumber); //nan (not a number)

const anotherNumber = 123.897;
console.log(anotherNumber.toPrecision(5)); //123.90
console.log(anotherNumber.toPrecision(4)); //123.9
console.log(anotherNumber.toPrecision(3)); //124
console.log(anotherNumber.toPrecision(2)); //1.2e+2
console.log(anotherNumber.toPrecision(1)); //1e+2

const hundreds = 100000000;
console.log(hundreds.toLocaleString("en-IN")); //10,00,00,000

//Math
console.log(Math.abs(-4)); //changes -ve to +ve only
console.log(Math.round(4.6)); //round off
console.log(Math.ceil(4.1)); //more than given number round off to +1
console.log(Math.min(2, 4, 6, 1, 7, 0)); // gives the min value
console.log(Math.max(2, 4, 6, 1, 7, 0)); // gives the max value
console.log(Math.floor(Math.random() * 10 + 1)); //give us random number between 1 to 10 after adding 1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //give us number between 10 to 20

//  ********************* Date and Time ********************

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// Date is a object

let myCreatedDate = new Date(2025, 0, 3); // (year,month,date,hr,min,sec)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Date.now() / 1000); //converted in sec

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getDay());

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    month: "2-digit",
  })
);
console.log(
  `today date is ${newDate.getDate()} and year is ${newDate.getFullYear()} and day is ${newDate.getDay()}`
);

// ******************************* Array*************************

const arr = [1, 2, 3, 4, 5];

// array methods

arr.push(6); //push the element in main array at the end
arr.unshift(9); //push the element in main array at starting
arr.shift(); //remove the first element of the array
arr.pop(); //remove the last element of the array
console.log(arr.includes(3)); //search  element in main array

const newArr = arr.join(); //join and convert to string
console.log(newArr);
console.log(typeof newArr); //string
console.log(arr);
console.log(typeof arr); //object

// ****** slice and splice differnces

const myn1 = arr.slice(1, 4); //n to m-1 and no change in main array
console.log("a", myn1);
console.log(arr);

const myn2 = arr.splice(1, 4); //n to m and do changes in main array
console.log("b", myn2);
console.log("c", arr); //after using splice only return the remaining index

//****differences in concat,push and spread in array methods

const pirates = ["sanji", "luffy", "zoro"];
const yonko = ["shanks", "bigMom", "kaido"];

const allPirates = pirates.concat(yonko); //push array element in the new array
console.log(allPirates);

const anotherAllPirates = [...pirates, ...yonko]; //merge two array in the new one
console.log(anotherAllPirates);

pirates.push(yonko); // push array in the existing array
console.log(pirates);

//****

const complicated_Array = [2, 3, 4, [4, 6, 7], [6, 7, 8, [9, 10]]];
const simple_array = complicated_Array.flat(Infinity); //return a new array with all sub array element
console.log(simple_array);
console.log(complicated_Array); //no changes in the main array

/////////////////////

console.log(Array.isArray("rishang")); //asking that is this array
console.log(Array.from("rishang")); // converting to the array
console.log(Array.from({ name: "rishang" })); //interesting case and output =>[] empty array

const rank1 = 100;
const rank2 = 200;
const rank3 = 300;

const all_rank = Array.of(rank1, rank2, rank3); //convert and merged also
console.log("a:", all_rank);

const all_rank2 = Array.from(rank1); //unable to convert []empty array
console.log("b:", all_rank2);
const all_rank3 = Array.from(String(rank1)); // convert into string then into array ,100=>['1','0','0']
console.log("c", all_rank3);
const all_rank4 = Array.from(String(rank1), Number); // convert into string then into  mumber, 100=> [1,0,0]
console.log("d", all_rank4);

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^Objects^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//singleton :  literal =>no  ,Constructor=> yes

//object  literals declartion

const mySym = Symbol("key1");

const jsUser = {
  //we can't see but every key is treatd like string at time of compilation
  name: "rishang kumar",
  fullName: "rishang kumar choudhary", //another method to declare
  age: 2,
  location: "greator noida",
  [mySym]: "key2", //here we are declaring symbol using =>[]
  email: "rishangkumar@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "saturday"],
};
console.log(jsUser.email);
console.log(jsUser["location"]); // better method in this we can access keys which declare =>""
console.log(jsUser[mySym]); //no need to write=> ""  only for symbol

///--------------If u dont want  to do chnges in your object  then =>

jsUser.email = "hello@gmail.com";
// Object.freeze(jsUser);    // object is freezed
console.log(jsUser); //no error but no changes

jsUser.greeting = function () {
  console.log("hello js");
};

console.log(jsUser.greeting); //function anonymous
console.log(jsUser.greeting()); // hello js

jsUser.greetingTwo = function () {
  console.log(`hello js user, ${this.name} `);
};
console.log(jsUser.greetingTwo); //function anomymous
console.log(jsUser.greetingTwo()); //hello js user  rishang kr

//  !!!!!!!!!!!!!! Object singleton =>

// const tinderUser= {}this is  not singleton object

const tinderUser = new Object(); //this is singleton object  by constructor method
tinderUser.id = "123abc";
tinderUser.name = "rishang";
tinderUser.isLoggedIn = false;

console.log("obj:", tinderUser);

const regularUser = {
  email: "hello12.com",
  fullName: {
    userFullName: {
      firstName: "rishang",
      lastName: "kumar",
    },
  },
};
console.log(regularUser.fullName.userFullName.firstName);
console.log(regularUser.fullName.userFullName.lastName);

// combining object

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = { obj1, obj2 }; //object under object
console.log(obj3);

const obj4 = Object.assign(obj1, obj2);
console.log("a", obj4);

const obj5 = { ...obj1, ...obj2 }; //2nd method after using this=> ...  problem solved
console.log("b", obj5);

// ~~~~~~~~TO  know values and keys from the obj

console.log(Object.keys(tinderUser)); //return type array
console.log(Object.values(tinderUser));

//_____________to get every values of key in  each array

console.log(Object.entries(tinderUser));

// >.............. to know key is available in the obj

console.log(tinderUser.hasOwnProperty("id")); // true
console.log(tinderUser.hasOwnProperty("matches")); //false

// >>>>>>>>>>>>>>>>>>>>>>>> object destructurinig >>>>>>>>>>>>>>>>>

const anime = {
  aimeName: "One peice",
  rank: "one",
};

const { aimeName: animeName, rank } = anime; //here we are destructuring

console.log(rank); //one
console.log(animeName); // one peice

// ................. Functions .................................

function addTwoNumber(num1, num2) {
  //num1,num2 is parameters
  console.log(num1 + num2);
}

addTwoNumber(4, 2); //4,2 is arguements

function addAnotherTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

const result = addAnotherTwoNumbers(4, 6); //10

console.log("result is :", result); //undefined bcz we are not returning anything

function addAnotherTwoNumber(num1, num2) {
  return num1 + num2;
  console.log("rishang"); //never executed
}

const anotherResult = addAnotherTwoNumber(14, 6); //20

console.log("anotherresult is :", anotherResult);

function loginUserName(username) {
  if (username === undefined) {
    // (!username) another way
    console.log("please enter username");
    return; //code ends here
  }
  return `${username} just logged in `; //not executed if if conditon is true
}
console.log("a", loginUserName()); //please enter username undefined
console.log(loginUserName("rishang")); // rishang just logged in
console.log(loginUserName("")); // just logged in
console.log(loginUserName(4)); //4 just logged in
//  console.log(loginUserName(hello)); error

// pass multiple values in function and store them in array

// ********  (...) it is called both  rest and  spread operator

function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 300, 400)); // [200,300,400]

function calculateCartPrices(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrices(200, 300, 400, 500)); // [400,500] val1=200,val2=300 rest in num1

//  ----how to pass object in function

const user = {
  userName: "Rishang",
  price: 200000000000,
};

function handleObject(userObject) {
  console.log(
    `username is ${userObject.userName} and price is ${userObject.price}`
  );
}

handleObject(user); // or
handleObject({
  userName: "gabru",
  price: 10000000000,
});

//  ----how to pass array in function

const myNewArray = [200, 300, 400];

function returnArrayValue(getArray) {
  return getArray[1];
}
console.log(returnArrayValue(myNewArray)); //or
console.log(returnArrayValue([300, 400, 600]));

//'''''''''''''''''''''''''' Scopes''''''''''''''''''''''

var c = 300; //global scope accessible in block

if (true) {
  // block scope  not accessible in global
  let a = 20;
  const b = 30;
  var c = 40;
}
// console.log(a) error
// console.log(b) error
console.log(c); // 40

//browser console scope is different and code global scope is different

// nested scopes

function one() {
  const userName = "rishang";

  function two() {
    const website = "yt";
    console.log(userName);
  }
  // console.log(website);   error

  two();
}

one();

//   :::::::::::::::::::important point ::::::::::::::;;
//like a hoisting

console.log(addone(5)); //6

function addone(num) {
  return num + 1;
}

//  console.log(addTwo(6))  error accessing before initialization

const addTwo = function addone(num) {
  return num + 2;
};

//  """""''''''''''''" This and Arrow function """""''''''''''''''"

const users = {
  username: "rishang",
  age: 20,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to my profile`); //this refers the current context if we hardcoded that then we get  error
    console.log(this);
  },
};

users.welcomeMessage(); //rishang ,welcome to my profile
users.username = "gabru"; //here we changed the context
users.welcomeMessage(); //gabru welcome to my profile
console.log(this); //{}

//  'Note': in browser global obj is window object

function checking() {
  const user = "rishang";
  // console.log(this.user);  undefined and error
  // console.log(this) many methods will shown
}

checking();

//  Arrow function

const addition = (num1, num2) => {
  return num1 + num2; //explicit return
};
console.log(addition(3, 5));

const add = (num1, num2) => num1 + num2; // implicit return
//const add=(num1,num2)=> (num1 + num2)   implicit return
console.log(add(3, 5));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>IIFE>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>Control flow >>>>>>>>>>>>>>>>>>>>>>

// switch case

const month = "january";

switch (month) {
  case "january":
    console.log("january");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("march");
    break;

  default:
    console.log("defualt case");
    break;
}

//  Note: if there is no break then it will execute every other code except default

/*
falsy value:  

flase ,0 ,-0,BigInt 0n ,"", null ,undefined ,Nan   

truthy value: 
  
"0", "false", ," ",[], {}, function(){}    

 
just for knowing purpose 

 
false==0  => true 
false =='' => true 
0=='' => true

*/

//  .............how to know array is empty

const myArr = [];

if (myArr.length === 0) {
  console.log("empty array");
}

//  .............how to know object is empty

const myObj = {};

if (Object.keys(myObj).length === 0) {
  console.log("0bject is empty");
}

// Nullish Coalescing Operator (??) ; null undefined

let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 15; // 15
val1 = undefined ?? 10; //10
val1 = null ?? 20 ?? 10; //after null  value will assigned means 20
console.log(val1);

//  >>>>>>>>>>>>>> Loops >>>>>>>>>>>>>>>>>>>>>>>>..

for (let i = 1; i <= 10; i++) {
  console.log(`value of outer loop ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`we are in inner loop and value of j is ${j} and i is ${i}`);
    // console.log( i + " * " + j+  "=" + i*j)
  }
}

// ........... Continue and break ...........

for (let i = 0; i < 20; i++) {
  if (i == 3) {
    console.log("3 detected");
    break;
  }
  console.log(`value of i is ${i}`);
}

for (let i = 0; i < 7; i++) {
  if (i == 3) {
    console.log("value  3 is skipped");
    continue;
  }
  console.log(`value of i is ${i}`);
}

//  ///////////// while looop ///////////////////////////

let index = 0;

while (index <= 10) {
  console.log(`value of index is ${index}`);
  index += 2;
}

let yonkos = ["luffy", "shanks", "kaido", "BigMom"];
let countYonko = 0;

while (countYonko < yonkos.length) {
  console.log(`yonkos are ${yonkos[countYonko]}`);
  countYonko += 1;
}

// '''''''''''''Do while''''''''''''''''''''

let scoress = 1;

do {
  console.log(`scores is ${scoress}`);
  scoress++;
} while (scoress <= 3);

//  ...........All for loop(Array specific) .................

//  *****for of loop

const myNumber = [1, 2, 3, 4, 5, 6];

for (const num of myNumber) {
  console.log(num);
}

const greetings = "hello world";

for (const greet of greetings) {
  console.log(`each char is ${greet}`);
}

// ...........map

//  Note: if there is same key value then => 1= one 1= two 1=three output 1=> three

// map is not iterable

const map = new Map();
map.set("pirate", "luffy"); //("key","value")
map.set("anotherPirate", "zoro");
map.set("cook", "sanji");

console.log(map);

/*for(const key of map){     
  console.log(key)  return in array like this [ 'pirate', 'luffy' ] ['anotherPirate', 'zoro' ]
} */

//  .................another method  for better optimisation

for (const [key, value] of map) {
  console.log(key, "=>", value); //here we are getting values in seperate like=>(pirate => luffy)
}

// /..............for of loop in obj

const gameObj = {
  game1: "bgmi",
  game2: "temple run",
};

/*
for(const [key,value] of gameobj){
  console.log(key,"-", value)    error object is not iterable 
} 
*/

// --------------------for in loop ------------------

const compLang = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
};

for (const key in compLang) {
  if (Object.hasOwnProperty.call(compLang, key)) {
    const element = compLang[key];
    console.log(element);
  }
}

////===============Array in for loop

const programming = ["java", "python", "ml", "ai"];

for (const key in programming) {
  console.log(programming[key]);
}

// Note: in for in loop we also get key value  and directly value

const marine = ["garp", "sengoku", "smoker", "morgan"];

marine.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// Note: we can also pass function

function printme(item) {
  console.log(item);
}

marine.forEach(printme); // garp,smoker,sengoku,morgan

const myCoding = [
  {
    languageName: "java",
    fileName: "jaa.jvc",
  },
  {
    languageName: "python",
    fileName: "python",
  },
  {
    languageName: "ruby",
    fileName: "ruby.ruby",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
  console.log(item.fileName);
});

const marines = ["garp", "sengoku", "smoker", "morgan"];

const marinesNames = marines.forEach((item) => {
  console.log(item);
  return item;
});

console.log(marinesNames); // undefined bcuz foreach doesnt return any values

// method for returning or priniting in for each  ;

const num = [1, 2, 3, 4, 115, 116, 117, 118, 119, 1110];

const newNum = [];

num.forEach((num) => {
  if (num > 4) {
    newNum.push(num);
  }
});
console.log(newNum);

// '''''''''''''''''''''''''FILTER''''''''''''''''''''''''

const myNumbers = [1, 2, 3, 4, 15, 16, 17, 18, 19, 110];

const returnedNumber = myNumbers.filter((num) => num > 4);
console.log(returnedNumber); // return the number which satisfy the statement

const returnedNumberAgain = myNumbers.filter((num) => {
  //  num >4
  return num > 4; //we have to use return after  using {}
});
// console.log(returnedNumberAgain)  [] empty array bcz we used {} it created scopes
console.log(returnedNumberAgain); //[15,16,17,18,19,110]

// ................................. Map ...........................

const numers = [1, 3, 4, 5, 6, 7, 8];

const newnumers = numers.map((num) => num + 10);
console.log(newnumers); // 11,13,14,15,16,17,18

// ......................chaining

const anothernumm = numers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(anothernumm);

// .............REDUCE................................

const values = [1, 2, 3];

const myTotal = values.reduce((acc, curval) => {
  // acc=> accumulator, curval=>currentvalue
  console.log(`acc: ${acc}, curval:${curval}`);
  return acc + curval;
}, 0); //acc doesn't know from where to start so we have to pass initial value in this case we are passing 0

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 999,
  },
  {
    itemName: "java course",
    price: 1999,
  },
  {
    itemName: "python course",
    price: 3999,
  },
  {
    itemName: "web dev course",
    price: 9999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay); //16996

// ................Promises .......................

/// creating a promise

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async programming");
    resolve(); // now .then is connected with the promise
  }, 1000);
});

//  now consumption of resolve and reject

// .then give us a callback mean a function

promiseOne.then(() => {
  console.log("promise consumed");
}); // .then is directly connected to .then

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2 ");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Async 2 resolved");
});

const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "rishang", email: "gabru@gbaru" }); //passing this to .then bcz both are connected we k now that
  }, 1000);
});

thirdPromise.then((user) => {
  //here storing that obj in user
  console.log(user); //{ username: 'rishang', email: 'gabru@gbaru' }
  console.log(user.username, user.email);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "rishang", age: 20 });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.age;
  })
  .then((age) => {
    console.log(age);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("promise is either  resolved or rejected"));

const promisefive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "js", password: 123 });
    } else {
      reject("js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  //wrap in a try catch cuz async await cant handle error by themself
  try {
    const response = await promisefive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// ............''''''''''''' object oriented programming .............................

/*  
#object  
- collection of properties of methods 
  
-------Constructor function 
-------Prototypes 
-------Classes 
-------Instances (new, this )  things to learn by self 
 



*/

function userrr(user, logCOunt, isLoggedIn) {
  this.user = user; //LHS=VARIABLE , RHS= VALUE
  this.logCOunt = logCOunt;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const useroNE = new userrr("rishang", 12, false);
console.log(useroNE);
console.log(useroNE.constructor); // [Function: userrr]  refrence to itself

/* Note=> After using new keyboard   

1.created empty obj 
2. constructor() call 
3.  argument injected 
4. we got values  
*/

// ............................. new key word  ...................... 
 
function  multipleby5(num){ 
  return num*5
} 
 
multipleby5.power=4 ; 

console.log(multipleby5(3));   // 15
console.log(multipleby5.power);   //4 
console.log(multipleby5.prototype) // {} - empty obj 
 
 
function createUsr(username,score){
   this.username= username 
   this.score=score
}
 
createUsr.prototype.increment=function(){
  this.score++ // we are using this  to specify whom call is this 
} 
 
const chai= new createUsr("chai",20); 
const tea= new createUsr("tea", 250); 

chai.increment();  // 20  
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/ 
 
 
 
// ........''''''''''''''Prototype section ''''''''''''........ 

let myHero= ["thor","spidey"] ; 
 
let heropower={
   throw: "hammer", 
   spiderman: "sling",
    
   getspiderPower:function(){
    console.log(`Spiderman power is ${this.spiderman}`)
   }
} 
console.log(heropower.getspiderPower()); 
 
 
Object.prototype.createdMethod= ()=>{ // we created our method but directly via top hirerichay bcz everthing is obj 
  console.log("i am injected via prototype and available everywhere") 
}  

Array.prototype.anotherCreatedMethod=()=>{
  console.log("am i available everywhere"); 
}
 
 // Now lets check 
 console.log(myHero.createdMethod());     //i am injected via prototype and avail in everywhere
 console.log(heropower.createdMethod()); // i am injected via prototype and avail in everywhere 
  console.log(myHero.anotherCreatedMethod()) // am i available everywhere
 // console.log(heropower.anotherCreatedMethod())   error
 
  

 //// ................Inheritance-------------------- 
  
 const User = {
  name: "chai",
  email: "chai@google.com"
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
 
 
 //............'''''''' Call and this .................. 


function setname(name) { 
  this.name=name
  
}
 
function createUser(username,email,password){  


  setname.call(this,username) // .call for explicitly calling and holding the refrence 
  //here we have to pass this for the context of  createuser function  using 
  this.email=email; 
  this.password=password;

} 
  
const calling= new createUser("dino","dino@gmail.com",123); 
console.log(calling) 

 
// .........'''''''''''''''class ;;'''''''''''''''''''''' 
  
class userssss{ 
  constructor(userName,password,email){ 
    this.userName=userName; 
    this.password=password;  
    this.email=email; 



    


  } 
  encryptPassword(){ return `${this.password}`} 
   
  changeToUppercase(){ return this.userName.toUpperCase()}

}
 
const myUsers= new userssss("rishang",123,"email@.com"); 
 
console.log(myUsers.changeToUppercase()); 
console.log(myUsers.encryptPassword());  


// behind the scene   of class code
 
function user_(userName,password,email){ 
  this.userName=userName; 
  this.password=password;  
  this.email=email;  
} 
 
user_.prototype.encryptPassword=function(){
   return   `${this.password}`
}  

user_.prototype.changeToUppercase=function(){
   return   `${this.userName.toUpperCase()}`
} 

const userForUser_= new user_("zorodono","4444","email,1234") 

console.log(userForUser_.encryptPassword()) //4444
console.log(userForUser_.changeToUppercase()) //ZORODONO 
 
 

//[[[[[[[[[[[[[[[[[[ INHERITANCE ]]]]]]]]]]]]]]]]]]  
 
class student{
  constructor(username){
    this.username=username
  } 

  logme(){
    console.log(`Username is  ${this.username}`)
  }

    static friends(){ // after using static word no one can access only student access
     console.log("friend  name is luffy")
  }
} 

 class Teachr extends student {  
  constructor(username,email,password){ 
      
    super(username); // special keyword which 
    this.email=email; 
    this.password=password

  } 

  addcourse(){
    console.log(`added course is ${this.username}`)
  }

 }
 

const checkForTechr=new Teachr("hitesh","hitesh.com",123); 
console.log(checkForTechr.addcourse());  
console.log(checkForTechr.logme()); // Username is  hitesh bcz teacher is extended version of student 

const checkForStudent= new student("gabs");  
student.friends() // friend name is luffy  
// console.log(checkForStudent.friends());  not accessible bcz of static keyword
// console.log(checkForStudent.addcourse())  not accessible bcz its not student function  
console.log(checkForStudent.logme()) //Username is  gabs bcz its student () 
 
console.log(checkForStudent=== checkForTechr) //false
console.log(checkForStudent== checkForTechr) //fals
console.log(checkForStudent=== checkForTechr) //false
console.log(checkForStudent== checkForTechr) //false