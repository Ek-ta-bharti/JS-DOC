let myArray = [1, 2, 3, 4, 5];


console.log(myArray[0]); // Outputs: 1
console.log(myArray[2]); // Outputs: 3


console.log(myArray.length); // Outputs: 5


myArray.push(6); // Appends 6 to the end
myArray.pop();   // Removes the last element
myArray.unshift(0); // Adds 0 to the beginning
myArray.shift();  // Removes the first element


for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

myArray.forEach(function(element) {
    console.log(element);
});

let newArray = myArray.map(function(element) {
    return element * 2;
});


let fruits = ['Apple', 'Banana', 'Orange'];
fruits.splice(1, 1, 'Mango'); // Removes one element at index 1 and inserts 'Mango'
console.log(fruits); // Outputs: ['Apple', 'Mango', 'Orange']


// let myArray = [1, 2, 3, 4, 5];
// console.log(typeof myArray); 

// Outputs: "object"
