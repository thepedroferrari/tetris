import React, { FunctionComponent } from 'react'

// Functions
import { createStage } from '../../lib/gameHelpers'

// Components
import Display from '../Display/Display'
import Stage from '../Stage/Stage'
import StartButton from '../StartButton/StartButton'

// Styles
import { StyledTetrisWrapper, StyledTetris } from './Tetris.styles'

const Tetris: FunctionComponent = () => (
  <StyledTetrisWrapper>
    <StyledTetris>
      <Stage stage={createStage()} />
      <aside>
        <Display text="Score" gameOver={false} />
        <Display text="Rows" gameOver={false} />
        <Display text="Level" gameOver={false} />
        <StartButton callback={true} />
      </aside>
    </StyledTetris>
  </StyledTetrisWrapper>
)

export default Tetris
