import React, { FunctionComponent } from 'react'

import { StyledStage } from './Stage.style'
import Cell from '../Cell/Cell'

interface Props {
  stage: (number | string)[][]
}

const Stage: FunctionComponent<Props> = ({ stage }) => {
  const stageColumns = stage[0].length
  const stageRows = stage.length

  return (
    <StyledStage width={stageColumns} height={stageRows}>
      {stage.map(row => row.map((cell, i) => <Cell type={cell[0]} key={i} />))}
    </StyledStage>
  )
}

export default Stage
