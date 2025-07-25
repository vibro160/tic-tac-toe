console.log("Welcome to Tic Tae Toe")
let music=new Audio("music.mp3")
let audioturn=new Audio("ting.mp3")
let gameoversound=new Audio("gameover.mp3")
let turn="X"
let gameover=false;
//function to change the turn
const changeTurn = ()=>{
 
  return turn ==="X"? "0": "X"
}

//function to check for a  win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
 let wins=[
   [0, 1, 2, 5, 5, 0],   //winning indexes in the box
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
 ]
 //logic to check wining condition
 wins.forEach(e=>{
  if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!=="")){
    document.querySelector('.info').innerText=boxtext[e[0]].innerText+" won "
    gameover=true;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="250px";
     document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
     document.querySelector(".line").style.width = "20vw";
  }

 })
}
//want to play the music?uncomment the below line
//music.play();-->uncomment this for music
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
           
            }
        }
    })
})
//add on click to reset 
reset.addEventListener('click',(e)=>{
  let boxtext=document.querySelectorAll('.boxtext');
  Array.from(boxtext).forEach(element=>{
    element.innerText=" "
  })
  turn="X"
   gameover=false
           document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn; 
             document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0";
document.querySelector(".line").style.width = "0vw";
})




