//document.addEventListener('DOMContentLoaded', startGame)
var difficulty = 'medium'

// Define your `board` object here!
var board = { cells: [] }

function createBoard(diff) {
  switch (diff) {
    case 'easy': populateBoard(3, 9); break;
    case 'medium': populateBoard(4, 16); break;
    case 'hard': populateBoard(5, 25); break;
    case 'extreme': populateBoard(6, 36); break;
  }
  setMines()
  console.log(board.cells)
}

function populateBoard(rows, cells) {
  for (let i = 0, colCount = 0, rowCount = 0; i < cells; i++, rowCount++, colCount = Math.floor(i / rows)) {
    board.cells.push({ row: rowCount, col: colCount, isMine: true, hidden: true })
    if (rowCount == rows - 1) {
      rowCount = -1
    }
  }
}

function setMines() {
  for (element of board.cells) {
    element.isMine = Math.random() < .3
  }
}


function startGame() {
  // Don't remove this function call: it makes the game work!
  createBoard(difficulty)
  for (cell of board.cells) {
    cell.surroundingMines = countSurroundingMines(cell)
  }
  lib.initBoard()
  addHoverAudio()
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {

  let win

  for (cell of board.cells) {
    if ((cell.isMine == false && cell.hidden == false) || (cell.isMine == true && cell.isMarked == true)) {
      win = true
    }
    else {
      return
    }
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)

  if (win == true) {
    lib.displayMessage('You win!')
    playAudio('win')
    document.getElementsByClassName('board')[0].setAttribute('class', 'board winner')
    document.getElementById('winpictureDisplay').setAttribute('class', 'winner')
    document.getElementById('winpictureDisplay').setAttribute('style', document.getElementsByClassName('board')[0].getAttribute('style'))
  }

}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  let surroundingCellsArray = lib.getSurroundingCells(cell.row, cell.col)
  let count = 0
  for (element of surroundingCellsArray) {
    if (element.isMine == true) {
      ++count
    }
  }
  return count
}

// This is the Function used to set the value of the Boards Difficulty

function setDifficulty(val) {
  difficulty = val
  console.log(difficulty)
  board.cells = []
  emptyDOMGrid()
  startGame()
}

function emptyDOMGrid() {
  var boardNode = document.getElementsByClassName('board')[0]
  while (boardNode.firstChild) {
    boardNode.removeChild(boardNode.firstChild);
  }
}

// function to remove the wining picture

function removeWinPic() {
  document.getElementsByClassName('board')[0].setAttribute('class', 'board')
  document.getElementById('winpictureDisplay').setAttribute('class', '')
  document.getElementById('winpictureDisplay').setAttribute('style', '')
}

// This function adds the Audio Classes to the cells

function addHoverAudio() {
  var boardNode = document.getElementsByClassName('board')[0]
  console.log(boardNode)
  for (let i = 0; i < boardNode.childNodes.length; i++) {
    boardNode.childNodes[i].setAttribute("onmouseenter", `playAudio("hover${i}")`)
    boardNode.insertAdjacentHTML("afterend", `<audio id='hover${i}' preload='auto'><source src='audio/hover2.mp3'><source src='audio/hover2.ogg'>Your browser isn't invited for super fun time.</audio>`)
    boardNode.childNodes[i].setAttribute("oncontextmenu", `playAudio("mark")`)
    if (boardNode.childNodes[i].getAttribute('class').includes('mine') ? true : false) {
      boardNode.childNodes[i].setAttribute("onclick", `playAudio("loose")`)
    }
    else {
      boardNode.childNodes[i].setAttribute("onclick", `playAudio("open")`)
    }
  }
}

function playAudio(str) {
  var x = document.getElementById(str);
  x.play();
}
