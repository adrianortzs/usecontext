import React from 'react'
import RoutesApp from './routes/RoutesApp'
import {ThemeProvider, ThemeContext} from './themes/ThemeContext'
import { useContext } from 'react'
import './App.css'

const App = () => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <ThemeProvider>
      <div className={`App ${theme}`}>
        <RoutesApp />
      </div>
    </ThemeProvider>
  )
}

export default App

