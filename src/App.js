import React, { useRef, useMemo } from 'react'
import logo from './logo.svg'
import './App.css'
import { useResizeObserver } from './hooks/useResizeObserver'

function App() {
  const container = useRef()
  const image = useRef()

  const refs = useMemo(() => [container, image], [container, image])
  const dimensions = useResizeObserver(refs)
  // console.log(dimensions)

  return (
    <div className="App" ref={container}>
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
