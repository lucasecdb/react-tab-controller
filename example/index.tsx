import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import { TabController } from '../.'

import RadioGroup from './RadioGroup'
import RadioButton from './RadioButton'

const App = () => {
  return (
    <div>
      <TabController>
        <RadioGroup label="Pizza Crust">
          <RadioButton value="regular" label="Regular Crust" />
          <RadioButton value="deep" label="Deep Dish" />
          <RadioButton value="thin" label="Thin Curst" />
        </RadioGroup>
      </TabController>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
