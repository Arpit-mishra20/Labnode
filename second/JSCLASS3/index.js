// console.log("hello bro");
// //Topic :String
// let firstName='Arpit';
// let lastName=new String('Mishra');
// let date=new Date();
// let date2=new Date('Febraury 18 1998 ');
// console.log(date2);
//Array
// let arr=[3,8,7,8,6];
// console.log(arr);
// let numbers=[2,3,5,3];
// console.log(numbers);
// //end=>push
// //start=>unshift
// //middle=>splice
// console.log(numbers.indexOf(29));

// //to check if a number exists or not
// if(numbers.indexOf(3)!=-1)
//  console.log("present");
// //using function includes
// console.log(numbers.includes(2));
//Ab references pe krenge
let courses=[
    {no:1, nanuna:"arpit"},
    {no:2, nanuna:"mishra"}



];
//console.log(courses);
//ab indexof laga ke dekhte hain
//console.log(courses.indexOf({no:1,nanuna:'arpit'}))
// -1 kyun aayega
//because yeh references hain
//find function use krenge
//sahi tareeka hain callback functions
 //predicate function use kiya hain
//aur chota krne ke liye arrow function use krenge
//  let course=courses.find(function(course){
//     return course.nanuna=='arpit';
// })
//  let course2=courses.find(course2=>course2.nanuna=='mishra');
//   //step1:pehle function hata denge
//   //step2:agar single parameter hain toh bracket hatao arrow lagao
//   //step3:agar single statement hain toh {} hatao aur bracket hatao   

// console.log(course2);
// //removing
// //beginning=>pop
// //end=>shift
// //middle=>splice
// let num=[3,5,3,6,3,4,5];
// num.splice(3,1);
// console.log(num);
//emptying an array
 //splice all 
 //numbers.length=0
 //numbers=[]
 
 //Concatenating and slicing
//  let fir=[1,3,2];
//  let sec=[4,5,6];
//  let con=fir.concat(sec);
//  console.log(con);
//  let slice=con.slice(3,4);

//Spread operator
// let s=[...fir,...sec]

//Iteration
// arr.forEach(number=>console.log(number));
//for each loop

//Joining array
// let numers=[2,3,4,5,6];
// const joined=numers.join(",");
// console.log(joined);    
//similarly use join method
//Sorting
//.sort
//.reverse

//filter
// let numers=[2,3,4,5,6];
// let filtered=numers.filter(value=>value>=0);
// console.log(filtered);