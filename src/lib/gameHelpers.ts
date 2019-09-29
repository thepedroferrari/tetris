import { STAGE } from './types'

const stageWidth = STAGE.WIDTH
const stageHeight = STAGE.HEIGHT

// Creates ONE array containing $stageHeight number of arrays.
// Each of these arrays contains $stageWidth number of arrays.
// Each of these arrays contains one array of [0, 'clear']
export const createStage = (): (string | number)[][] =>
  Array.from(Array(stageHeight), () => new Array(stageWidth).fill([0, 'clear']))
