export enum STAGE {
  WIDTH = 12,
  HEIGHT = 20
}

export interface color {
  R: number
  G: number
  B: number
}

export interface Tetromino {
  shape: number[][]
  color: string
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
