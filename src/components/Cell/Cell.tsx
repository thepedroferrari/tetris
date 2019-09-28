import React, { FunctionComponent } from 'react'

import { StyledCell } from './styles'
import { TETROMINOS } from '../../lib/tetrominos'

interface CellProps {
  type: string
}

const Cell: FunctionComponent<CellProps> = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    Cell
  </StyledCell>
)

export default Cell
