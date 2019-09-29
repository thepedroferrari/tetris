import { Tetrominos } from 'lib/types'

// prettier-ignore
export const TETROMINOS: Tetrominos = {
  0: {
    shape: [[0]],
    color: '0, 0, 0'
  },
  I: {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    color: '240, 30, 40'
  },
  J: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0]
    ],
    color: '35, 95, 225'
  },
  L: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ],
    color: '225, 175, 35'
  },
  O: {
    shape: [
      [1, 1],
      [1, 1]
    ],
    color: '225, 215, 35'
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ],
    color: '50, 210, 55'
  },
  T: {
    shape: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0]
    ],
    color: '130, 60, 200'
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    color: '225, 80, 80'
  },

}

const tetrominos: string = Object.keys(TETROMINOS).join('')

export const getRandomTetromino = () => {
  const randomTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)]

  return TETROMINOS[randomTetromino]
}
