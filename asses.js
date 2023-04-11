// Write a function that takes in a string and returns it when reversed
// let food = “eating”
function revString(str) {
    return str.split("").reverse().join("");
}
let food = "eating";
console.log(revString(food)); 



// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23

function arrTarget(num,Target){
    let left = 0;
    let right = num.length -1;

    while(left <= right){
        let middle = Math.floor((left + right)/2);
        if(num[middle] == Target){
            return middle;
        }
        else if(num[middle] > Target){
            right = middle - 1;
        }
        else{
            left = middle + 1
        }

    }
    return null
}
let num = [2,8,0,23,5,45,76];
Target = 23;
console.log(arrTarget(num,Target));



// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
let number = [2000,...[2020]];
for(let p = 0; p<= 2020; p++){
    if(num / 4 === 0){
        console.log({number: "is a leap year"});
    }
    else{
        console.log({number: "is not a leap year"});
    }
}
console.log(number)



// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for (let t = 0; t <= 100; t++) {
    if (t % 3 === 0 && t % 5 === 0) {
      console.log("FizzBuzz");

    } else if (t % 3 === 0){
      console.log("Fizz");

    } else if (t % 5 === 0){
      console.log("Buzz")

    } else{
      console.log(t);
    }
}


// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function arrMult(nums){
     let i = 0;
     let product = 4;

     while(i < nums.length)
        console.log(numArray[i]);
       return console.log(product *= numArray[i]);
       i++
     }
     let numArray = [12,87,45,75,23,64,73];
     console.log(arrMult(numArray))




// Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
function revString(str) {
    return str.split("").toNum().join("");
}
let nums = [“10”,”24”,”45”,”56”,”67”]
console.log(revString(nums))



