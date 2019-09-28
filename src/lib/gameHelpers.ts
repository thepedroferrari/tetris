export enum STAGE {
  WIDTH = 12,
  HEIGHT = 20
}

export const createStage = () =>
  Array.from(Array(STAGE.HEIGHT), () =>
    new Array(STAGE.WIDTH).fill([0, 'clear'])
  )
