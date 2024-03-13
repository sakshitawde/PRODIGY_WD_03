console.log("Welcome to tic tac toe")
let turn="X"
let isgameover = false;

//function to change turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}


//function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2,-1,5,0], 
        [3,4,5,-1,15,0],
        [6,7,8,-1,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,4,18,45], 
        [2,4,6,-1,15,135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector(".line").style.width="28vw"
            document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })


}

//game logic
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(! isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for"+ turn;

            }
            



        }

    })

})

//add onclick listener to reseyt button
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText=" ";
    });
    turn = "X"
    isgameover=false
    document.querySelector(".line").style.width="0"
    document.getElementsByClassName("info")[0].innerText=" Turn for " + turn;
})