
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var particles = [];
var p;
var bounds = [];
var plinkos = [];
var cols = 11;
var rows = 10;
 
function setup() {
    var canvas = createCanvas(600, 750);
    engine = Engine.create();
    world = engine.world;
    newParticles();
    var spacing = width / cols;
    for (var i = 0; i < rows; i++) {
       for (var j = 0; j < cols + 1; j++) {
        var x = i* spacing;

        if (j % 2 == 0) {
           x += spacing/2 
        }

        var y = spacing + j*spacing;
        var p = new Plinko(x, y, 4);
        plinkos.push(p)
       }
    }
    var b = new Boundary(width/2, height + 50, width, 100)
    bounds.push(b)
    for (var j = 0; j < cols + 1; j++) {
        var x = j*spacing - 5;
        var h = 75;
        var w = 10;
        var y = height - h/2;
        var b = new Boundary(x, y, w, h)
        bounds.push(b);
    }
}
 
function newParticles(){
     var p = new Particle(random(100, 300), 0, 10)
     particles.push(p);
}
 
function draw() {
    if(frameCount % 60 == 0){
        newParticles();
    }
    background(51);
    Engine.update(engine);

    for (var i = 0; i < particles.length; i++) {
        particles[i].show();
        if (particles[i].offScreen()) {
            World.add(world, particles[i].body)
            particles.splice(i, 1);
            i--;
        }
    }

     for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].show();
    }
    for (var k = 0; k < bounds.length; k++) {
        bounds[k].show();
    }
   

}
 