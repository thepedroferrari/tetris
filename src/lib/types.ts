export interface color {
  R: number
  G: number
  B: number
}

export interface Tetromino {
  shape: Array<Array<number>>
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
