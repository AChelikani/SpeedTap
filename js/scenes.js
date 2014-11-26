Crafty.scene('Loading', function(){

    Crafty.e('2D, DOM, Text')
    .text('Loading...')
    .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
    .css($text_css);

    Crafty.load(['assets/ocean.png',
                 'assets/fish.png'] , function(){

        Crafty.sprite(75, 'assets/fish.png', {
            spr_box: [0, 0]
        });

        Crafty.sprite(1500, 'assets/ocean.png', {
            spr_bg: [0, 0]
        });

        Crafty.scene('Game');

    });

});

Crafty.scene('Game', function() {

    Crafty.e('BG').at(0, 0);

    var fish = Crafty.e('Fish').at(7, 7);
});