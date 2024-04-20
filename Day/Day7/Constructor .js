function Adder(a, b) {
    this.a = a;
    this.b = b;
    this.result = function() {
      return this.a + this.b;
    };
  }
  let calculator = new Adder(8, 4);
  console.log(calculator.result()); // Output: 12
  