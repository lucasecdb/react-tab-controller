# React Tab Controller

> Simple roving `tabIndex` for React.

## Motivation

A roving `tabIndex` is an a11y technique used for making sure only one
element in a list or group of items is focusable at a time, so the user
can quickly skip a possible large list of items without having to tab
through all elements.

This is accomplished by setting only one children in the group of items
with a `tabIndex` of 0, which is the current selected item, and all other
items with a value of -1. Then, to change the selected item, you can use
the keyboard arrow keys to jump through the items in the group.

## Installation

```sh
yarn add react-tab-controller
# or
npm install react-tab-controller
```

## Usage

You can also try out the live demo at CodeSandbox!

[![Edit radio-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/radioexample-2s9gi?fontsize=14)

```jsx
import React, { useRef } from 'react'
import {
  TabController,
  useControlledTabIndex,
} from 'react-tab-controller'

const MyRadioGroup = () => {
  return (
    <TabController>
      <RadioButton />
      <RadioButton />
      <RadioButton />
    </TabController>
  )
}

const RadioButton = ({ label }) => {
  const buttonRef = useRef(null)

  const { onKeyDown, tabIndex } = useControlledTabIndex(buttonRef, label)

  return (
    <div role="radio" tabIndex={tabIndex} onKeyDown={onKeyDown}>
      {label}
    </div>
  )
}
```
