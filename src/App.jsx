// import { useState } from 'react';
import '@/styles/app.scss';
// import '@/App.css'
import Header from '@/components/Header.jsx';
import Sidebar from '@/components/Sidebar.jsx';
import TaskTable from '@/components/TaskTable.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="dashboard">
        <Header />
        <Sidebar />
        <TaskTable />
      </div>
    </>
  )
}

export default App
