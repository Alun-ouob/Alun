let font;  //載入字型文字
let points = [];  //轉成點狀文字
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    font = loadFont("fonts/SixtyfourConvergence-Regular.ttf")
}

let angle = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  rectMode(CENTER)
  angleMode(DEGREES)
  // frameRate(1000) //每秒進入draw()函數的指令
  points = font.textToPoints("Alun", width/2-300, height/2, 150, {
    sampleFactor:0.07
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
  for (let i=0; i<points.length; i++) { 
    noStroke()
    ellipse(points[i].x,points[i].y,15)
  }
}
function draw() {
  background(0);
    for(let y =0;y<height;y = y+100){
    for(let x =0;x<width;x = x+100){
      push() 
      translate(x,y)
      stroke(255)
      for(let i=0;i<3;i = i+1){
        let r = map(sin(frameCount),-1,1,50,255)
        let g = map(cos(frameCount/2),-1,1,50,255)
        let b = map(sin(frameCount/4),-1,1,50,255)
        stroke(r,g,b)
        rotate(angle)
        noFill()
        rect(0,0,100-i*3,100-i*3,20)
        angle = sin(frameCount) *mouseX/10
      }
        pop() 
        for (let i=0; i<points.length; i++) { 
        noStroke()
        ellipse(points[i].x+mouseX/10,points[i].y+mouseY/10,15+mouseX/100)
        
        }
      }
    }  
}

