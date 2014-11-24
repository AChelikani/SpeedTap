Crafty.scene('Loading', function(){

    Crafty.e('2D, DOM, Text')
    .text('Loading...')
    .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
    .css($text_css);

    Crafty.load(['assets/ocean.png'] , function(){
        
        Crafty.sprite(400, 'assets/ocean.png', {
            spr_bg: [0, 0]
        });
        
        Crafty.scene('Game');

    });

});

Crafty.scene('Game', function() {
    
    Crafty.e('BG').at(0, 0);

    Crafty.viewport.init(400, 400, 'viewport'); 
});