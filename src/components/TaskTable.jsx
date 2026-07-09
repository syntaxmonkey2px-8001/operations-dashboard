import tasks from '@/data/mockTasks.js'
import { useState } from 'react';
import handleButtonClick from '@/components/Sidebar.jsx'

export default function TaskTable() {

    const[filter, setFilter] = useState('All')

    const header = ['Title', 'Assignee', 'Status', 'Due Date', 'Priority']

    const priorityClass = {
        High: 'priority-high',
        Medium: 'priority-medium',
        Low: 'priority-low'
    };

    const statusClass = {
        'In Progress': 'status-inProgress',
        'To-Do':'status-todo',
        Done: 'status-done',
        Blocked: 'status-blocked',
    }

    function filterStatus(){

        // handle click
        //  /use active class from sidebar
        // change status
        // change display

    }
return (
    <main>
        <h3>Tasks</h3>
        <table>
            <thead>
                <tr>
                    {header.map((header) =>
                        <th key={header}>
                            {header}
                        </th>
                    )}
                </tr>
            </thead>
            <tbody>
                {tasks.map((tasks) =>
                    <tr key={tasks.id}>
                        <td> {tasks.title}</td>
                        <td> {tasks.assignee}</td>
                        <td className={statusClass[tasks.status]}> {tasks.status}</td>
                        <td> {tasks.dueDate}</td>
                        <td className={priorityClass[tasks.priority]}> {tasks.priority}</td>
                        {/* {Object.values(tasks).map((value, index) =>
                                <td key={index}
                                    className={value === 'High' ? 'high' : ''}>
                                    {value}
                                </td> */}
                        {/* )
                            } */}
                    </tr>
                )}
            </tbody>
        </table>
    </main>
)
}