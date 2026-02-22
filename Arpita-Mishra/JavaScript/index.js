// console.log("Hello World")
// console.log(10-1)
// console.log(true)

// var x=10;
// var x=10
// let y=10
// const z=10
// var t="110"    //dynamic typing means data type specify krne ka need nahi h 
// x=10
// y=12       // x y me no issue
// z=11      // z wale pe error aayega becoz const laga hua h z k aage const means contsant means ab usko change nhi kr skte


// var x; //declaration
// x=10 //initialisation

// var x=10;
// {
// console.log(x)
// }

// {
//     var x=10
//     console.log(x)
// }
//  console.log(x)
// var is global scoped and functional scoped
// var x=10
// function name(){
//     var y=11;
//     console.log(x)
//     console.log(y)

// }
// console.log(y)
// name()


// {   let y=20
//     var x=10
//     console.log(x)
//     console.log(y)

// }
// console.log(x)
// console.log(y)

// let x=10
// console.log(x)\

// console.log(x)
//let x=10     // error dega 

// in case of let dead zone  mtlb if pehle x ko print kra re and baad me initialize kr re then wo print statement k upppr ka sab ko dead zone bolte h wo x ka dead zone h 

// console.log(x)
// var x=10;    // yaha erroe nai dega  bass undefined likh dega mtlb ki initialize nhi hua h 


// by default value of var is undefined

//let
//let globally and block c=scoped
//let can be reinitialised but cant be redeclared
// let x=10
// {
//     let x=11;
// }
// function name(){
//     var y=11;
//     console.log(x)
//     console.log(y)

// }
// console.log(y)
// name()

/*
const
global and blocked scope
redeclare and reinitialise both not possible
value cannot be changed
*/

// const x=10
// x=11; //not possible

// {
//     let x=10
//     console.log(x)
//     {
//         console.log(x)
//         let x=11
//     }
//     console.log(x)
// }