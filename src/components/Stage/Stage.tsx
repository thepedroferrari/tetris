import React, { FunctionComponent } from 'react'

import Cell from './Cell/Cell'

interface Props {
  stage: (number | string)[][]
}

const Stage: FunctionComponent<Props> = ({ stage }) => {
  return (
    <div>
      {stage.map(row => row.map((cell, i) => <Cell type={cell[0]} key={i} />))}
    </div>
  )
}

export default Stage
