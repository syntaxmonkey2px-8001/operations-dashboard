import { useState } from 'react';
import './styles/app.scss';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="dashboard">
        <header>
          <h1>Operations Dashboard</h1>
          <p><i>Internal task tracking for staff workflows</i></p> {/*note to self*/}
          <p>
            {/* Right-aligned: small user badge  */}
            name + avatar placeholder
          </p>
        </header>
        <aside>
          <h3>Filter</h3>
          <div className="button-wrapper">
            <button>All</button>
            <button>To-Do</button>
            <button>In Progress</button>
            <button>Done</button>
            <button>Blocked</button>
          </div>
        </aside>
        <main>
          <h3>Tasks</h3>
          Table will go here next milestone
          For now, use an empty placeholder box or text block
        </main>
      </div>
    </>
  )
}

export default App
