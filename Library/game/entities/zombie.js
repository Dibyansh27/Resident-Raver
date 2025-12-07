ig.module(
    'game.entities.zombie'
)
.requires(
    'impact.entity'
)
.defines(function(){

EntityZombie = ig.Entity.extend({
    [cite_start]animSheet: new ig.AnimationSheet('media/zombie.png', 16, 16), // [cite: 304]
    [cite_start]size: {x: 8, y:14}, // [cite: 304]
    [cite_start]offset: {x: 4, y: 2}, // [cite: 304]
    [cite_start]maxVel: {x: 100, y: 100}, // [cite: 304]
    [cite_start]flip: false, // [cite: 304]
    
    [cite_start]friction: {x: 150, y: 0}, // [cite: 322]
    [cite_start]speed: 14, // [cite: 322]
    
    [cite_start]type: ig.Entity.TYPE.B, // [cite: 377]
    [cite_start]checkAgainst: ig.Entity.TYPE.A, // [cite: 377]
    [cite_start]collides: ig.Entity.COLLIDES.PASSIVE, // [cite: 377]
    
    init: function(x, y, settings) {
        this.parent(x, y, settings);
        this.addAnim('walk', .07, [0,1,2,3,4,5]); [cite_start]// [cite: 306]
    },
    
    update: function() {
        // Near an edge?
        if(!ig.game.collisionMap.getTile(
            this.pos.x + (this.flip ? +4 : this.size.x -4),
            this.pos.y + this.size.y+1
        )) {
            this.flip = !this.flip;
        }
        
        var xdir = this.flip ? -1 : 1;
        this.vel.x = this.speed * xdir;
        this.currentAnim.flip.x = this.flip; [cite_start]// [cite: 317]
        
        this.parent();
    },
    
    handleMovementTrace: function(res) {
        this.parent(res);
        // Collision with a wall? return!
        if(res.collision.x) {
            this.flip = !this.flip; [cite_start]// [cite: 328]
        }
    },
    
    check: function(other) {
        other.receiveDamage(10, this); [cite_start]// [cite: 385]
    },
    
    receiveDamage: function(value) {
        this.parent(value);
        if(this.health > 0)
            ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y, {particles: 2, colorOffset: 1}); [cite_start]// [cite: 577]
    },
    
    kill: function(){
        this.parent();
        ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y, {colorOffset: 1}); [cite_start]// [cite: 583]
    }
});

});
