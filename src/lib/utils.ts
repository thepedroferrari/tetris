import { color } from './types'

export const rgbColor = (color: color): string => {
  const { R, G, B } = color
  return `${R}, ${G}, ${B}`
}
