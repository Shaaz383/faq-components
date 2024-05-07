import { useState } from 'react'

import './App.css'
import FAQComp from './components/FAQComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <h1>Frequently  Asked Questions</h1>
      <FAQComp/>
    </div>
    </>
  )
}

export default App
