function add(a, b, callback) {
    let result = a + b;
    callback(result);
  }
  function callback(result) {
    console.log(result);
  }
  add(8, 4, callback); // Output: 12
  