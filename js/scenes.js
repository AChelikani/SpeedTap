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


// Main scene in which game runs
Crafty.scene('Game', function() {
    var MAX_ENEMIES = 3;
    var SPAWN_TIME = 2000; // In milliseconds

    // Spawns an enemy in a random position every 2 seconds
    function spawnEnemy() {
        var randX = Crafty.math.randomInt(1,40);
        var randY = Crafty.math.randomInt(1,20);
        Crafty.e("Fish").at(randX, randY);
        setTimeout(spawnEnemy, SPAWN_TIME);
    }

    Crafty.e('BG').at(0, 0);

    spawnEnemy();

});
