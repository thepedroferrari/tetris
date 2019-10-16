export enum STAGE {
  WIDTH = 12,
  HEIGHT = 20
}

export const createStage = () =>
  Array.from(Array(STAGE.HEIGHT), () => Array(STAGE.WIDTH).fill([0, 'clear']))

interface xy {
  x: number
  y: number
}

export const checkCollision = (
  player: any,
  stage: any,
  { x: moveX, y: moveY }: xy
) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check that we're on an actual Tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check that our move is inside the game areas height (y)
          // That we're not go through bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that our move is inside the game areas width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check that the cell wer'e moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            'clear'
        ) {
          return true
        }
      }
    }
  }
  // 5. If everything above is false
  return false
}
