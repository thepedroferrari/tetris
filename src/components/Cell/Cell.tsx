import React, { FunctionComponent } from 'react'

import { StyledCell } from './Cell.styles'
import { TETROMINOS } from 'lib/tetrominos'

interface CellProps {
  type: string
}

const Cell: FunctionComponent<CellProps> = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
)

export default Cell
