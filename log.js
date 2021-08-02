class Log{
    constructor(x,y,height,angle){
var option = {
    'restitution':0.8,
        'friction':1,
        'density':1.0
}
this.body = Bodies.rectangle(x,y,20,height,option)
this.width = 20
this.height = height
Matter.Body.setAngle(this.body,angle)
this.angle = angle

World.add(world,this.body)
    }
display(){
    var p = this.body.position
    push()
    rectMode(CENTER)
    fill("yellow")
translate(p.x,p.y)
rotate(this.body.angle)
rect(0,0,this.width,this.height)
    pop()
}
}