import React, { useRef, useState } from 'react'

import { useRadio } from './RadioGroup'
import { useControlledTabIndex } from '../.'

import './RadioButton.css'

const RadioButton: React.FunctionComponent<{
  value: string
  label: string
}> = ({ value, label }) => {
  const ref = useRef(null)

  const { tabIndex, onKeyDown } = useControlledTabIndex(ref, value)
  const [selected, radioOnKeyDown, onClick, onFocus] = useRadio(value)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    onKeyDown(e)
    radioOnKeyDown(e)
  }

  return (
    <div
      className="radio-button"
      role="radio"
      aria-checked={selected}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
      onClick={onClick}
      onFocus={onFocus}
      ref={ref}
    >
      {label}
    </div>
  )
}

export default RadioButton
