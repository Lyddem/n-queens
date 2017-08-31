/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  var board = new Board({n: n});

  if (n === 1 || n === 0) {
    return 1
  };

  var recurse = function (currentRow, board) {
      //move previous queens
    for (var i = 0; i < n; i++) {
      if (i > 0 && board.rows()[currentRow][i - 1] === 1) {
         board.togglePiece(currentRow, i - 1);
      }
      board.togglePiece(currentRow, i);
      if (board.hasColConflictAt(i)) {
        board.togglePiece(currentRow, i);
        if (i === n - 1) {
         return;
        }
        continue;
      }
      if (currentRow === n - 1) {
        solutionCount++;
        continue;
      }
      recurse(currentRow + 1, board);
    }
    board.togglePiece(currentRow, n - 1);
    return;
  }

  recurse(0, board)

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  if (n === 1 || n === 0) {
    return 1
  };
  if (n === 2 || n === 3) {
    return 0;
  }
  var recurse = function (currentRow, board) {
      //move previous queens
    for (var i = 0; i < n; i++) {
      if (i > 0 && board.rows()[currentRow][i - 1] === 1) {
         board.togglePiece(currentRow, i - 1);
      }
      board.togglePiece(currentRow, i);
      if (board.hasAnyQueenConflictsOn(currentRow, i)) {
        board.togglePiece(currentRow, i);
        if (i === n - 1) { //unable to place queen on currentRow
         return;
        }
        continue;
      }
      if (currentRow === n - 1) { //found a solution
        solutionCount++;
        continue;
      }
      recurse(currentRow + 1, board);
    }
    board.togglePiece(currentRow, n - 1);
    return;
  }

  recurse(0, board)
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
