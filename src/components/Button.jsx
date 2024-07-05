import React, { useContext } from 'react'
import { ThemeContext } from '../themes/ThemeContext'

const Button = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <button onClick={changeTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  )
}

export default Button