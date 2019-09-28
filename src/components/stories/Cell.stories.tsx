import React from 'react'
import { storiesOf } from '@storybook/react'

import { defaultColor } from '../../lib/utils'

import Cell from '../Cell/Cell'

storiesOf('Cell', module)
  .add('with text', () => (
    <Cell type="Super Text on Here" color={defaultColor} />
  ))
  .add('with some emoji', () => (
    <Cell type="😀 😎 👍 💯" color={defaultColor} />
  ))
