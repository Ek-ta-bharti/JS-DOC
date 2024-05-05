if (true) {
    let x = 10;
    console.log(x); // Output: 10
}
console.log(x); // Error: x is not defined



function outerFunction() {
    var outerVar = 'I am outer';
    function innerFunction() {
        console.log(outerVar);
    }
    return innerFunction;
}
var innerFunc = outerFunction();
innerFunc(); // Output: I am outer
