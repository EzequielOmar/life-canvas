import Game from "../src/game";
import { expect } from "chai";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { document } = new JSDOM(`<canvas></canvas>`, {
  url: "https://example.org/",
}).window;
let canvas: any;

/**
 * Tests Game class
 *
 * @group unit/classes/Game
 */
describe("Game class", () => {
  it("Should Fail on passing null canvas", () => {
    canvas = document.querySelector("canvas");
    expect(() => new Game(null)).to.throw("Canvas element is invalid");
  });

  it("Should Fail on passing canvas too small", () => {});
});
