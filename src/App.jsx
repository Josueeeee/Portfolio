import { useState } from 'react'
import './css/skilss.css'
import './css/info.css'
import './css/mediaQuerys.css'
import './css/navbar.css'
import { Skills, Info, Navbar } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Navbar />
      <div className="App">
        <Info />
        <Skills />
      </div>
    </div >
  )
}

export default App
