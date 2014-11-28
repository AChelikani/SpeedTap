/* Features that need to be added:
V. 1: Enemies disappear on click, max number of enemies
V. 2: Scoring, losing + winning conditions
V. 3: Losing + winning screens, death animations
V. 4: Starting screen, difficulty settings
V. 5: Overall UI revamp


*/

Game = {

    map_grid: {
        width:  41,
        height: 21,
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

        Crafty.init(Game.width(), Game.height());

        Crafty.scene('Loading');

    }

}

$text_css = { 'font-size': '24px', 'font-family': 'Arial', 'color': 'white', 'text-align': 'center' }