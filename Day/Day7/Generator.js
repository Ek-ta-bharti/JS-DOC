function* counter() {
    var i = 0;
    while (true) {
        yield i++;
    }
}

var gen = counter();
console.log(gen.next().value); // Output: 0
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2


function* generate() {
    yield 8 + 4;
  }
  let iterator = generate();
  console.log(iterator.next().value); // Output: 12
  