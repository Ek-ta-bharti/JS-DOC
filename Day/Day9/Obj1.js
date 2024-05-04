const syb = Symbol("key")
const MyData={
    name: "ekta bharti",
    age: 21,
    [syb] : "mykey",
    course: "btech"
}

console.log(MyData[syb])
//if u make any changes in object then use this method
MyData.age =22
//if u dont want any changes in data then use this method
Object.freeze(MyData)
MyData.age =23
console.log(MyData);



//////////////////////////output
mykey
{
  name: 'ekta bharti',
  age: 22,
  course: 'btech',
  [Symbol(key)]: 'mykey'
}
