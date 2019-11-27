import React, { useRef } from 'react'
import logo from './logo.svg'
import './App.css'
import { useResizeObserver } from './hooks/useResizeObserver'

function App() {
  const image = useRef()
  const dimensions = useResizeObserver(image)
  // console.log(dimensions)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" ref={image} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
