(function($){

    function TicTacToe(container, options) {

        var config = {};
        return {};
    }

    $.fn.tictactoe = function(options){
      return this.each(function(){
          $(this).data('tictactoe', new TicTacToe($(this), options));
      });
    };
}(jQuery));