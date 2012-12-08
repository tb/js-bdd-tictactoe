describe('Board',function(){

  var $container, $board, $tictactoe;

  beforeEach(function() {
    loadFixtures('board1.html');

    $container = $('.board1').tictactoe({
      onFinish: function(winner) {
        alert('Good job' + winner);
      }
    });
    $tictactoe = $container.data('tictactoe');
    $board = $tictactoe.getBoard();

    _.extend($board, {
      click: function() {
        _.each(arguments, function(index){
          $board.find('[data-cell='+index+']').trigger('click');
        });
      }
    });
  });

  it('should be table with have 9 cells',function(){
    expect($board.find('[data-cell]').length).toBe(9);
  });

  it('should have data-tictactoe',function(){
    expect($container).toHaveData('tictactoe');
  });

  it('should write symbol to board',function(){
    $board.click(1);
    expect($board.find('[data-cell=1]')).toHaveClass('xSelectedField');
  });

  it('should display winner after finish',function(){
    spyOn(window, 'alert');
    $board.click(1, 4, 2, 5, 3, 6, 7);
    expect(window.alert).toHaveBeenCalledWith('Good job x!"');
  });

  it('should not display winner if game is not finish',function(){
    spyOn(window, 'alert');
    $board.click(1, 2, 3, 4, 5, 6);
    expect(window.alert).wasNotCalled();
  });
});
