
function operate(operator, a, b) {
    return operator(a, b);
  }
  let addition = function(a, b) {
    return a + b;
  };
  console.log(operate(addition, 8, 4)); // Output: 12
  
