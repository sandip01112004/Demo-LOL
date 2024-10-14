import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Welcome</h1>
        <button>Click ME</button>
        <h2>
          This Empire Uday!
        </h2>
      </div>
    </>
  )
}

export default App
