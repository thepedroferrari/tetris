import React, { FunctionComponent } from 'react'

interface Props {
  gameOver: boolean
  text: string
}

const Display: FunctionComponent<Props> = ({ gameOver, text }) => (
  <div>{text}</div>
)

export default Display
