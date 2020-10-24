class Paper {
    constructor(x,y,r){
        var options = {
        isStatic:false,
            'restitution':0.3   ,
            'friction':1.0,
            'density':1.0
        }
    
        this.body = Bodies.circle(x, y,r, options);
       this.radius = r;
        
        World.add(world, this.body);
        this.image = loadImage("images/paper.png");
    
    }
    
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
     //   translate(pos.x, pos.y);
       // rotate(angle);
       imageMode(CENTER);
        strokeWeight(4);
        stroke("green")
        fill(255);
        image(this.image,pos.x,pos.y, this.radius,this.radius);
        pop();
    }
    
    };