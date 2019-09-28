import React from 'react'

import { storiesOf } from '@storybook/react'

import Cell from '../Cell/Cell'

storiesOf('Cell', module)
  .add('with text', () => <Cell type="Super Text on Here" />)
  .add('with some emoji', () => <Cell type="😀 😎 👍 💯" />)
