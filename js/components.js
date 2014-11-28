// Initializes Grid object 
Crafty.c('Grid', {
    init: function() {

        this.attr({

            w: Game.map_grid.tile.width,
            h: Game.map_grid.tile.height

        });

    },

    at: function(x, y) {

        if (x === undefined && y === undefined) {

            return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }

        } else {

            this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });

            return this;

        }

    }

});

// Initializes Actor object
Crafty.c('Actor', {

    init: function() {
        this.requires('2D, Canvas, Grid');
    }

});

// Initializes BG object
Crafty.c('BG', {

    init: function() {
        this.requires('Actor, spr_bg');
    }

});

// Initializes Fish object
Crafty.c('Fish', {

    init: function() {

        this.nOverlap = -5;
        this.requires('Actor, Collision, Solid, Mouse, spr_box');

        // Binding mouse click
        this.bind('Click', function(e) {
            this.destroy(); // Enemy disappears
        });
        
    }
});
