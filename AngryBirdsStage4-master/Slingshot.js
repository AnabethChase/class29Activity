class SlingShot{
    constructor(bodyA, pointB){
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,250,30)
        image(this.sling2,220,30)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x-20, pointA.y+10, pointB.x+75, pointB.y-30);
            line(pointA.x-20,pointA.y+10,pointB.x+25,pointB.y-30)
            image(this.sling3,pointA.x-30,pointA.y-10,15,30)
        }
    }
    
}
//pointb = 275,60
//bird 100,100
//pointc 225,70
//plank 180,125