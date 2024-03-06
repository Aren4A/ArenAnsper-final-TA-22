import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header className='w-full' >
          <div className='flex flex-row'>
            <p>Visioon</p>
            <p>Hind</p>
            <p>Kontakt</p>
          </div>
        </header>
        <body className='w-full'>
        </body>
        <footer></footer>
    </>
  )
}

export default App
