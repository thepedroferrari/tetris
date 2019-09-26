import React, { FunctionComponent } from 'react'

interface CellProps {
  type: string
}

const Cell: FunctionComponent<CellProps> = ({ type }) => {
  return <div>CELL: {type}</div>
}

export default Cell
