import { min_width, min_height } from "./const";

export default class ViewHandler {
  //consts
  $canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.$canvas = this.checkCanvas(canvas);
    let ctx = this.$canvas.getContext("2d");
    console.log(ctx);
  }

  private checkCanvas(canvas: any): HTMLCanvasElement {
    if (!canvas || canvas.nodeName !== "CANVAS")
      throw new Error("Canvas element is invalid");
    if (canvas.width < min_width || canvas.height < min_height)
      throw new Error("Canvas element is too small");
    return canvas;
  }
}
