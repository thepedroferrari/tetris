import React, { FunctionComponent, useState } from 'react'

// Components
import Display from '../Display/Display'
import Stage from '../Stage/Stage'
import StartButton from '../StartButton/StartButton'

// Custom Hooks
import { usePlayer } from 'hooks/usePlayer'
import { useStage } from 'hooks/useStage'

// Functions
import { createStage, defaultStage } from 'lib/gameHelpers'

// Styles
import { StyledTetrisWrapper, StyledTetris } from './Tetris.styles'

// Types
import { KEYCODES } from 'lib/types'

const Tetris: FunctionComponent = () => {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player, updatePlayerPos, resetPlayer] = usePlayer()
  const [stage, setStage] = useStage(player, resetPlayer)

  console.log('re-rendering')
  console.log(stage)

  const movePlayer = (dir: any) => {
    updatePlayerPos({ x: dir, y: 0 })
  }

  const startGame = () => {
    // Reset everything
    setStage({ ...defaultStage })
    resetPlayer()
  }

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false })
  }

  const dropPlayer = () => {
    drop()
  }

  const move = (keyCode: number) => {
    switch (keyCode) {
      case KEYCODES.LEFT:
        movePlayer(-1)
        break
      case KEYCODES.RIGHT:
        movePlayer(1)
        break
      case KEYCODES.DOWN:
        dropPlayer()
        break
    }
  }

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => move(e.keyCode)}
    >
      <StyledTetris>
        <Stage
          collided={stage.collided}
          pos={stage.pos}
          tetromino={stage.tetromino}
          stage={stage.stage}
        />
        <aside>
          {gameOver ? (
            <Display text="Game Over" gameOver={gameOver} />
          ) : (
            <>
              <Display text="Score" gameOver={gameOver} />
              <Display text="Rows" gameOver={gameOver} />
              <Display text="Level" gameOver={gameOver} />
            </>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris
