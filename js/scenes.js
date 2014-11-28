// Loading Scren
Crafty.scene('Loading', function(){

    Crafty.e('2D, DOM, Text')
    .text('Loading...')
    .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
    .css($text_css);

    // Loads assets from assets directory
    Crafty.load(['assets/ocean.png',
                 'assets/fish.png'] , function(){

        Crafty.sprite(75, 'assets/fish.png', {
            spr_box: [0, 0]
        });

        Crafty.sprite(1500, 'assets/ocean.png', {
            spr_bg: [0, 0]
        });

        // Moves to next scene
        Crafty.scene('Game');

    });

});

function spawnEnemy() {
    var randX = Crafty.math.randomInt(1,40);
    var randY = Crafty.math.randomInt(1,20);
    Crafty.e("Fish").at(randX, randY);
    setTimeout(spawnEnemy, 2000);
}


// Main scene in which game runs
Crafty.scene('Game', function() {

    Crafty.e('BG').at(0, 0);

    var totalEnemies = 0;
    spawnEnemy();

});