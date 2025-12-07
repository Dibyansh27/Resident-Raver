ig.module(
    'game.entities.levelexit'
)
.requires(
    'impact.entity'
)
.defines(function(){

EntityLevelexit = ig.Entity.extend({
    [cite_start]_wmDrawBox: true, // [cite: 625]
    [cite_start]_wmBoxColor: 'rgba(0, 0, 255, 0.7)', // [cite: 625]
    [cite_start]size: {x: 8, y: 8}, // [cite: 625]
    [cite_start]level: null, // [cite: 627]
    [cite_start]checkAgainst: ig.Entity.TYPE.A, // [cite: 628]
    
    [cite_start]update: function(){}, // [cite: 630]
    
    check: function(other) {
        if(other instanceof EntityPlayer) {
            if(this.level) {
                var levelName = this.level.replace(/^(Level)?(\w)(\w*)/, function(m, l, a, b) {
                    return a.toUpperCase() + b;
                });
                
                ig.game.loadLevelDeferred(ig.global['Level'+levelName]); [cite_start]// [cite: 631]
            }
        }
    }
});

});
