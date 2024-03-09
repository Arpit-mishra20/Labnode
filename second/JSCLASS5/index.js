//keep in mind
//getElementbyClassName and getElementsbyTagName
//1-both method use document object
//2-both return multiple items
//3-the list returned is not an Array

//$0 gives you the present tag
//we can equate any html element by using this.
//let para=$0;
//Access element 
//getElementById()
//getElementByClassName()
//getElementByTagName()
//QuerySelector method
//querySelector(#header)id
//querySelector(.header)class
//querySelector('header')tag

//Update ,existing content: 
//InnerHtml:
//we can use get and set methods


//OuterHTML
//textcontent:
//difference with innertext that it will show all the text
//Innertext:
//It will not display hidden content

//creating new element
//let content =document.querySelector('.paraclass');
//content; 
//let newPara=document.createElement('p'); 
//newPara;
//content.appendChild(newPara);  

//creating textnode
//let mypara=documents.createElement('p');
//mypara.textContent="I am the text";
//content.appendChild(mypara);//last main add hoga 

//InsertAdjacentHTML method
//2 rules
//it should have 2 arguments,pehla location jaha add krna hain
//dusra text content jo add krna hain 

//location:4 types
//beforebegin:pehle para ke
//afterbegin:after begin ke para ke matlab
//beforeEnd:ending tag ke pehle
//AfterEnd:ending tag ke baad


//RemoveChild()
//2 rules
// 1:parent element pata hona chahiye
//2:child element to Remove
//
// parent.removeChild(childElement)


//CSS
//style page layout 
//.style
//.cssText
//.setAttribute
//.className
//.classList
 //content.style.color='red';//for single
 //content.style.cssText="color :green;background-color:red";//multiple
 //content.setAttribute("style","color:orange");//for styling and adding id and other tasks.







