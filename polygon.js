class Polygon{
    constructor(x,y,w,h){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.circle(50,200,20,options)
        this.width=w
        this.height=h
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        image(polygon_img,50,200,30,30)
    }
      
}