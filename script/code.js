let first_number = 15;
let second_number = 17;


// First Method
function swapNum(first_number, second_number) {
let temp = first_number;
first_number = second_number;
second_number = temp;

console.log("first_number" + " = " + first_number)
console.log("second_number" + " = " + second_number)
}

swapNum(first_number, second_number)

//Second method 

// [first_number, second_number] = [second_number, first_number];
// console.log(first_number, second_number);

//Third method
// first_number = first_number + second_number;
// second_number = first_number - second_number;
// first_number = first_number - second_number;

// console.log(first_number, second_number);
