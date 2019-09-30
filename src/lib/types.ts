export enum STAGE {
  WIDTH = 12,
  HEIGHT = 20
}

export enum KEYCODES {
  LEFT = 37,
  RIGHT = 39,
  DOWN = 40
}

export interface color {
  R: number
  G: number
  B: number
}

export interface Shape {
  shape: number[][]
}
export interface ColoredTetromino extends Shape {
  color: string
}

export interface Tetromino {
  tetromino: number[][]
}

export interface ColoredTetrominos {
  0: ColoredTetromino
  I: ColoredTetromino
  J: ColoredTetromino
  L: ColoredTetromino
  O: ColoredTetromino
  S: ColoredTetromino
  T: ColoredTetromino
  Z: ColoredTetromino
}

export interface Position {
  x: number
  y: number
}
export interface Stage {
  stage: (number | string)[][]
}

export interface TetrominoPosition extends Position {
  collided: Boolean
}
export interface PlayerPosition {
  collided: Boolean
  pos: Position
}
export interface PlayerStage extends PlayerPosition, Stage, Tetromino {}
