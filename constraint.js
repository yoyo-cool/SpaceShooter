class connect{
    constructor(a,b){
        var options = {
            bodyA: a,
            pointB: b,
            stiffness: 0,
            length: 1
        }
        this.pointB = b
        this.SlingShot= Constraint.create(options);
        World.add(world, this.SlingShot);
        this.pointB=b
    }

      display(){
          if(this.SlingShot.bodyA){
            var pointA = this.SlingShot.bodyA.position;
            var pointB = this.SlingShot.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
          }
    }
}



