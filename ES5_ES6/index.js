// var => we can redeclare and reassign ✅
// let => cannot do redeclare but can reassign ✅
// const => neither redeclare nor reassign ✅


var a = 10
//var a  => declaration
//a = 10  => assignment

//var  -> redeclaration 

var a = 10
var a = 11
console.log(a)//11

//var  -> reassignment 

var a = 10
a = 11
console.log(a)//11

//let - redeclaration

// let b = 10
// let b = 20
// console.log(b)//SyntaxError: Identifier 'b' has already been declared

//let - reassignment

let b = 10
b = 20
console.log(b)

//const - redeclartion

// const c = 10
// const c = 20
// console.log(c)//SyntaxError: Identifier 'c' has already been declared

//const - reassignment

// const c = 10
// c = 20
// console.log(c)//TypeError: Assignment to constant variable.


//var  -> global scope, function scope
//let, const -  block scope


function fun() {
    let z = 20
}
fun()
// console.log(z)//ReferenceError: z is not defined


var y2 = 20

{
    var y1 = 10
    let y2 = 20
}

console.log(y1)
//can a var leak outside or will it block ? yes

//function = es5
function double() {
    var n = 20
    return n * 2
}

console.log(double())

//function = es6 => arrow function

const double1 = (n) => n * 2

console.log(double1(20))//function call


//object 
var obj1 = {
    name: "jack",
    age: 20

}

//destructure 

var { name, age } = obj1
console.log(name)
console.log(age)

//assign  - ES5
var o1 = {
    firstName: "John",
    lastName: "Andrew"
}
var o2 = {
    age: 20,
    city: "Bangalore"
}

var o3 = Object.assign(o1, o2)
console.log(o3)

//ES6 => spread operator 

var o3 = { ...o1, ...o2 }
console.log(o3)

//ES5 => String literals

// An Avengers is an action movie with rating of 5 and its from a category Hollywood

var mname = "Avengers"
var type = "Action"
var rating = 5
var category = "Hollywood"

var output = "An " + mname + " is an " + type + " movie with rating of " + rating + " and its from a category " + category
console.log("ES5=>", output)

//ES6 => Template literals

// => backtick = `` + interpolation => ${} => substitute the value


var output = `An ${mname} is an ${type} movie with rating of ${rating} and its from a category ${category}`
console.log("ES6=>", output)

