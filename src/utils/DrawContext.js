export default class DrawContext {
  constructor(canvas) {
    this.drawing = false;
    this.height = canvas.height;
    this.width = canvas.width;
    this.lastPoint = { x: 0, y: 0 };
    this.ctx = null;
    this.initialize(canvas);
  }

  /** Set up canvas 2d context */
  initialize(canvas) {
    this.ctx = canvas.getContext('2d');
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.brush = document.querySelector('.cursor');
  }

  /** Draw method to apply brush image */
  draw(e) {
    if (!this.drawing) return;

    const currentPoint = { x: e.offsetX, y: e.offsetY };
    const dist = this.distanceBetween(this.lastPoint, currentPoint);
    const angle = this.angleBetween(this.lastPoint, currentPoint);

    for (let i = 0; i < dist; i++) {
      const x = this.lastPoint.x + (Math.sin(angle) * i) - 8;
      const y = this.lastPoint.y + (Math.cos(angle) * i) - 8;
      this.ctx.drawImage(this.brush, x, y);
    }

    this.lastPoint = currentPoint;
  }

  distanceBetween(point1, point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  }

  angleBetween(point1, point2) {
    return Math.atan2( point2.x - point1.x, point2.y - point1.y );
  }

  startDraw(e) {
    this.drawing = true;
    this.lastPoint.x = e.offsetX;
    this.lastPoint.y = e.offsetY;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}