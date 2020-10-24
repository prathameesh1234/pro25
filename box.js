class box {
constructor(x,y,width,height){
    var options = {
        isStatic:true,
        'restitution':0.24,
        'friction':1.0,
        'density':1.0
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/dustbingreen.png");
    
    World.add(world, this.body);

}

display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    //translate(pos.x, pos.y);
    //rotate(angle);
    imageMode(CENTER);
    strokeWeight(4);
    stroke("green")
    fill(255);
    image(this.image,pos.x,pos.y, this.width, this.height + 100);
    pop();
}

};