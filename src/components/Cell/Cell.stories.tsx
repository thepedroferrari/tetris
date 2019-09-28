import React from 'react'
import { storiesOf } from '@storybook/react'

import Cell from './Cell'

storiesOf('Cell', module)
  .add('Tetromino 0', () => <Cell type="0" />)
  .add('Tetromino I', () => <Cell type="I" />)
  .add('Tetromino J', () => <Cell type="J" />)
  .add('Tetromino L', () => <Cell type="L" />)
  .add('Tetromino O', () => <Cell type="O" />)
  .add('Tetromino S', () => <Cell type="S" />)
  .add('Tetromino T', () => <Cell type="T" />)
  .add('Tetromino Z', () => <Cell type="Z" />)
