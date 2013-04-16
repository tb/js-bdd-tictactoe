describe('Board',function(){

  var $board, $tictactoe;

  beforeEach(function() {
    loadFixtures('board1.html');

    $tictactoe = $('.board1').tictactoe({}).data('tictactoe');
    $board = $tictactoe.getBoard();

    _.extend($board, {
      click: function() {
        _.each(arguments, function(index){
          $board.find('[data-cell='+index+']').trigger('click');
        });
      },
      check: function(index, symbol){
        return $board.find('[data-cell='+index+']').hasClass(symbol+'SelectedField');
      }
    });
  });

  it('should be table with 9 cells', function(){
    expect($board.find('[data-cell]').length).toBe(9);
  });

  it('should be able to put symbol to board', function(){
    $board.click(1);
    expect($board.check(1, 'x')).toBe(true);
  });

  it('should be able to put symbol to board', function(){
    $board.click(1,2);
    expect($board.check(1, 'x')).toBe(true);
    expect($board.check(2, 'o')).toBe(true);
  });

});
