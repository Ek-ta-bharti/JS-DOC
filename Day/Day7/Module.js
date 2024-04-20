// Module file: add.js
export function add(a, b) {
    return a + b;
  }
  
  // Main file
  import { add } from './add.js';
  console.log(add(8, 4)); // Output: 12
  