import React from 'react'
import * as styles from './index.module.css'

interface Props {
  placeholder: string
  value: string
  onChange: (nextValue: string) => void
}

const Input: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value)
  }
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type="text"
          onChange={handleOnChange}
          {...{value, placeholder}}
        />
      </div>
    </div>
  )
}

export default Input
