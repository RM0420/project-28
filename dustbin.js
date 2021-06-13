class Dustbin{
    constructor(x, y, width, height){
        var options = {
            isStatic:true,
            retitution:1,
        }
        this.body = Bodies.rectangle(x,y,width, height, options);
        this.width = width
        this.height = height
        this.color = color(255, 255, 255)
        World.add(world, this.body)
    }
    display(){
        fill(this.color)
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
}