import fs = require("fs");

const figuresURL = "figures/";

/**
 * Private class to habdle the reading and parse from RLE files in figures folder
 */
export default class readFigures {
  static selectOne = async () => {
    let files = await this.readFolder();
    console.log(files);
    let randomFile = await this.readFile(
      files[Math.floor(Math.random() * (files.length - 0 + 1) + 0)]
    );
    return this.parseOne(randomFile);
  };

  //static parseAll = async () => {
  //  let data = await this.readFolder();
  //  console.log(data);
  //};

  /**
   * Read all the figuresURL directory
   * @returns String's Array with names of the files in folder
   */
  private static readFolder = async () => {
    try {
      return fs.promises.readdir(figuresURL);
    } catch (err) {
      throw new Error(figuresURL + " does not exists, or could not been read.");
    }
  };

  private static readFile = async (fileName: string) => {
    try {
      return fs.promises.readFile(figuresURL + fileName, "utf8");
    } catch (err) {
      throw new Error("Fail while reading " + figuresURL + fileName + " url");
    }
  };

  private static parseOne(data: string) {
    //* Trim unused first part of file
    data = data.split("B3/S23")[1].trim();
    let uncompressed = [];
    let row = [];
    let rep = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i] === "\n") continue;
      //* repetitions
      else if (!isNaN(parseInt(data[i]))) {
        rep += data[i];
        continue;
      }
      //* Insert value on row
      else if (data[i] === "b" || data[i] === "o") {
        let c = data[i] === "b" ? "0" : "1";
        rep ? row.push(...Array(parseInt(rep)).fill(c)) : row.push(c);
        rep = "";
        continue;
      }
      //* End of Row
      else if (data[i] === "$") {
        uncompressed.push(row);
        row = [];
        continue;
      }
      //* End of file
      else if (data[i] === "!") {
        uncompressed.push(row);
        break;
      }
    }
    return uncompressed;
  }
}
