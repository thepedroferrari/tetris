export enum STAGE {
  WIDTH = 12,
  HEIGHT = 20
}

export interface color {
  R: number | undefined
  G: number | undefined
  B: number | undefined
}

export interface Tetromino {
  shape: number[][]
  color: color
}

export interface Tetrominos {
  0: Tetromino
  I: Tetromino
  J: Tetromino
  L: Tetromino
  O: Tetromino
  S: Tetromino
  T: Tetromino
  Z: Tetromino
}
