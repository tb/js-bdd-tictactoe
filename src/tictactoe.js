/*
 * tictactoe
 * https://github.com/tb/tictactoe
 *
 * Copyright (c) 2012 Tomasz Bak
 * Licensed under the MIT license.
 */

(function($) {

  function TicTacToe(container, options) {
    var $container = container,
        $board = null,
        cells = {};

    function buildBoard() {
        $board = $('<table>');
        for (var i=0; i < 3; i++) {
            var $tr = $('<tr>');
            $tr.appendTo($board);
            for (var j=0; j < 3; j++) {
                var $td = $('<td>', {'data-cell': j+(i*3)+1});
                $td.appendTo($tr);
            }
        }
        $board.appendTo($container);
    }

    function getBoard() {
      return $board;
    }

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

    buildBoard();

    return {
      write: write,
      getBoard: getBoard
    };
  }

  $.fn.tictactoe = function(options) {
    return this.each(function() {
      $(this).data('tictactoe', new TicTacToe($(this), options));
    });
  };

}(jQuery));
