/**
 * Private Class to handle all the logic and math from game
 */
export default class LogicHandler {
  private _map: number[][] = [];
  rowsCount: number;
  colsCount: number;

  constructor(rows: number, columns: number) {
    this.rowsCount = rows;
    this.colsCount = columns;
    this._map = this.drawEmpty();
  }

  get map() {
    return this._map;
  }

  set map(map: number[][]) {
    this._map = map;
  }

  calculateNewPositions() {
    let m = this.drawEmpty();
    for (let r = 0; r < this.rowsCount; r++) {
      for (let c = 0; c < this.colsCount; c++) {
        let nbCount: number = this.calculateNeighbours(r, c);
        //* A cell has born
        if (this.map[r][c] == 0 && nbCount == 3) m[r][c] = 1;
        //* Cell survives
        else if (this.map[r][c] == 1 && (nbCount == 2 || nbCount == 3))
          m[r][c] = 1;
        //* Cell dies
        else m[r][c] = 0;
      }
    }
    this._map = m;
  }

  private calculateNeighbours(row: number, col: number) {
    let rowStart: number = row;
    let rowEnd: number = row;
    let colStart: number = col;
    let colEnd: number = col;
    let count: number = 0;
    //* Get limits around
    if (row > 0) rowStart--;
    if (row < this.rowsCount - 1) rowEnd++;
    if (col > 0) colStart--;
    if (col < this.colsCount - 1) colEnd++;
    //* Count neighbours
    for (let r = rowStart; r <= rowEnd; r++)
      for (let c = colStart; c <= colEnd; c++) {
        //* Pass the cell to check
        if (row === r && col === c) continue;
        else count += this._map[r][c];
      }
    return count;
  }

  private drawEmpty(): number[][] {
    //* Fill a sized map with '0' and return it
    let m = [];
    for (let i = 0; i < this.rowsCount; i++)
      m.push(Array(this.colsCount).fill("0"));
    return m;
  }
}
