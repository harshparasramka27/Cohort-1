//console.log(true)

//int x=10;
//String s="Hello"


//var x=10
//let y="hello"
//const z="world";

//var
//var is globally and functionally scoped
//redeclare and reinitialize

//let
//let globally and block scope
//reintialize but cannot redeclare


//var x=10

//var x ;  //declaration
//x=10;   //initialisation
//x=11;   //reassignment

//var x=10;
//let x=10
//x=12;

//inside local scope
//function name(){
//  var y=0;
//  console.log(x)
//  console.log(x)
//}

//console.log(y)

//name()

/*
const
global and blocked scope
redeclare and reintialize both not possible
value cannot be changed
*/

//const x=10;
//x=11; not possible

{
    let x = 10
    console.log(x)   
    {
        //local var x and global var x
        //deadzone
        console.log(x)   
        let x = 11
    }
    console.log(x)
}