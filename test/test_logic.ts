import LogicHandler from "../src/logic-handler";
import { assert, expect } from "chai";

/**
 * Tests LogicHandler class
 *
 * @group unit/classes/LogicHandler
 */
describe("Handle Game Logic class", () => {
  it("Should return an empty map of correct size", () => {
    let logic = new LogicHandler(7, 3);
    expect(logic.map.length).to.be.equals(7);
    expect(logic.map[0].length).to.be.equals(3);
    expect(logic.map).to.be.an("array");
    for (let i = 0; i < logic.map.length; i++)
      logic.map[i].forEach((d) => {
        expect(d).equal("0");
      });
  });

  it("Should calculate new positions correctly", () => {
    let sample1 = [
      [0, 1, 0, 1, 1, 1],
      [1, 0, 1, 0, 0, 0],
      [0, 1, 0, 1, 1, 1],
      [0, 1, 0, 0, 0, 0],
    ];
    let sol1 = [
      [0, 1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 0],
      [1, 1, 0, 1, 1, 0],
      [0, 0, 1, 0, 1, 0],
    ];
    let sample2 = [
      [0, 1],
      [0, 0],
    ];
    let sol2 = [
      [0, 0],
      [0, 0],
    ];
    let sample3 = [
      [1, 1],
      [0, 1],
    ];
    let sol3 = [
      [1, 1],
      [1, 1],
    ];
    let logic = new LogicHandler(4, 6);
    logic.map = sample1;
    logic.calculateNewPositions();
    expect(logic.map).to.be.eql(sol1);
    logic = new LogicHandler(2, 2);
    logic.map = sample2;
    logic.calculateNewPositions();
    expect(logic.map).to.be.eql(sol2);
    logic = new LogicHandler(2, 2);
    logic.map = sample3;
    logic.calculateNewPositions();
    expect(logic.map).to.be.eql(sol3);
  });
});
