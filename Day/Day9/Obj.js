
const syb = Symbol("key")
const MyData={
    name: "ekta bharti",
    age: 21,
    [syb] : "mykey",
    course: "btech"
}

console.log(MyData[syb]);

//mykey