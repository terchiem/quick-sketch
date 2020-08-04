export default class DrawContext {
  constructor(canvas) {
    this.drawing = false;
    this.height = canvas.height;
    this.width = canvas.width;
    this.lastX = 0;
    this.lastY = 0;
    this.ctx = null;
    this.initialize(canvas);
  }

  initialize(canvas) {
    this.ctx = canvas.getContext('2d');
    this.ctx.strokeStyle = '#000';
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 6;
  }

  draw(e) {
    if (!this.drawing) return;
    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.stroke();

    [ this.lastX, this.lastY ] = [ e.offsetX, e.offsetY ];
  }

  startDraw(e) {
    this.drawing = true;
    [ this.lastX, this.lastY ] = [ e.offsetX, e.offsetY ];
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}