const winning_combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const board = document.getElementById('board');
const squares = document.getElementsByClassName('square');
const players = ['X', '0'];
let currentPlayer = players[0];
const endMessage = document.createElement('h2');
endMessage.textContent = `X's turn`;
endMessage.style.marginTop = '30px';
endMessage.style.textAlign = 'center';
board.after(endMessage);
let someoneWon = false;

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
        if (someoneWon) return;
        if (squares[i].textContent !== '') return;
        squares[i].textContent = currentPlayer;

        if (checkWin()) {
            someoneWon = true;
            endMessage.textContent = `Game Over !! ${currentPlayer} wins`;
            return;
        } if (checkTie()) {
            someoneWon = true;
            endMessage.textContent = `Game is tied`;
            return;
        }
        currentPlayer = currentPlayer === players[0]
            ? players[1] : players[0];
        endMessage.textContent = `${currentPlayer}'s turn`;
    });
}
function checkWin() {
    for (let i = 0; i < winning_combination.length; i++) {
        const [a, b, c] = winning_combination[i];
        if (
            squares[a].textContent === currentPlayer &&
            squares[b].textContent === currentPlayer &&
            squares[c].textContent === currentPlayer
        ) { return true; }
    }
    return false;
}
function checkTie() {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].textContent === '') return false;
    }
    return true;
}
function restartButton() {
    someoneWon = false;
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
    endMessage.textContent = `X's turn`;
    currentPlayer = players[0];
}
