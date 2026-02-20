//console.log(10-5)
//console.log("hello world")
//console.log(10)
//console.log(true)

// var x=10
// let y=10
// const z=10

// var x; //declaration
// x=10 //initialization
// x=11 //re assignment

//const x=10; //it is necessary to initialize a const

// var x=10;
// console.log(x)
// {
//     console.log(x)
// }

// var is global scoped and functional scope. memory leaks in var. so var is not used.
// {
//     var x=10;
//     console.log(x)

// }
// console.log(x)


// {
//     let y=20
//     var x=10;
//     console.log(x)
//     console.log(y)
//     let y;//y cannot be used again
//     var x;//doesnt show error
// }
// console.log(x)
// console.log(y)// it will show error as it is not declared globally

//var x // by default, value is undefined
//let x // undefined 
//console.log(x)
//let x=10 // above this , for this line above all the codes are temperal dead zone
//var x=10; //done by u



{
    let x =10;
     console.log(x)
    {
        console.log(x)
        let x=12;
        console.log(x)
    }
}