//primitive data type (immutable, compare)

let num1 = 1;
let num2 = 1;
console.log(num1 == num2);

let js = "javascript";
let py = "python";
console.log(js == py);

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff);

//non-primitive data type (mutable, cannot compare by value)

let number = [0,2,3,4,5];
number[0] = 1;
console.log(number);

let number1 = [1,2,3,4,5];
let number2 = [1,2,3,4,5];
console.log(number1 == number2);

let userOne = {
    userName: "Alex",
    country: "India",
    city: "chennai"
};
console.log(userOne);

let userTwo = {
    userName: "Alex",
    country: "India",
    city: "chennai"
};
console.log(userOne == userTwo);

// non-primitive compared by reference

let number3 = [1,2,3,4,5];
let number4 = number3;
console.log(number3 == number4);

let userThree = {
    userName: "Alex",
    country: "India",
    city: "chennai"
};
let userFour = userThree;
console.log(userThree == userFour);


//numbers

let age = 25;
const gravity = 9.81;
let mass = 72;
const Pi = 3.14;

const boilPoint = 100;
const bodyTemp = 37;

console.log(age, gravity, mass, Pi, boilPoint, bodyTemp);




const PI = Math.PI;
console.log(PI);

console.log(Math.round(PI));

console.log(Math.round(9.6));

console.log(Math.floor(5.4));

console.log(Math.ceil(5.4));

let randNum = Math.random()
console.log(randNum)

let rand = Math.floor(Math.random()*12);
console.log(rand);

console.log(randNum*11);

console.log(Math.min(5,8,0,-5,98));
console.log(Math.max(-55,10,55,98));

console.log(Math.abs(-6));
console.log(Math.sqrt(100));
console.log(Math.sqrt(2));
console.log(Math.pow(3, 3));

let firstName = "Alex";
let lastName = "Z";
let country = "India";
let years = 99;

let fullName = firstName + " " +lastName;
console.log(fullName);

console.log(`His name is ${fullName}, He is from ${country}, finally ${fullName} is ${years} old.`);

let a = 5;
let b = 4;

console.log(`is a is lesser than b: ${a >b} `);

console.log(firstName.length);
console.log(lastName.length);
console.log(fullName.length);

console.log(firstName[0]);

let lastIndex = firstName.length-1;
console.log(lastIndex);
console.log(firstName[lastIndex]);

let name1 = "JavaScript";
console.log(name1.toUpperCase());
let name2 = "AleX";
console.log(name2.toUpperCase())
let name3 = "American Flag";
console.log(name3.toUpperCase());
let name4 = "Alex";
console.log(name4.toLowerCase());
let name5 = "JavaScript";
console.log(name5.toLowerCase());
let name6 = "American Flag";
console.log(name6.toLowerCase());

let substr1 = "JavaScript";
console.log(substr1.substr(1,5));
let substr2 = "Alex";
console.log(substr2.substr(1,3));