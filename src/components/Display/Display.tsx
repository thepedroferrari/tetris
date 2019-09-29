import React, { FunctionComponent } from 'react'
import { StyledDisplay } from './Display.styles'

interface Props {
  gameOver: boolean
  text: string
}

const Display: FunctionComponent<Props> = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
)

export default Display
