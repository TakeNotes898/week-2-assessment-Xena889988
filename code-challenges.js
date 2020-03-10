// ASSESSMENT 2: Coding Practical Questions

// // --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// // Use the test variables provided.

// var num1 = 15;
// // Expected output: "15 is divisible by three"
// var num2 = 0;
// // Expected output: "0 is divisible by three"
// var num3 = -7;
// // Expected output: "-7 is not divisble by three"


// // i got the concept. but the problem is that it only checks for the first argument and then goes answers num1 and never checks for num2. it is 3:28 pm on sunday. i will go on and then come back later to that problem :) time spent: 4,5 hrs


// function divisibleNum(num) {
//     if (num % 3 === 0){
//         return `${num1} is divisible by three`;
//     } if  (num === 0 ){
//         return `${num2} is divisible by three`;
//     } else if (num % 3 < 0 ){
//         return `${num3} is not divisible by three`;
//     }   else {
//         return "error";
//     }
    
        
// }
//     console.log (divisibleNum(num1));
//     console.log (divisibleNum(num2));
//     console.log (divisibleNum(num3));

// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

// THIS IS NOT WORKING I COULNDT FIGURE IT OUT :(


// var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"];
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

//     // turn an array into string
// var randomNounsStr = randomNouns.join(', ');
//     // give a string a function

// for (let i = 0; i < randomNounsStr.length; i++) {
//     if (typeof randomNounsStr[i] === 'string') {
//         randomNounsStr[i] = randomNounsStr[i].toUpperCase();
//     }
// console.log(randomNounsStr());

// // --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

// var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"];
// // Expected output: [-8, 0, 8, 46, 59, 90, 107]

// const onlyNums = (array) => {
//     let newArr = [];
//     for(let i=0; i<array.length; i++){
//         newArr.push(array[i] > 1);
//     }
//     return newArr;
// };

// console.log(onlyNums(mixedDataArray));


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.

// var vowelTester1 = "learn";
// // Expected output: 1
// var vowelTester2 = "throw";
// // Expected output: 3


// const pickOne = (array) => {
//     let newArr = array.split("").filter(value => {
//         let checkIndex = value.toLowerCase();
//         return checkIndex === "e" || checkIndex === "o";
//     });
//     return newArr;
// };
// console.log(pickOne(vowelTester1));
// console.log(pickOne(vowelTester2));


// --------------------5) Create a function that 
// takes three arguments - 
// two numbers 
// and a mathematical operation (+, -, *, /) 
// and performs the given calculation. 
// If the input tries to divide by 0, 
// return: "Can't divide by 0!"

function calculator(x, y, z) {
    if (y === "*") {
        return (x) * (z);
    } else if (y === "+") {
        return (x) + (z);
    }else if (y === "-") {
        return (x) - (z);
    }else if (z === 0) {
        return "Can't divide by 0!"
    }
}


// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+",  3))
// Expected output: 19

console.log(calculator(89, "/",  0))
// Expected output: "Can't divide by 0!"
