//Browser Elements
//topics-
//events,respond to events,data structures in events,stop an event ,lifecycle of an event

//MonitorEvents()=it will show all the events,triggered dispatched in all phases
//basically show all the events happening

//unmonitorEvents(); it turns off all the events.

//EventListener;
//classes(blueprint)
//objects(reality)

//interface(blueprint)

//EventTarget->Interface implemented by object that 
//recieve events and may have listeners for them.
//3 methods
//addEventListener()-listen,respond or hook into events
//pseudocode-
//<event.target>.addEventListener(<event-to-listen-for>,<function-to-react-when-event-happened>);
//1-event-target->component(document,p,div,article)
//2-event-type->(click,scroll,doubleclick)
//3-function-define what to do when event occurs
//deleteEventListener()
//.dispatchEvent()
// document.addEventListener('click',function () {console.log("I clicked on document")
    
// });
// let content=document.querySelector("h1");
// content.addEventListener('click',function(){
//     content.style.background='cyan'
// });
//Correct Syntax
// function fun(){
//     console.log('Hi');

// }
// document.addEventListener('click',fun);
// document.removeEventListener('click',fun);

//Wrong method
// document.addEventListener('click', 
// function fun(){
//     console.log('Hi')

// });
// document.removeEventListener('click',
// function fun(){
//     console.log('Hi')

// });
//removeEventListener
//exact same function to be passed .

//andar function define nhi ho skta.
//3 requirements
//same type 
//same target
//same function 

//Phases of an event 
//Capturing phase
//At target phase
//Bubbling phase//deafult

//event objectFit
const content=document.querySelector('#wrapper');
content.addEventListener('click',function(event){
    console.log(event);
});
let links=document.querySelectorAll('a');
let thirdlink=links[2];
thirdlink.addEventListener('click',function(event){
    event.preventDefault();
    console.log('ho gua');
});
