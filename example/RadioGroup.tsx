import React, {
  useState,
  useMemo,
  useContext,
  useCallback,
  useRef,
} from 'react'

import './RadioGroup.css'

const RadioContext = React.createContext(null)

const RadioGroup: React.FunctionComponent<{ label: string }> = ({
  children,
  label,
}) => {
  const [selectedValue, setSelectedValue] = useState(null)
  const initializedRef = useRef(false)

  const context = useMemo(
    () => ({
      selectedValue,
      setSelectedValue,
      initializedRef,
    }),
    [selectedValue]
  )

  return (
    <RadioContext.Provider value={context}>
      <div role="radiogroup" aria-labelledby="group-label">
        <h3 id="group-label">{label}</h3>
        {children}
      </div>
    </RadioContext.Provider>
  )
}

export const useRadio = (
  value: string
): [
  boolean,
  (e: React.KeyboardEvent) => void,
  (e: React.MouseEvent) => void,
  (e: React.FocusEvent) => void
] => {
  const { selectedValue, setSelectedValue, initializedRef } = useContext(
    RadioContext
  )

  const selected = selectedValue === value

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        setSelectedValue(value)
      }

      if (/^(Arrow|Left|Right|Up|Down)/.test(e.key)) {
        initializedRef.current = true
      }
    },
    [initializedRef, setSelectedValue, value]
  )

  const onClick = useCallback(() => {
    setSelectedValue(value)
  }, [setSelectedValue, value])

  const onFocus = useCallback(() => {
    if (initializedRef.current) {
      setSelectedValue(value)
    }
  }, [initializedRef, setSelectedValue, value])

  return [selected, onKeyDown, onClick, onFocus]
}

export default RadioGroup
