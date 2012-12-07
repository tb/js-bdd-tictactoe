describe('Game',function(){

  var $container, $board, $tictactoe, myWinner;

  beforeEach(function() {
    loadFixtures('board1.html');

    $container = $('.board1').tictactoe({
      onFinish: function(winner) {
        myWinner = winner;
      }
    });

    $tictactoe = $container.data('tictactoe');
    $board = $tictactoe.getBoard();
  });

  it('should be table with have 9 cells',function(){
    expect($board).toBe('table');
    expect($board.find('[data-cell]').length).toBe(9);
  });

  it('should have data-tictactoe',function(){
    expect($container).toHaveData('tictactoe');
  });

  it('should write symbol to board',function(){
    $tictactoe.write('x',1);
    expect($board.find('[data-cell=1]')).toHaveHtml('x');
  });

  it('should display "Play again?" after finish',function(){
    spyOn(window, 'alert');
    $tictactoe.write('x',1);
    $tictactoe.write('x',2);
    $tictactoe.write('x',3);
    expect(window.alert).toHaveBeenCalledWith('Play again?');
    expect(myWinner).toBe('x');
  });

  it('should not display "Play again?" if game is not finish',function(){
    spyOn(window, 'alert');
    $tictactoe.write('x',1);
    $tictactoe.write('o',2);
    $tictactoe.write('x',3);
    expect(window.alert).wasNotCalled();
//    expect(myWinner).toBe(null);
  });

});
