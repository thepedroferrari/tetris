import React, { FunctionComponent } from 'react'

import { color } from '../../lib/types'

import { StyledCell } from './styles'
import { TETROMINOS } from '../../lib/tetrominos'

interface CellProps {
  type: string
  R: color['R'] | undefined
  G: color['G'] | undefined
  B: color['B'] | undefined
}

const paintTetromino = (
  tetromino: string,
  R: CellProps['R'] = undefined,
  G: CellProps['G'] = undefined,
  B: CellProps['B'] = undefined
) =>
  `${R || TETROMINOS[tetromino].color.R},
   ${G || TETROMINOS[tetromino].color.G},
   ${B || TETROMINOS[tetromino].color.B}`

const Cell: FunctionComponent<CellProps> = ({ type, R, G, B }) => {
  return (
    <StyledCell type={type} color={paintTetromino(TETROMINOS[type], R, G, B)}>
      CELL: {type}
    </StyledCell>
  )
}

export default Cell
