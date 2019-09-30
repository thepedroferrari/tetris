import { useState, useCallback } from 'react'

import { getRandomTetromino } from 'lib/tetrominos'
import { PlayerStage, STAGE, TetrominoPosition } from 'lib/types'
import { defaultStage } from 'lib/gameHelpers'

export const usePlayer = () => {
  const [player, setPlayer] = useState<PlayerStage>({
    collided: false,
    pos: { x: 0, y: 0 },
    stage: [[0]],
    tetromino: getRandomTetromino().shape
  })

  const updatePlayerPos = ({ x, y, collided }: TetrominoPosition) => {
    setPlayer(prev => ({
      ...prev,
      pos: {
        x: prev.pos.x += x,
        y: prev.pos.y += y
      },
      collided
    }))
  }

  const resetPlayer = useCallback(() => {
    setPlayer((initial = defaultStage) => ({
      ...initial,
      pos: {
        x: STAGE.WIDTH / 2 - 2,
        y: 0
      },
      tetromino: getRandomTetromino().shape,
      collided: false
    }))
  }, [])
  return [player, updatePlayerPos, resetPlayer]
}
