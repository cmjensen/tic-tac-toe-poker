// function name(param){
//     do something
// }

//move = board

const board = [];

function play(clickedId){
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);

    if(playerSpan.innerText === "X") {
        playerSpan.innerText = "O"; /*O player */
        clickedElement.innerText = "X";
        board[clickedId] = "X";
    } else {
        playerSpan.innerText = "X"; /*X player */
        clickedElement.innerText = "O";
        board[clickedId] = "O";
    }  
    console.log(board);

//BOX VARIABLES

    const topLeft = board[0]
    const topCenter = board[1]
    const topRight = board[2]
    const middleLeft = board[3]
    const middleCenter = board[4]
    const middleRight = board[5]
    const bottomLeft = board[6]
    const bottomCenter = board[7]
    const bottomRight = board[8]

//WINNING CONDITIONS
    if(topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} wins!`);
        return;
    } //good

    if(topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} wins!`);
        return;
    } //good

    if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} wins!`);
        return;
    } //good

    if(topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} wins!`);
        return;
    } //good

    if(topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} wins!`);
        return;
    } //good

    if(middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} wins!`);
        return; //good
    }

    if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} wins!`)
    } //good

    if(bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${topRight} wins!`);
        return;
    } //good


    //BOARD FULL
    let boardFull = true;

    for(let i=0; i <= 8; i++) {
        if(board[i] === undefined) {
            boardFull = false;
        }
    }

    if(boardFull === true) {
        alert("Cat's game!")
    }
}




