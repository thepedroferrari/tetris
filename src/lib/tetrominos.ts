import { Tetrominos } from '../lib/types'

// prettier-ignore
export const TETROMINOS: Tetrominos = {
  0: {
    shape: [[0]],
    color: {
      R: 0,
      G: 0,
      B: 0
    }
  },
  I: {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    color: {
      R: 90,
      G: 230,
      B: 240
    }
  },
  J: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0]
    ],
    color: {
      R: 35,
      G: 95,
      B: 225
    }
  },
  L: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ],
    color: {
      R: 225,
      G: 175,
      B: 35
    }
  },
  O: {
    shape: [
      [1, 1],
      [1, 1]
    ],
    color: {
      R: 225,
      G: 215,
      B: 35
    }
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ],
    color: {
      R: 50,
      G: 210,
      B: 55
    }
  },
  T: {
    shape: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0]
    ],
    color: {
      R: 130,
      G: 60,
      B: 200
    }
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    color: {
      R: 225,
      G: 80,
      B: 80
    }
  },

}

const tetrominos: string = Object.keys(TETROMINOS).join('')

export const selectRandomTetromino = () => {
  const randomTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)]

  return TETROMINOS[randomTetromino]
}
