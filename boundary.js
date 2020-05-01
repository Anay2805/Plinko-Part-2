function Boundary(x,y,w,h) {

      var options = {
        isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h, options);
      this.w = w; 
      this.h = h; 
      World.add(world, this.body);
}  
    Boundary.prototype.show = function(){
      fill(200);
      stroke(255);
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      translate(pos.x, pos.y)
     rect(0, 0, this.w, this.h);
     pop();
    };