// // // console.log("sasriakal");
// // run();
// // function run(){
// //     console.log("run");
// // }
// // // run(); hoisting hoti hain jo function declaration ko upar bhej deti hain 

// const { log } = require("console");

// // //Function assignment 
// // let arr=function array(){
// //     console.log("creating array");
// // };
// // arr();// Function call hamesha niche rahega
// // let list=arr;
// // list();
// let sum=function sum(a,b){
//     let total=0;
//     for(let value of arguments)
//         total=total+value;
//         return total;
//     }




// // console.log(sum(2,3,3));
// // //console.log(sum(1);ans=NaN
// // //console.log(sum();ans=NaN
// // //console.log(sum(1,2,4,5,6);ans=3

// // //Argument function isse kitne bhi parameters pass kr skte hain


// // Rest function
// //For Multiple parameters and store it as array
// // let num=function sum(...args){
// //     console.log(args);
// // }
// // num(1,3,3,45,54);

// //Deafult Paramaters
// // function interest(p,r=5,t=5){
// //     return p*r*t/100;

// // }
// // console.log(interest(1000,undefined,8));

// //Getter and Setter
// let person={
//    fName:'Arpit',
//    lName:'Mishra',
//    get fullName(){
//     return `${person.fName} ${person.lName}`;

//    },
//    set fullName(value){
//     if(typeof value !==String){
//         throw new Error("You have not sent a string");
//     }
//     let parts=value.split(' ');
//     this.fName=parts[0];
//     this.lName=parts[1];
//    }
// };
// try{
//     person.fullName=true;
// }
// catch(e){
//     alert(e);
// }
// console.log(person.fullName);

// //lifetime of  variable is its scope
// {  let a=5;
// //console.log(a);
// }
// console.log(a);
//let keyword ka scope nearest symbols pe depend karta hangingPunctuation
//var keyword ka scope nearest function ke andar tak hi define hota hain

// for (var i=0;i<10;i++){

// }
// console.log(i);//ans=10

// if(true){
//     let i=5;
// }
// console.log(i);//error not defined
// let arr=[1,2,3,4];
// let sum=function sum(a,b){
//     let total=0;
//     for(let value of arguments)
//         total=total+value;
//         return total;
//     }
//Reducing an array
// let totalsum=arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
// console.log(totalsum);