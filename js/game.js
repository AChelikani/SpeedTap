Game = {

    map_grid: {
        width:  20,
        height: 20,
        tile: {
            width:  32,
            height: 32
        }
    },

    width: function() {
        return this.map_grid.width * this.map_grid.tile.width;
    },

    height: function() {
        return this.map_grid.height * this.map_grid.tile.height;
    },

    start: function() {

        Crafty.init(Game.width(), Game.height(), 'viewport');
        Crafty.background('rgb(150, 150, 150)');

        Crafty.scene('Loading');

    }

}

$text_css = { 'font-size': '24px', 'font-family': 'Arial', 'color': 'white', 'text-align': 'center' }