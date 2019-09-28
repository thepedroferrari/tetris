import { configure, addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'

addDecorator(jsxDecorator)

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}
configure(loadStories, module)
