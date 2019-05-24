import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { TabController } from '../src'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TabController />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
