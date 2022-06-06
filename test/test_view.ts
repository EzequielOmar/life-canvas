import ViewHandler from "../src/view-handler";
import { expect } from "chai";
import { min_height, min_width } from "../src/const";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { document } = new JSDOM(`<canvas></canvas>`, {
  url: "https://example.org/",
}).window;
let canvas: any;

/**
 * Tests ViewHandler class
 *
 * @group unit/classes/ViewHandler
 */
xdescribe("Handle Game View class", () => {
  it("Should Fail on passing null canvas", () => {
    expect(() => new ViewHandler(null)).to.throw("Canvas element is invalid");
  });

  it("Should Fail on passing canvas too small", () => {
    canvas = document.querySelector("canvas");
    canvas.width = min_width - 1;
    canvas.height = min_height - 1;
    expect(() => new ViewHandler(canvas)).to.throw(
      "Canvas element is too small"
    );
  });
});
