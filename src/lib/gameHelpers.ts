import { STAGE } from './types'

const stageWidth = STAGE.WIDTH
const stageHeight = STAGE.HEIGHT

export const createStage = (): (string | number)[][] =>
  Array.from(Array(stageHeight), () => new Array(stageWidth).fill([0, 'clear']))
