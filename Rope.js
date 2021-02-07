class Rope{
    constructor(bodyA, bodyB, x){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:x, y:0}
        }

        this.rope = Constraint.create(options)
        World.add(world, this.rope)
        this.x = x
    }

    display(){
        line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.bodyB.position.x+this.x, this.rope.bodyB.position.y)
    }
}