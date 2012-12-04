/*
 * tictactoe
 * https://github.com/tb/tictactoe
 *
 * Copyright (c) 2012 Tomasz Bak
 * Licensed under the MIT license.
 */

(function($) {

  function TicTacToe(board, options) {
    var $board = board,
        cells = {};

    function getCell(cell) {
      return $board.find('[data-cell='+cell+']');
    }

    function write(symbol, cell) {
      getCell(cell).html(symbol);
      cells[cell] = symbol;
      checkFinished();
    }

    function checkFinished() {
      if (_.values(cells).join(',') === 'x,x,x') {
        if (options.onFinish) {
          options.onFinish('x');
        }
        alert('Play again?');
      }
    }

    return {
      write: write
    };
  }

  $.fn.tictactoe = function(options) {
    return this.each(function() {
      $(this).data('tictactoe', new TicTacToe($(this), options));
    });
  };

}(jQuery));
