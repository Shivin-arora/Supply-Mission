class Box {

    constructor(x,y,w,h){
        var property={
            isStatic: true,
            restitution: 0.8
            
        }
this.body =Bodies.rectangle(x,y,w,h,property);
this.width=w;
this.height=h;
World.add(world,this.body);

    }
display(){

    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    fill("red");
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    
}


}