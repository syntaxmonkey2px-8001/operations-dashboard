import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Operation Dashboard</h1>
        <p>Internal task tracking for staff workflows</p>
      </header>
      <aside>
        <h3>Filter</h3>
        <p>All</p>
        <p>To-Do</p>
        <p>In Progress</p>
        <p>Done</p>
        <p>Blocked</p>
      </aside>
      <main>
        <h3>Tasks</h3>
        Table will go here next milestone
        For now, use an empty placeholder box or text block
      </main>
    </>
  )
}

export default App
