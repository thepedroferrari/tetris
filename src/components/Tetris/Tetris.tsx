import React, { FunctionComponent, useState } from 'react'

// Components
import Display from '../Display/Display'
import Stage from '../Stage/Stage'
import StartButton from '../StartButton/StartButton'

// Custom Hooks
import { usePlayer } from 'hooks/usePlayer'
import { useStage } from 'hooks/useStage'

// Functions
import { createStage } from 'lib/gameHelpers'

// Styles
import { StyledTetrisWrapper, StyledTetris } from './Tetris.styles'

const Tetris: FunctionComponent = () => {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player] = usePlayer()
  const [stage, setStage] = useState(player)

  console.log('re-rendering')
  console.log(stage)
  return (
    <StyledTetrisWrapper>
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
          <StartButton callback={true} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris
