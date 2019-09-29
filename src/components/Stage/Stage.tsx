import React, { FunctionComponent } from 'react'

import { StyledStage } from './Stage.style'
import Cell from '../Cell/Cell'

import { PlayerStage } from 'lib/types'

const Stage: FunctionComponent<PlayerStage> = ({ stage }) => {
  const stageColumns = stage[0].length
  const stageRows = stage.length

  return (
    <StyledStage width={stageColumns} height={stageRows}>
      {stage.map(row =>
        row.map((cell, i) => {
          return <Cell type={cell[0] || 0} key={i} />
        })
      )}
    </StyledStage>
  )
}

export default Stage
