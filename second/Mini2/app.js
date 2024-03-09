const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newgamebtn=document.querySelector(".btn");

let currentplayer;
let gamegrid;

const winningPosition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
//lets create a function to initialise the game.
function initGame(){
    currentplayer="X";
    gamegrid=["","","","","","","","",""];
    //UI pe empty nhi hua
    boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents="all";
        //one thing is missing.
        box.classList=`box box&{index+1}`;
    })
    newgamebtn.classList.remove("active");
    gameInfo.innerText=`Current Player - ${currentplayer}`;

    
}
initGame();

function swapTurn(){
    if(currentplayer==="X"){
        currentplayer='O';
    }
    else{
        currentplayer='X';
    }
    //UI update
    gameInfo.innerText=`current Player -${currentplayer}`;



}

function checkGameOver(){
    
    let answer="";
    winningPosition.forEach((position)=>{
        //all 3 boxes should be non empty and exactly same in value
        if((gamegrid[position[0]] !==""||gamegrid[position[1]] !==""||gamegrid[position[2]] !=="")&& (gamegrid[position[0]]===gamegrid[position[1]]) && (gamegrid[position[1]]===gamegrid[position[2]])){
            //check if winner is X
            if(gamegrid[position[0]]==="X"){
                answer="X";
            }
            else{
                answer="O";
            }

            //now we have a winner
            //disable pointer events
            boxes.forEach((box)=>{
                box.style.pointerEvents="none";
            }) 

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });

    //it means we have a winner
    if(answer!==""){
        gameInfo.innerText= `Winner Player -${answer}`;
        newgamebtn.classList.add("active");
        return;
    }
    //it means we have no winner
    let fillCount=0;
    gamegrid.forEach((box)=>{
        if(box!=="")
        fillCount++;
    });
    //board is filled.
    if(fillCount===9){
        gameInfo.innerText="Game Tied!";
        newgamebtn.classList.add("active");
    }
    
}

function handleClick(index){
    if(gamegrid[index]===""){
        boxes[index].innerText=currentplayer;
        gamegrid[index]=currentplayer;
        boxes[index].style.pointerEvents="none";
        //to swap turn
        swapTurn();
        //to check gameover
        checkGameOver();

    }
}


boxes.forEach((box,index)=>{
 box.addEventListener("click",()=>{
    handleClick(index);
 })
});
newgamebtn.addEventListener("click",initGame);
 