import React, { FunctionComponent } from 'react'

import { StyledStartButton } from './StartButton.styles'

interface Props {
  callback: boolean
}

const StartButton: FunctionComponent<Props> = ({ callback }) => (
  <StyledStartButton onclick={callback}>Start Game</StyledStartButton>
)

export default StartButton
