//Most important-||
//Primitives are copied by their values
//Refernces are copied by their addresses.
console.log("lets start")
//object create .chahe const likho ya let
// const rectangle={ 
//     length:2,
//     breadth:3,
    
//     draw: function(){
//         console.log("hey just draw");
//     }
// };
// function createrectangle(){
//     return rectangle={length:2,
//     breadth:3,
    
//     draw: function(){
//         console.log("hey just draw");
//     }
// };

//objectcreation-two methods-factory function and constructor function.
//factory function lega ek fuction call ko as request and return krega result as object
// function createSqr(){
//     return createSqr={
//         length:5,
    
    
//     drawsqr(){
//         console.log("hey just draw a sqr");
//     }
// };
// }
// const createSqr1=createSqr();
//Constructor function
//har function ek object hain isiliye iska bhi constructor hoga
// function Rectangle(len,bre){
//     this.length=len,
//     this.breadth=bre,
//     this.draw=function(){
//         console.log("drawn using constructor function");
//     }
// }
// let rectangleObj=new Rectangle(3,2);
// rectangleObj.color="red";//adding object
// console.log(rectangleObj);
// delete rectangleObj.length;
// console.log(rectangleObj);

//Primitives
// let a=10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);//11 galat hain 
// // Pass by value Ans==10
// //isiliye kyunki primitives main copy jaati hain.
// let b={value:10};
// function inc2(b){
//     b.value++;
// }
// inc2(b);
// console.log(b);//11 ans  
//yha alag alag naamse bale call ho par change address pe hoga
//Primitives-number,string,boolean,null,undefined
//References-Objects,Array,Function


// // For in
// let rectangle={
//     length:2,
//     breadth:3
// };
// for(key in rectangle){
//     console.log(key,rectangle[key]);
// }
// //for off (Only for Iterables(yaani arrays,maps))
// for(key of Object.keys(rectangle)){//or key of Object.entries(rectangle)
//     console.log(key)
// }
 //Important topic 
//  Object Clonning
//3 methods
// 1=>Iteration
// let src={
//  length:3,
//  breadth:4
// };
// let des={};
// for (key in src){
//     des[key]=src[key];
// }
// console.log(des);
//2=>Assign function
let src={
     length:3,
     breadth:4
    };
 let des=Object.assign({},src);
 console.log(des);
//3 =>Spread
// let des={...src};
// console.log(des);
//Garbage Collection
