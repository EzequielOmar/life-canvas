export default class Game {
  $canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.$canvas = this.checkCanvas(canvas);
  }

  private checkCanvas(canvas: any): HTMLCanvasElement {
    if (!canvas || canvas.nodeName !== "CANVAS")
      throw new Error("Canvas element is invalid");
    return canvas;
  }
}
