// **JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.
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


const myCoding=[
  {
    languageName: "java", 
    fileName:"jaa.jvc"
  },{
    languageName: "python",  
    fileName:"python"
  },
  {
    languageName: "ruby",  
    fileName:"ruby.ruby"
  }
] 

myCoding.forEach((item)=>{
  console.log(item.languageName) 
  console.log(item.fileName)
}) 


