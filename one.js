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
console.log("2" + "2");
console.log(((4 % 3) * 2 * 5) % 3); // 1

// ******************************Comparison *********************

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log("2" == 2); //true
console.log("2" === 2); //false

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
console.log(myName);
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
const balance = new Number(300); //strict method

console.log(balance.toFixed(2)); //like this 300.00 because we give (2)

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
arr.pop(); //remove the laast element of the array
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
 
const complicated_Array =[2,3,4,[4,6,7],[6,7,8,[9,10]]]; 
const simple_array=complicated_Array.flat(Infinity); //return a new array with all sub array element  
console.log(simple_array); 
console.log(complicated_Array); //no changes in the main array 

/////////////////////  

console.log(Array.isArray("rishang"));  //asking that is this array
console.log(Array.from("rishang"));  // converting to the array 
console.log(Array.from({name:"rishang"})) //interesting case and output =>[] empty array
 
const rank1=100; 
const rank2=200; 
const rank3=300; 

const all_rank= Array.of(rank1,rank2,rank3); //cpnvert and merged also 
console.log("a:",all_rank); 

const all_rank2=Array.from(rank1); //unable to convert 
console.log(all_rank2); 
const all_rank3=Array.from(String(rank1));// convert into string then into array ,100=>['1','0','0']
console.log("c",all_rank3);
const all_rank4=Array.from(String(rank1),Number);// convert into string then into  mumber, 100=> [1,0,0]
console.log("d",all_rank4); 





// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^Objects^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   

//singleton :  literal =>no  ,Constructor=> yes 

//object  literals declartion   

const mySym=  Symbol("key1")

const jsUser={ 

  //we can't see but every key is treatd like string at time of compilation 
  name:"rishang kumar",  
  "fullName":'rishang kumar choudhary', //another methoda to declare 
  age:2, 
  location:"greator noida", 
  [mySym]:"key2", //here we are declaring symbol using =>[] 
  email:"rishangkumar@gmail.com", 
  isLoggedIn:false, 
  lastLoginDays:["Monday","saturday"]
} 
console.log(jsUser.email); 
console.log(jsUser["location"]);// better method in this we can access keys which declare =>"" 
console.log(jsUser[mySym]); //no need to write symbol in "" only for symbol    




///--------------If u dont want  to do chnges in your object  then => 

jsUser.email= "hello@gmail.com";  
// Object.freeze(jsUser);    // object is freezed   
console.log(jsUser) //no error but no changes 

jsUser.greeting=function(){
  console.log("hello js"); 
}
 
console.log(jsUser.greeting); //function anonymous  
console.log(jsUser.greeting()); // hello js 

jsUser.greetingTwo= function(){
  console.log(`hello js user, ${this.name} `) 
} 
console.log(jsUser.greetingTwo);  //function anomymous
console.log(jsUser.greetingTwo()); //hello js user  rishang kr



//  !!!!!!!!!!!!!! Object singleton => 

// const tinderUser= {}this is  not singleton object  



const tinderUser= new Object() //this is singleton object  
tinderUser.id="123abc" 
tinderUser.name="rishang" 
tinderUser.isLoggedIn= false  

console.log(tinderUser)




