import React, { FunctionComponent } from 'react'

import { color } from '../../lib/types'

import { StyledCell } from './styles'
import { TETROMINOS } from '../../lib/tetrominos'

interface CellProps {
  type: string
  color: color
}

const paintTetromino = (
  tetromino: string,
  R: CellProps['color']['R'] = undefined,
  G: CellProps['color']['G'] = undefined,
  B: CellProps['color']['B'] = undefined
) => ({
  R: R || 0,
  G: G || 0,
  B: B || 0
})

const Cell: FunctionComponent<CellProps> = ({ type, color }) => {
  return (
    <StyledCell>
      <Cell
        type={type}
        color={paintTetromino(TETROMINOS[type], color.R, color.G, color.B)}
      />
    </StyledCell>
  )
}

export default Cell
