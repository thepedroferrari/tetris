import { useState } from 'react'

import { getRandomTetromino } from 'lib/tetrominos'
import { PlayerStage } from 'lib/types'

export const usePlayer = () => {
  const [player, setPlayer] = useState<PlayerStage>({
    collided: false,
    pos: { x: 0, y: 0 },
    stage: [[0]],
    tetromino: getRandomTetromino().shape
  })

  return [player]
}
