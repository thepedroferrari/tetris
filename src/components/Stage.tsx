import React, { FunctionComponent } from 'react'

import Cell from './Cell'

interface Props {
  stage: string
}

const Stage: FunctionComponent<Props> = ({ stage }) => <Cell type="block" />

export default Stage
