class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.r = radius
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("sprites/paper.png")
        World.add(world, this.body);
    }
    display(){
        imageMode(RADIUS)
        image(this.image, this.body.position.x, this.body.position.y, this.r, this.r)
    }
}