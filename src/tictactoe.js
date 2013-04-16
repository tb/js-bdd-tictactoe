(function($){

  function TicTacToe(container, options) {

    var config = {
      boardClass: 'tictactoe-board'
    };
    var $container = container;
    var $board, cells, currentSymbol;

    function init() {
      cells = {};
      currentSymbol = 'x';
      buildBoard();
      bindEvents();
    }

    function getBoard(){
      return $board;
    }

    function buildBoard(){
      $container.html('');
      $board = $('<table>', {'class': config.boardClass});
      for(var i=0; i < 3; i++) {
        var $tr = $('<tr>');
        for (var j=0; j < 3; j++) {
          var cellId = j+(i*3)+1;
          var $cell = $('<td>', {'data-cell': cellId});
          if ((cellId % 3) !== 0) {$cell.addClass('right-border');}
          if (cellId > 3) {$cell.addClass('top-border');}
          $cell.appendTo($tr);
        }
        $tr.appendTo($board);
      }
      $board.appendTo($container);
    }

    function bindEvents(){
      $board.find('[data-cell]').on('click', onCellClick);
    }

    function onCellClick(e) {
      $(this).addClass(currentSymbol+'SelectedField');
      //write(currentSymbol, $(this).data('cell'))
    }

    function write(symbol, cellIndex) {
      if (true) {

        return true;
      } else {
        return false;
      }
    }

    init();

    return {
      getBoard: getBoard

    };
  }

  $.fn.tictactoe = function(options){
    return this.each(function(){
      $(this).data('tictactoe', new TicTacToe($(this), options));
    });
  };

}(jQuery));