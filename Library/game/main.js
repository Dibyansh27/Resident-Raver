ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'game.levels.dorm1', // Load the first level
    'game.levels.dorm2'  // Load the second level (required for level exits) [cite: 653]
)
.defines(function(){

MyGame = ig.Game.extend({
    
    // Physics properties
    gravity: 300, [cite: 295]

    init: function() {
        // Bind keys for movement and actions [cite: 235, 477]
        ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
        ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
        ig.input.bind(ig.KEY.X, 'jump');
        ig.input.bind(ig.KEY.C, 'shoot');
        ig.input.bind(ig.KEY.TAB, 'switch'); // For switching weapons

        // Load the initial level [cite: 231]
        this.loadLevel(LevelDorm1);
    },

    update: function() {
        // Screen/Camera follows the player [cite: 606]
        var player = this.getEntitiesByType(EntityPlayer)[0];
        if(player) {
            this.screen.x = player.pos.x - ig.system.width/2;
            this.screen.y = player.pos.y - ig.system.height/2;
        }

        // Update all entities and BackgroundMaps
        this.parent();
    },

    draw: function() {
        // Draw all entities and backgroundMaps
        this.parent();
    }
});

// Start the Game with 60fps, a resolution of 320x240, scaled up by a factor of 2 [cite: 224]
ig.main('#canvas', MyGame, 60, 320, 240, 2);

});