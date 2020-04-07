var numRookCaptures = function(board) {
   let loc = {}
   for (let b = 0; b < board.length; b++) {
       let line = board[b]
       for(var l = 0; l < line.length; l++) {
           if(line[l] === 'R') {
               loc = {l, b}
               break
           }
       }
   }
   // 数组四个方向处理
   let x = [0, 1, 0, -1]
   let y = [1, 0, -1, 0]
   let num = 0
   for(var c = 0; c < x.length; c++) {
       for (var b = 0; b < board.length; b++) {
           let tx = loc.b + x[c] * b
           let ty = loc.l + y[c] * b
           if (tx < 0 || ty < 0 || tx > board.length - 1 || ty > board.length -1 || board[tx][ty] === 'B') break
           if (board[tx][ty] === 'p') {
               num ++;
               break
           }
           
       }
   }
   return num
};