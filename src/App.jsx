import { useState } from 'react';
import '@/styles/app.scss';
import Header from '@/components/Header.jsx';
import Sidebar from '@/components/Sidebar.jsx';
import TaskTable from '@/components/TaskTable.jsx'

function App() {
      const [activeFilter, setActiveFilter] = useState('All');

  return (
    <>
      <div className="dashboard">
        <Header />
        <Sidebar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <TaskTable activeFilter={activeFilter}/>
      </div>
    </>
  )
}

export default App
