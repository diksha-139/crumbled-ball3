class Ball {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image= loadImage("paper.png")
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
    
      imageMode(CENTER);
     
      image (this.image ,pos.x, pos.y, this.radius*2, this.radius*2);
      pop();
    }
  };
  