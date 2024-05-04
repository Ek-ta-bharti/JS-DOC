const course =["cse","it","ece"];
const dergee =["btech", "mtech", "bca","mca"];

course.push(dergee)

console.log(course);


[ 'cse', 'it', 'ece', [ 'btech', 'mtech', 'bca', 'mca' ] ]



const course =["cse","it","ece"];
const dergee =["btech", "mtech", "bca","mca"];

// course.push(dergee)
const final =course.concat(dergee)
console.log(final);
--- output
[
    'cse',   'it',
    'ece',   'btech',
    'mtech', 'bca',
    'mca'
  ]


  const course =["cse","it","ece"];
const dergee =["btech", "mtech", "bca","mca"];

// course.push(dergee)
// course.concat(dergee)

const final =[...course , ...dergee]
console.log(final);
---output
[
    'cse',   'it',
    'ece',   'btech',
    'mtech', 'bca',
    'mca'
  ]