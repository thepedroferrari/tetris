import { useState } from 'react'
import { createStage } from 'lib/gameHelpers'

export const useStage = (): any => {
  const newStage = createStage()
  const [stage, setStage] = useState(newStage)

  return [stage, setStage]
}
