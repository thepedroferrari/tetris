import React, { FunctionComponent } from 'react'

// Functions
import { createStage } from '../lib/gameHelpers'

// Components
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'

interface Props {}
const Tetris: FunctionComponent<Props> = () => {
  return (
    <>
      <Stage stage={createStage()} />
      <aside>
        <Display text="Score" gameOver={false} />
        <Display text="Rows" gameOver={false} />
        <Display text="Level" gameOver={false} />
        <StartButton callback={true} />
      </aside>
    </>
  )
}

export default Tetris
