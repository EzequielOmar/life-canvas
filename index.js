window.addEventListener("load", main);
import ViewHandler from "./dist/src/view-handler.js";

function main() {
  console.log("asd");
  let canvas = document.getElementById("life");
  let life = new ViewHandler(canvas);
}
