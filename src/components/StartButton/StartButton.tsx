import React, { FunctionComponent } from 'react'

interface Props {
  callback: boolean
}

const StartButton: FunctionComponent<Props> = ({ callback }) => (
  <div>Start Game</div>
)

export default StartButton
