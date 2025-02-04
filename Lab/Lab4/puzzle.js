let boardSize = 4;
let tiles = [];
let emptyTile = { row: boardSize - 1, col: boardSize - 1 };

function initializeBoard() {
    const sizeSelect = document.querySelector('input[name="size"]:checked');
    boardSize = parseInt(sizeSelect.value);
    tiles = [];
    emptyTile = { row: boardSize - 1, col: boardSize - 1 };

    const board = document.getElementById("board");
    board.style.gridTemplateColumns = `repeat(${boardSize}, 60px)`;
    board.innerHTML = "";

    document.getElementById("status").textContent = "";

    generateSolvableTiles();

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const tile = document.createElement("div");
            tile.className = `tile ${tiles[i][j] === "" ? "empty" : ""}`;
            tile.textContent = tiles[i][j];
            tile.addEventListener("click", () => moveTile(i, j));
            board.appendChild(tile);
        }
    }

    renderBoard();
}

function generateSolvableTiles() {
    const numbers = Array.from({ length: boardSize * boardSize - 1 }, (_, i) => i + 1);
    numbers.push("");
    do {
        shuffleArray(numbers);
    } while (!isSolvable(numbers));

    let index = 0;
    for (let i = 0; i < boardSize; i++) {
        tiles[i] = [];
        for (let j = 0; j < boardSize; j++) {
            tiles[i][j] = numbers[index++];
            if (tiles[i][j] === "") {
                emptyTile = { row: i, col: j };
            }
        }
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function isSolvable(numbers) {
    const flatTiles = numbers.filter((n) => n !== "");
    let inversions = 0;

    for (let i = 0; i < flatTiles.length - 1; i++) {
        for (let j = i + 1; j < flatTiles.length; j++) {
            if (flatTiles[i] > flatTiles[j]) inversions++;
        }
    }

    if (boardSize % 2 === 1) {
        return inversions % 2 === 0;
    } else {
        const emptyRowFromBottom = boardSize - emptyTile.row;
        return (inversions + emptyRowFromBottom) % 2 === 0;
    }
}

function moveTile(row, col, checkWin = true) {
    if (!isValidMove(row, col)) return;

    tiles[emptyTile.row][emptyTile.col] = tiles[row][col];
    tiles[row][col] = "";

    emptyTile = { row, col };

    renderBoard();
    if (checkWin && isWinningState()) {
        document.getElementById("status").textContent = "Congratulations! You solved the puzzle!";
    }
}

function isValidMove(row, col) {
    const rowDiff = Math.abs(row - emptyTile.row);
    const colDiff = Math.abs(col - emptyTile.col);
    return rowDiff + colDiff === 1;
}

function isWinningState() {
    let count = 1;
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (i === boardSize - 1 && j === boardSize - 1) return true;
            if (tiles[i][j] !== count) return false;
            count++;
        }
    }
    return true;
}

function renderBoard() {
    const board = document.getElementById("board");
    const tileElements = board.children;
    let index = 0;

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const tile = tileElements[index++];
            tile.textContent = tiles[i][j];
            tile.className = `tile ${tiles[i][j] === "" ? "empty" : ""}`;
        }
    }
}

document.getElementById("choose").addEventListener("click", initializeBoard);

initializeBoard();
