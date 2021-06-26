/* eslint-disable no-plusplus */
// TODO: write code here
class GameBoard {
  constructor(size) {
    this.size = size * 2;
    this.active = 0;
  }

  drawGameBoard() {
    const gameBoard = document.querySelector('.board');
    for (let i = 0; i < this.size; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.id = `cell${i}`;
      gameBoard.appendChild(cell);
    }
    this.getRandom();
  }

  getRandom() {
    setInterval(() => {
      const random = Math.floor((Math.random() * this.size * 2));
      const cells = Array.from(document.querySelectorAll('.cell'));
      const availableCells = cells.filter((cell) => cell.id !== this.active);

      for (const cell of cells) {
        if (cell.classList.contains('goblin')) {
          cell.classList.remove('goblin');
        }
      }

      availableCells[random].classList.add('goblin');
    }, 1000);
  }
}

const board = new GameBoard(4);
board.drawGameBoard();
