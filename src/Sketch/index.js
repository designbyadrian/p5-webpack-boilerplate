import P5 from 'p5';

/**
 * Sketch function controls the flow of the P5 animation with setup() and draw()
 */
const sketch = (p5) => {
  const p = p5;

  const width = 800;
  const height = 600;

  /* Variables from the http://processingjs.org/learning/ example */
  let radius = 50;
  let X;
  let Y;
  let nX;
  let nY;
  let delay = 16;

  p.setup = () => {
    p.createCanvas(width, height);

    p.strokeWeight(10);
    p.frameRate(60);
    X = width / 2;
    Y = height / 2;
    nX = X;
    nY = Y;
  };

  /* Magic happens here */
  p.draw = () => {
    radius += p.sin(p.frameCount / 4);

    X += (nX - X) / delay;
    Y += (nY - Y) / delay;

    p.clear();
    p.fill(0, 121, 184);
    p.stroke(255);

    p.ellipse(X, Y, radius, radius);
  };

  p.mouseMoved = () => {
    nX = p.mouseX;
    nY = p.mouseY;
  };
};

/**
 * Renderer class passes options from main to P5
 */
export default class Renderer {
  constructor(canvasParentElement) {
    this.p5 = new P5(sketch, canvasParentElement);
  }
}
