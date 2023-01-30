
var xoff = 0;
var yoff = 0;
var start = 0;
var inc = 0.01;
var layers = 4;
var radius = 0;
var xvals = 600;

function setup(){
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
  colorMode(HSB);
  background(0,0,0);
  radius = min(windowWidth,windowHeight)*0.5;
}

function draw(){
  background(0,0,0,0.1);
  noFill();
  xoff = start;
  yoff = 30;
  inc = map(sin(frameCount/5000),-1,1,0.002,0.02)
  translate(width/2,height/2);
  for(var t=0;t<layers;t++){
    rotate(sin(frameCount/500)*TWO_PI);
    yoff += sin(frameCount/100)*30;
    stroke(9*t+20,255,255,1);
    strokeWeight(sin(frameCount/999)*2+3);
    beginShape();
    for(var x=0;x<xvals;x++){
      y = noise(xoff)*radius;
      vertex(sin(x/30)*y,cos(x/30)*y+yoff);
      xoff=xoff + (x<xvals/2?inc:-inc);
    }
    endShape(CLOSE);
  }
  start+=inc;
  yoff+=0.01;
}