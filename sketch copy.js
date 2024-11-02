let font; 
let points = [];
let angle = 0
// ==================================================
function preload(){ 
    font = loadFont("fonts/SixtyfourConvergence-Regular.ttf")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("#8ecae6")
    rectMode(CENTER)
    angleMode(DEGREES)
    points = font.textToPoints("ALun", width/2, height/2, 150, {
        sampleFactor:0.1
      }); 
      for (let i=0; i<points.length; i++) { 
        noStroke()
        ellipse(points[i].x,points[i].y,15)
     } 
  }
  
  function draw() {
    background("#8ecae6")
    // for (let i = 0; i < points.length; i++) {
    //   noStroke();
    //   ellipse(points[i].x, points[i].y, 15);}
        for(let y =0;y<height;y = y+100){
        for(let x =0;x<width;x = x+100){
        push() 
        translate(x,y)
        stroke(255)
        for(let i=0;i<10;i = i+1){
          let r = map(sin(frameCount),-1,1,50,255)
          let g = map(cos(frameCount/2),-1,1,50,255)
          let b = map(sin(frameCount/4),-1,1,50,255)
          stroke(r,g,b)
          rotate(angle)
          rect(0,0,100-i*3,100-i*3,20)
          angle = sin(frameCount) *10
        }
        pop();
        for (let i = 0; i < points.length; i++) {
          noStroke();
          ellipse(points[i].x, points[i].y, 15);}
    }
  }
}