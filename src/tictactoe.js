/*
 * tictactoe
 * https://github.com/tb/tictactoe
 *
 * Copyright (c) 2012 Tomasz Bak
 * Licensed under the MIT license.
 */

(function($) {

  function TicTacToe(container, options) {
    var config = {
        boardClass: 'tictactoe-board'
    };

    var $container = container;
    var $board, currentSymbol, cells, endMessage, indexOfWinCombination;
    var winingCombinations = [
        [1,2,3],[4,5,6],[7,8,9],
        [1,4,7],[2,5,8],[3,6,9],
        [1,5,9],[3,5,7]
    ];

    function init() {
      cells         = {};
      endMessage    = '';
      currentSymbol = 'x';
      indexOfWinCombination = null;
      buildBoard();
      bindEvents();
    }

    function buildBoard() {
        $container.html('');
        $board = $('<table>', {'class':config.boardClass});
        for (var i=0; i < 3; i++) {
            var $tr = $('<tr>');
            $tr.appendTo($board);
            for (var j=0; j < 3; j++) {
                var cellId = j+(i*3)+1;
                var $td = $('<td>', {'data-cell': cellId});
                if ((cellId % 3) !== 0) { $td.addClass('right-border'); }
                if (cellId > 3) { $td.addClass('top-border'); }
                $td.appendTo($tr);
            }
        }
        $board.appendTo($container);
    }


    function switchSymbol() {
        currentSymbol = currentSymbol === 'x' ? 'o' : 'x';
    }

    function showResult(){
        alert(endMessage);
        init();
    }

    function onCellClick() {
        if (write(currentSymbol, $(this).data('cell'))) {
            if (gameIsFinished()) { showResult(); }
            else { switchSymbol(); }
        }
    }

    function bindEvents() {
        $board.find('td').on('click', onCellClick);
    }

    function getBoard() {
      return $board;
    }

    function getCell(cell) {
      return $board.find('[data-cell='+cell+']');
    }

    function write(symbol, cell) {
      if (!cells[cell]) {
          getCell(cell).addClass(symbol+'SelectedField');
          cells[cell] = symbol;
          return true;
      } else {
          return false;
      }
    }

    function gameIsFinished() {
      if (currentSymbolWins()) {
          setEndMessage(currentSymbol + ' is a winner! Yay!');
          highlightWinCombination();
        return true;
      } else if (noEmptyCellsLeft()) {
          setEndMessage('Aww... it\'s a tie');
        return true;
      } else {
        return false;
      }
    }

    function setEndMessage(msg) {
      endMessage = msg;
    }

    function highlightWinCombination() {
        if (indexOfWinCombination) {
            $(winingCombinations[indexOfWinCombination]).each(function(){
                getCell(this).addClass('win-cell');
            });
        }
    }

    function validWinningCombination(index) {
      var checkFunction = function (symbol){ return symbol === currentSymbol; };
      return _.map(winingCombinations[index], function(i){return cells[i];}).every(checkFunction);
    }

    function noEmptyCellsLeft() {
      return _.compact(cells).length === 9;
    }

    function currentSymbolWins() {
      var i = 0;
      while (i < winingCombinations.length) {
        if (validWinningCombination(i)) {
            indexOfWinCombination = i;
            return true;
        }
        i++;
      }
      return false;
    }

    init();

    return {
      config: config,
      getBoard: getBoard
    };
  }

  $.fn.tictactoe = function(options) {
    return this.each(function() {
      $(this).data('tictactoe', new TicTacToe($(this), options));
    });
  };

}(jQuery));
